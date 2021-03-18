let arr1 = [1, 2, 9, 4];
let arr2 = [5, 6, 7, 8];

let arrMedian = function(numArr1, numArr2) {
  num = (numArr1.concat(numArr2)).sort();
  midEle = (num.length) / 2;
  midEle2 = midEle - 1;
  return (num[midEle] + num[midEle2] / 2).toFixed(0);
};

console.log(arrMedian(arr1, arr2));