const _extends = (function() {
  const extendStatic = (function (c, f) {
    return Object.setPrototypeOf
    // return ({ __proto__: [] } instanceof Array && function (c, f) { c.__proto__ = f; })
    // return function (c, f) {
    //   for (let i in f) {
    //     if (f.hasOwnProperty(i)) {
    //       debugger
    //       c[i] = f[i]
    //     }
    //   }
    // }
  })()

  return function(c, f) {
    extendStatic(c, f)
    console.dir(c)
    debugger
    if (f === null) {
      c.prototype = Object.create(f);
    } else {
      function __() { this.constructor = c }
      __.prototype = f.prototype;
      c.prototype = new __();
    }
  }
})()

const _create = function(f) {
  function F () {}
  F.prototype = f
  return new F()
}

const Animal = (function () {
  function Animal(params) {
    this.type = params.type;
    this.newName = params.newName;
  }

  Animal.filterNewName = function() {
    return '_static';
  }

  Animal.prototype.getNewName = function() {
    return this.newName;
  }

  return Animal;
})()

const Cat = (function(_super) {
  _extends(Cat, _super)

  // function __() { this.constructor = Cat }
  // __.prototype = _super.prototype
  // Cat.prototype = new __()

  function Cat (params) {
    let _this = _super.call(this, params) || this
    debugger
    _this.climbing = false
    _this.climbSpeed = params.climbSpeed
  }

  Cat.prototype.getClimb = function () {
    return this.climbing + '' + this.climbSpeed
  }
  Cat.prototype.setClimb = function (state) {
    this.climbing = state
  }

  return Cat
})(Animal)

console.log('Animal 构造函数----');
console.dir(Animal);

console.log('Animal 实例----');
console.log(new Animal({ type: 'dog', newName: 'J' }));

console.log('Cat 构造函数----');
console.dir(Cat);

console.log('Cat 实例----');
const cat = new Cat({ type: 'dog', newName: 'J', climbSpeed: 30 })
console.log(cat);
console.log(Cat.filterNewName());

