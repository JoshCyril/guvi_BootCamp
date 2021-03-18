let arr = ["aabb", "bbaa", "aabb", "ccdd"];


let remDup = function(array) {
  return [...new Set(array)]
}

console.log(...remDup(arr));