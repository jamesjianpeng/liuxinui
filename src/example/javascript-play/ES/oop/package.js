/**
 * @file
 * oop 三大概念
 * 1. 封装
 * 封装的概念：
 * 封装的目的是将信息隐藏，或对于不同的使用者，提供了不同的使用权限，
 * 强调一下，在必要的时候是可以通过对外暴露的方法去修改内部的属性
 * 封装数据和封装实现
 * 比如：typescript 使用 private, public, protected, 这三个关键字控制外部对对象内属性和方法的访问
 * 比如：JavaScript 利用闭包去实现私有属性的功能
 * 对于不同的使用者，使用的权限不一样
 * 2. 继承
 * 3. 多态
 */

 /**
  * @description
  * 封装的举例：Js 利用闭包的方式，去实现私有属性
  *
  */

  /**
   * @example 题目一：有一个对象你不能使用 objectData.Attribute，但是可以通过调用 object.getAtribute 这个方法去获得
   * 请使用 Js 或者 Typescript 等语言去实现
   */

// Js 闭包 + 对象
function Animal (type) {
  let _type = type;

  return new function () {
    this.getType = function () {
      return _type;
    };
    this.setType = function (type) {
      _type = type
    }
  };
};

const cat = new Animal('cat');

console.log(cat.type); // undefined

console.log(cat.getType()); // cat
console.log(cat.setType('fish'));
console.log(cat.getType()); // dog

// Js 另外一种写法，这样看起来会很熟悉，很常见

function Car(type) {
  let _type = type // 拖拉机
  const car = {
    getType: function() {
      return _type
    },
    setType: function (type) {
      _type = type
    }
  }
  return car
}

const truck = new Car('truck')

console.log(cat.type); // undefined

console.log(truck.getType()); // truck
console.log(truck.setType('tractor'));
console.log(truck.getType()); // tractor

