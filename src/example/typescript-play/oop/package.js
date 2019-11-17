"use strict";
exports.__esModule = true;
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
var cat = new Animal({ type: 'cat' });
// 在 vs 中写了 cat 都不提示 type 这个属性，只提示 getType 和 setType 这两个方法
console.log(cat.getType()); // cat
console.log(cat.setType('dog'));
console.log(cat.getType()); // dog
exports["default"] = Animal;
