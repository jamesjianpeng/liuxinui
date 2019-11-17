var obj1={
  name: 'sven'
};
var obj2={
  name: 'anne'
};
window.name = 'window';
var getName = function(){
  console.log ( this.name );
};
getName(); // 输出: window
getName.call( obj1 );// 输出: sven
getName.call(obj2 ); // 输出: anne
