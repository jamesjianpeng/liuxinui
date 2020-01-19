## es6-promise 原码分析

### /es6-promise.auto.js 库的入口文件
```
import Promise from './es6-promise';
Promise.polyfill(); // polyfill 调用
export default Promise;
```

### /es6-promise.js 挂载 polyfill 和 promise
```
import Promise from './es6-promise/promise';
import polyfill from './es6-promise/polyfill';

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;
export default Promise;
```
> 根据引用的路径就会发现 Promise Class

### /es6-promise/promise.js
#### 1. 初步从 Promise class 中可得知一下信息：
1. Promise 初始化的错误处理
2. Promise 原型上的方法：then, catch, finally
3. Promise 上静态的方法：all, race, resolve, reject, 还有三个是私有方法_setScheduler, _setAsap, _asap
4. then 这个方法很重要，不管 catch 还是 finally 都做具体的操作的时候都使用到了 then
5. 作者在 Promise class 开头的介绍需要仔细读一读

```
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Promise 对象代表一个异步操作的最终结果
  与 Promise 交互的方式是通过 ‘then’ 方法
  注册的回调用于接收要么是一个 Promise 最终的值，要么是 Promise 失败的原因
```
> represent v. 代表
> eventual adj. 最终的
> asynchronous n. 异步
> interacting v. 互动
>

```
Terminology  术语
  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  - 'promise' 是一个对象或者函数，它拥有 ‘then’方法, 并且它的行为确定了它的规则
  - 'thenable' 是一个对象或者函数，它定义了一个 'then' 方法
  - 'value' 是一个合法的JavaScript值（包括 undefined, 一个thenable, 或者一个 promise）
  - 'exception' 是使用throw语句抛出的值
  - 'reason' 是一个表明 promise 被拒绝原因的值
  - 'settled' 是一个 promise 最终的状态，fulfilled（完成）或 rejected(拒绝)

  A promise can be in one of three states: pending, fulfilled, or rejected.

 一个 promise 可以用三种的其中一种状态：peding（挂起）, fulfilled（完成）, rejected（拒绝）

   Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promise 是被履行的，就会有被履行的的值和完成的状态
  Promise 是被拒绝的，就会有拒绝的原因和拒绝的状态
  一个完成的的值绝不是一个 thenable

  Promise 可以说是 *resolve（解析）* 一个值，如果这个值也是一个 Promise，然后这个原本的 promise 最终的状态将会匹配这个值最终的状态。所以一个 promise 解析成一个 promise ,若这个 promise 是被拒绝则，原来的 promise 就要被拒绝；若 这个 promise 完成，则原来的 promise 就是完成
```
引言主要就是介绍 Promise 的几个术语 promise, thenable（带有 then 方法的对象）, value（promise 解析的值）, exception（意外操作）, reason（被拒绝原因）, settled(最终状态)；promise 每个时候只能处于 pending,fulfilled,rejected 三种状态中的一种，promise 解析的值如果又是一个值，则原来 promise 的最终状态则由后面的 promise 的状态决定

后面举了使用的例子，此次省略

#### Promise 的 constructor 方法
##### /es6-promise/promise.js
```js
import {
  noop,
  nextId,
  PROMISE_ID,
  initializePromise
} from './-internal'; // internal 内部私有的方法

/**
 * @description 在初始化 Promise 的时候，必须是要传一个函数
 */
function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  // 在 promise 构成函数中必须使用一个解析函数（一般的函数）作为第一个参数
}

/**
 * @description 不是使用 new 关键字调用的时候会抛出该信息
 */
function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  // 构造 Promise 失败，请使用 new 操作符，Promise 构造函数不能作为一个函数调用
}

class Promise {
  constructor(resolver) {
    this[PROMISE_ID] = nextId(); // 生成一个 Promise id
    this._result = this._state = undefined; // 初始化私有的结果和状态
    this._subscribers = []; // 初始化订阅列表

    if (noop !== resolver) { 为什么？🤔️
      typeof resolver !== 'function' && needsResolver(); // 不是函数，则提示传函数，为什么？🤔️
      this instanceof Promise // 这个种方式是防止不使用 new 关键字调用，es6
      ? initializePromise(this, resolver) : needsNew();

    }
  }
  ......
}
```

