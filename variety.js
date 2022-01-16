// 'use strict';
// function logThis() {
//   this.desc="logger";
//   console.log(this);
// }

// logThis();

// function sayHello() {
//     console.log('hello');
// }
// console.log(sayHello.prototype);

// const foo = [1, 2, 3];
// const [n] = [foo];
// console.log(n);

// var v = 1;
// var f1 = function () {
//   console.log(v);
// };

// var f2 = function () {
//   var v = 2;
//   f1();
// };

// f2();

// var x = { foo : 1};
// var output = (function() {
//   delete x.foo;
//   return x.foo;
// })();

// console.log(output);

var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);