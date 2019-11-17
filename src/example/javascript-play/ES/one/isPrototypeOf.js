/**
 * isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上
 */
function Table (tname, row, line) {
  this.tname = tname
  this.row = row
  this.line = line
}

const table = new Table(1, 2, 3)
console.log(table)

function createObject (prototype) {
  function F() {}
  F.prototype = prototype
  return new F()
}

const table1 = createObject(table)
console.log(table1)
const table2 = createObject(table1)
console.log(table2)
console.log(table1.isPrototypeOf(table2))

