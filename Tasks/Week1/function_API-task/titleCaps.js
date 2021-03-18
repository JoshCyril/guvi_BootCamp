let arr=["hello world, i'm Josh Cyril"];

let titleCaps = function (array) {
  return array.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

console.log(titleCaps(...arr));