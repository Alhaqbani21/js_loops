// let sum = 0;
// for (let index = 0; index < 10; index++) {
//   console.log(`index = ${index}`);
//   console.log(`sum = ${(sum = sum + index)}\n`);
// }

// #### Q1 ####
console.log('Q1 Even Numbers');
for (let i = 0; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// #### Q2 ####
console.log('\nQ2 ');
for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

// #### Q3 ####
console.log('\nQ3 Odd Numbers');
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
// #### Q4 ####
console.log('\nQ4 Fibonacci sequence ');
let firstNum = 0;
let secondNum = 1;

for (let i = 0; i < 10; i++) {
  console.log(firstNum);
  let temp = firstNum;
  firstNum = secondNum;
  secondNum = temp + firstNum;
}
// #### Q5 ####
console.log('\nQ5 Sequare numbers ');
for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

// #### Q6 ####
console.log('\nQ6 Multiplication  numbers 1-3 ');
for (let i1 = 1; i1 <= 3; i1++) {
  for (let i2 = 1; i2 <= 10; i2++) {
    console.log(`${i1} * ${i2} = ${i1 * i2} `);
  }
}
