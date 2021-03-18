let arr=[1, 2, 3, 4, 5,'A', NaN, null];

let findOddrEven= function(array){
    len= array.length;
    let newArray=[];
    for(i=0;i<len;i++){
        if(!isNaN(array[i])){
            if(array[i]%2 !== 0){
                newArray+= array[i]+' ';
            }
        }
    }
    return (newArray.slice(0,-1));
};

console.log(findOddrEven(arr));