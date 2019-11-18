var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        var _this = this;
        var type = _a.type;
        this.setType = function (type) {
            _this.type = type;
        };
        this.type = type;
        Animal.staticName = type;
    }
    Animal.prototype.getType = function () {
        return this.type;
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
        _this._getWeight = function () {
            return _this.weight.toString() + _this.Unit;
        };
        _this.weight = weight;
        _this.Unit = 'kg';
        return _this;
    }
    return Cat;
}(Animal));
console.log(new Cat(100));
new Promise(function (resolve, reject) {
    console.log('===');
    setTimeout(function () {
        resolve('000');
    }, 200);
}).then(function (res) {
    (function (r) {
        console.log(r);
    })(res);
});
