'use strict';
var v = [1,2,3,4,5];

for(let i=0; i<v.length; i++) {
  console.log(v[i]);
  v[i] = function () {
    console.log(i);
  }
}
console.log('--------')
for(var f of v){
  f();
}
