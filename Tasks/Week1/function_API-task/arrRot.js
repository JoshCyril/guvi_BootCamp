let arr = [1, 2, 3, 4];


let arrRot=function(arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
}

console.log(...arrRot(arr, 5));