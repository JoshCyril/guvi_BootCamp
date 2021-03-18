var arr = [1, 2, 4, 6, 8, 11, 17];

hasPrime = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(...hasPrime);