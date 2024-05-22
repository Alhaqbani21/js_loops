function summation(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiplcation(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

var divisionResult = division(1, 2);
var multiplcationResult = (x, y) => {
  return x * y;
};

console.log(summation(1, 2));
console.log(subtraction(1, 2));
console.log(multiplcationResult(1, 2));
console.log(divisionResult);

function fuzzAndBuzz(x) {
  if (x % 3 == 0 && x % 5 == 0) {
    return 'Buzz and Fuzz';
  }

  if (x % 3 == 0) {
    return 'Buzz';
  }

  if (x % 5 == 0) {
    return 'Fuzz';
  } else {
    return 'not Fuzz or Buzz';
  }
}

console.log(fuzzAndBuzz(15));
console.log(fuzzAndBuzz(3));
console.log(fuzzAndBuzz(5));
console.log(fuzzAndBuzz(4));
