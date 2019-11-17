console.log('5种基本类型 + es6 symbol(一共6种):')
const stringData = 'JavaScript';
const numberData = 99;
let undefinedData;
const booleanData = true;
const nullData = null;
// ES6
const symboData1 = Symbol('js');
const symboData2 = Symbol('js');

console.log(typeof stringData)
console.log(typeof stringData)
console.log(typeof undefinedData)
console.log(typeof booleanData)
console.log(typeof nullData)
console.log(symboData1)
console.log(symboData2)
console.log(typeof symboData1)

console.log('\n')

/**
 * 从数据结构 + 算法的角度，重新理解 ES 部分
 * 5 种基本的数据结构
 */


console.log('引用类型的具体分类：')

const date = new Date()
const regexp = new RegExp(/\w/)
const array = new Array(1, 2, 3)

// es6
const setData = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => setData.add(x));

const mapData = new Map([[1, '11'], [2, '22']]);
console.log(setData)
console.log('Set :' + typeof setData)
console.log(mapData)
console.log('Set :' + typeof mapData)
