function smallno(arr) {
  let no = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < no) {
      no = arr[i];
    }
  }

  return no;
}

console.log(smallno([1, 4, 5, 3, 2, 6, 7, 8, 9, 4]));
