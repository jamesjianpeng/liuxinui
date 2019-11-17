var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf /* 这是 ES6 最新的改变一个对象的原型的方法 后面的两段代码都是 Object.setPrototypeOf 的 Polyfill https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf */
        || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) /* 仅适用于Chrome和FireFox，在IE中不工作 */
        || function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };  /* IE 中可以生效 */
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(_a) {
        var type = _a.type;
        this.type = type;
        Animal.staticName = type;
    }
    Animal.prototype.getType = function () {
        return this.type;
    };
    Animal.prototype.setType = function (type) {
        this.type = type;
    };
    Animal.filterType = function () {
        return '--' + Animal.staticName;
    };
    return Animal;
}());
console.log(new Animal({ type: 'cat' }));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(weight) {
        var _this = _super.call(this, { type: 'CatLili' }) || this;
        _this.weight = weight;
        _this.Unit = 'kg';
        return _this;
    }
    Cat.prototype._getWeight = function () {
        return this.weight.toString() + this.Unit;
    };
    return Cat;
}(Animal));
const cat = new Cat(100)
console.log(cat);
console.log(cat.weight);
console.log(cat.Unit);

