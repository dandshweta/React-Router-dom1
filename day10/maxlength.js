function maxLength(arr) {
  let no = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > no) {
      no = arr[i];
    }
  }
  return no;
}
console.log(maxLength([1, 4, 5, 3, 2, 6, 7, 8, 9, 4]));
