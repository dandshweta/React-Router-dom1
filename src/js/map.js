// const arr = [1, 2, 3, 4, 5, 6];
// const output = arr.map(function (x) {
//   return x * 2;
// });
// console.log(output);

// const arr = [1, 2, 3, 4, 5, 6];
// const output = arr.map((x) => x * 2);
// console.log(output);
const obj = [
  { name: "shweta", age: 25 },
  { name: "shri", age: 30 },
  { name: "sneha", age: 22 },
];
const output = obj
  .filter((x) => {
    return x.age < 25;
  })
  .map((x) => x.name); //only name
console.log(output);

const arr1 = [1, 2, 3, 4, 5];
const result = arr1.reduce(function (acc, curr) {
  return (acc = acc + curr);
});
console.log(result);
