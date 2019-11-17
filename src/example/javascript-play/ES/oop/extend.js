function Animal({ type = 'dog', name = 'july' }) {
    this.type = type;
    this.name = name
    this.sanName = function () {
      return this.name
    }
}

function Cat (data) {
  this.data = data
}

function Tiger (data) {
  this.data = data
}

const instance = new Animal({})
console.log('animal 实例')
console.log(instance) //  ==> 如下图
// Animal {type: "dog", name: "july", sanName: ƒ}
//  name: "july"
//  sanName: ƒ ()
//  type: "dog"
//  __proto__:
//    constructor: ƒ Animal({ type = 'dog', name = 'july' })
//    __proto__: Object

// 开始Cat 从 Animal 中继承
Cat.prototype = new Animal({})
Cat.prototype.constructor = Cat // 修正原型上的 constructor，如果不修正，“实例”出来的对象的最近的一层原型是没有构造函数

const cat = new Cat(1)
console.log('cat 实例')
console.log(cat) //  ==> 如下图
// Cat {data: 1}
//  constructor: ƒ Tiger(data)
//  data: 1
//  __proto__: Animal
//    constructor: ƒ Cat(data)
//    name: "july"
//    sanName: ƒ ()
//    type: "dog"
//    __proto__:
//      constructor: ƒ Animal({ type = 'dog', name = 'july' })
//      __proto__: Object


console.log(cat.__proto__ === Cat.prototype) // true
console.log(cat.constructor === Cat) // true

// Tiger.prototype = cat;
// Tiger.prototype.constructor = Tiger;

// const tiger = new Tiger(3);

// console.log('tiger.constructor.prototype === tiger.__proto__: ', tiger.constructor.prototype === tiger.__proto__) // true
// console.log('tiger.constructor.prototype.constructor: ', tiger.constructor.prototype.constructor) // Tiger 构造函数
// console.log('tiger.__proto__.constructor: ', tiger.__proto__.constructor) // Tiger 构造函数
// console.log('tiger 实例')
// console.log(tiger) //  ==> 如下图
// Tiger {data: 3}
//  data: 3
//  __proto__: Cat
//    constructor: ƒ Tiger(data)
//    data: 1
//    __proto__: Animal
//      constructor: ƒ Cat(data)
//      name: "july"
//      sanName: ƒ ()
//      type: "dog"
//      __proto__:
//        constructor: ƒ Animal({ type = 'dog', name = 'july' })
//        __proto__: Object






