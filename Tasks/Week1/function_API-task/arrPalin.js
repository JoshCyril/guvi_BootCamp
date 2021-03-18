let arr = ["stats", "honey", "banana", "madam"];

let hasPalin = function(array){
let revArr=[], res=[];

// reverse the letters in a word.
for(let i=0;i<arr.length;i++){
    revArr+=(array[i].split('').reverse()).join('')+',';
}
    newArr=revArr.slice(0,-1).split(',');

// check for palindromes
for(j=0; j<arr.length;j++){
    if(arr[j]===newArr[j]){
        res.push(arr[j]);
    }
}
return res; 
};

console.log(...hasPalin(arr));