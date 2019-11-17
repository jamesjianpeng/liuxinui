/**
 * @deprecated
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 */

function Base (name = 'Geek') {
  this.baseName = name
}

const base = new Base()
console.log(base)

function createObject (o) {
  const F = function () {}
  F.prototype = o
  return new F()
}

const base1 = createObject(base)
console.log(base1)
console.log(base1.__proto__)

const base2 = createObject(base1)
console.log(base2)
console.log(base2.__proto__)
console.log(base2 instanceof Base)


