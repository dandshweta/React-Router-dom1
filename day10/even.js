function even(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log("it is not even nor odd it is zero");
    } else if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log("even no: ", even);
  console.log("odd no: ", odd);
}
even([2, 3, 4, 5, 6, 7, 8, 9, 12, 10, 0]);
