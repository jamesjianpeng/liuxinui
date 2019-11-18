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

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
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
在 constructor 中在使用了这些方法，先来初略一下
```js
```
