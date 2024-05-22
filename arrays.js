let numbers = [1, 2, 3, 15, 5, 6, 7, 8, 9, 10];

function listNumbers(list) {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    newList[i] = list[i] * 10;
  }
  return newList;
}

console.log(numbers);
console.log(listNumbers(numbers));

// console.log(numbers.findIndex((x) => x == '4'));
// console.log(
//   numbers.find((x) => {
//     return x == '1';
//   })
// );

// let numbers1 = numbers.map((e) => {
//   return e + 1;
// });
