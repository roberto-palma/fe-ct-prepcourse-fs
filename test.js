class MyClass extends Array {

}

MyClass.prototype.modifier = function () {
  let transform = [];
  for(let i = 0; i < this.length; i++) {
    if(i >= 3) {
      transform.push("unique to MyClass");
    }
    else {
      transform.push(this[i]);
    }
  }
  
  return transform;
}

let arr1 = new MyClass(1,2,3,4,5);
let ori = [1,2,3,4,5,2,123]

console.log(arr1.modifier());
console.log(ori.modifier());