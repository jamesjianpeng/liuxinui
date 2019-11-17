/**
 * @function 这个方法是继承的具体方法
 * @return {Function<constructor, constructor>}
 */
var __extends = (this && this.__extends) || (function () {
  /**
   * @function 该函数要是把b(父类)的静态方法复制给d(子类)，把名字拆开看就是这个意思
   * @param {constructor} d 子类构造函数
   * @param {constructor} b 父类构造函数
   */
  var extendStatics = function (d, b) {
      /**
       * @function 参数解释同最外层的 extendStatics 方法，是具体的实现
       */
      extendStatics = Object.setPrototypeOf /* 这是 ES6 最新的改变一个对象的原型的方法 后面的两段代码都是 Object.setPrototypeOf 的 Polyfill https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf */
        || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
        /* 仅适用于Chrome和FireFox，在IE中不工作, 通过修改 要d（子类构造函数）的 __proto__(浏览器自己实现的原型属性 key), 来继承父类的静态方法*/
        || function (d, b) {
          /** @description 通过 for in b 把父类静态方法（自身的方法）都复制给 d(子类构造函数上)  */
          console.dir(d)
          console.dir(b)
          for (var p in b) {
            console.log(p)
            debugger
            if (b.hasOwnProperty(p)) d[p] = b[p] /* objextdata.hasOwnProperty 指示对象自身属性中是否具有指定的属性,返回 true, 否则为 false，是原型上的属性（继承的属性）则返回flase */
          };
        } /* IE 中可以生效 */
        ;
      return extendStatics(d, b); /* 执行静态方法的继承 */
  };

  /**
   * @function 继承的具体实现1.静态方法复制；2.修正子类的prototype
   * @param {constructor} d 子类构造函数
   * @param {constructor} b 父类构造函数
   */
  return function (d, b) {
      extendStatics(d, b); /* 静态方法的复制 */

      function __() { this.constructor = d; } /** 利用闭包，修正 __ 构造函数的 constructor 为子类构造函数  */

      console.log(d.prototype = b === null) // 先把 b 赋值给 d.prototype 之后执行 b === null

      console.dir(b)
      console.dir(b.prototype) // 构造函数本身也是一个函数 本质上 new Function('xxxx) 的方式


      d.prototype =
      b === null /** 先判断父类是否为 null */
      ? Object.create(b) /* b 为 null 的时候创建一个空的对象 Object.create(null) 创建的对象没有任何属性 */
      : (__.prototype = b.prototype /** 先修正 __ 构造函数的原型对象 */
      ,new __()); /** 然后实例__ */
  };
})();

var Animal = /** @class */ (function () {
  /**
   * @constructor 动物父类
   * @param {Object} _a
   * @param {String} _a.type
   */
  function Animal(_a) {
      var type = _a.type;
      this.type = type; /** Animal 的属性 */
      Animal.staticName = type; /** Animal 静态方法 */
  }
  /**
   * @description Animal 原型的方法 getType
   * @returns {String}
   */
  Animal.prototype.getType = function () {
      return this.type;
  };
  /**
   * @description Animal 原型的方法 setType
   * @returns {void}
   */
  Animal.prototype.setType = function (type) {
      this.type = type;
  };
  /**
   * @description Animal 静态方法 filterType
   * @returns {String}
   */
  Animal.filterType = function () {
      return '--' + Animal.staticName;
  };

  return Animal; /* 最后把 Animal构成函数暴露出去 */
}());
console.log(new Animal({ type: 'cat' }));
/**
 * @constructor Cat 构造函数
 * @param {constructor} _super 父类构造函数
 */
var Cat = /** @class */ (function (_super) {

  __extends(Cat, _super); /* Cat 继承 _super 的具体实现 */
  /**
   * * @constructor Cat 构造函数具体实现（也是借助了闭包）
   * @param {Number} weight
   */
  function Cat(weight) {
      var _this = _super.call(this, { type: 'CatLili' }) /* 使用 call 方法调用_super 把父类中的数据进行初始化一次 */
      || this /** 初始化父类之后一般 构造函数是不会显式写明 return this, 而 Function.prototype.call 这个方法就是把函数当作普通函数使用 */
      ;
      debugger
      _this.weight = weight;
      _this.Unit = 'kg';
      return _this;
  }

  /**
   * @description Cat 原型的方法 _getWeight
   * @returns {String}
   */
  Cat.prototype._getWeight = function () {
      return this.weight.toString() + this.Unit;
  };
  return Cat;
}(Animal));
console.log(new Cat(100));
console.log(Cat.filterType());
console.log(Cat.staticName);

console.log('---------------')
console.dir(Cat)
console.log('---------------')
