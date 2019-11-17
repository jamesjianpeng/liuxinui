import './bind'

const obj1 = {
  newName: 'call1',
  sayName() {
    'use strict';
    if (this) {
      console.log(this.newName)
    } else {
      console.log(this)
    }
  }
}
const obj2 = {
  newName: 'call2',
  sayName: () => {
    console.log(this)
    console.log(this.newName)
  }
}

var sayName1 = obj1.sayName
sayName1() // undefined
sayName1.call(obj1) // call1

var sayName2 = obj1.sayName
sayName2() // undefined
sayName2.call(obj2) // call2

const obj3 = {
  newName: 'call3',
  callTest (x, y, z) {
    console.log(x,y,z)
    if (this) {
      console.log(this.newName)
    } else {
      console.log(this)
    }
  }
}

const callTest = obj3.callTest

callTest.call({ newName: 'test1' }, 1, 2, 3)
 // 1 2 3
 // test1

 callTest.call(null, 1, 2, 3)

 callTest.__bind({ newName: 'bind1' }, 4, 5, 6)
 // 4 5 6
 // bind1
