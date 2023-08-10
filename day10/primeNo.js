function PrimeNo(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
      console.log("it is not prime or not nonprime no ");
    } else if (
      arr[i] % 2 !== 0 ||
      arr[i] % 3 !== 0 ||
      arr[i] % 5 !== 0 ||
      (arr[i] % 7 !== 0 && arr[i] % arr[i] === 0 && arr[i] % 1 === arr[i])
    ) {
      newArr.push(arr[i]);
    } else {
      console.log("it is not prime no ");
    }
    return newArr;
    // return console.log("it is prime no", newArr);
  }
}
console.log(PrimeNo([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15]));