##### /es6-promise/-internal.js
在 constructor 中在使用了这些方法，先来初略一下 noop, nextId, initializePromise
```js
import {
  asap
} from './asap'; // 目前在

/**
 * @description 传入的 resolver function 进行对比，对比一定不相同 🤔️
 */
function noop() {}

/**
 * @description 生成唯一的一个 promise id
 */
let id = 0;
function nextId() {
  return id++;
}

/**
 * @function 封装一层promise和resolver的处理过程
 * @param {Promise} promise
 * @param {Function} resolver
 * 从这段代码就对应了  new Promise((resolve, reject) =>  {}) 解析函数的的两参数 resolve, reject，它们是 function
 */
function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value){ // resolvePromise对外暴露的参数只有一个 value， 但是实际上内部调用的是resolve，它有两个参数, 原理利用闭包把第一个promise参数封装起来，使用者只关心 value（reason）
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch(e) {
    reject(promise, e);
  }
}

/**
 * @function 根据initializePromise这个方法继续找到resolve这个方法，
 * @param {Promise} promise
 * @param {value} any
 * 我们先看看 1. fulfill 成功的时候这个方法做的事情
 */
function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    let then;
    try {
      then = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then);
  } else {
    fulfill(promise, value); // 1
  }
}

const PENDING   = void 0; // 挂起状态
const FULFILLED = 1; // 完成状态
const REJECTED  = 2; // 拒绝状态

/**
 * @function fulfill
 * @param {Promise} promise
 * @param {value} any
 */
function fulfill(promise, value) {
  if (promise._state !== PENDING) { return; } // 当 promise 的状态已经到了 FULFILLED 或 REJECTED 说明 Promise d的生命周期已经完成

  // promise._state 是 PENDING 的时候，则给出完成的结果和修改最终状态
  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise); // 🤔️ asap 尽快的意思
  }
}

/**
 * @function publish发布，具体是发布啥，发布的时间是什么时候，1.在fulfill（履行）的时候，会吧publish函数提前传入，何时调用要看asap的具体操作，可以提前分析一下具体的容
 * @param {Promise} promise
 */
function publish(promise) {
  let subscribers = promise._subscribers; // 这个在 Promise constructor 里_subscribers初始化是 []
  let settled = promise._state;// 这个在 Promise constructor 里_subscribers初始化是 undefined

  if (subscribers.length === 0) { return; }

  let child, callback, detail = promise._result;

  for (let i = 0; i < subscribers.length; i += 3) { // 3 是这样来的，在 /es6-promise/-internal.js 中状态有三种 PENDING = void 0, FULFILL = 1, REJECT = 2, 每种状态对应有一个callback,从 invokeCallback 中可以知道
    child = subscribers[i]; // 🤔️
    callback = subscribers[i + settled]; // 每种状态对于一个 callback

    if (child) {
      invokeCallback(settled, child, callback, detail);// 比较复杂，后面再分析
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

```
##### /es6-promise/asap.js 感觉越来越接近 promise 的本质
```js
let len = 0;
let vertxNext;
let customSchedulerFn;
/**
 * @function asap 是用来把每个Promise的三种状态都在队列上分为一组如
 * 第一组：0，1，2
 * 第二组：3，4，5
 * 第三组：6，7，8
 * 每组的起点的： 3 * n (n >= 0) 第一组从0开始
 *
 * 每一组中第一个元素是存放 publish 函数
 * 第二个函数传 promise 这个对象
 *
 */
export var asap = function asap(callback, arg) { // 🤔️ 为啥要这样写
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) { //
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
}


let scheduleFlush;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof require === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}
```

