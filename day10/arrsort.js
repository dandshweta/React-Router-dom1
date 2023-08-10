function arrSort(arr) {
  let no = Infinity;
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < no) {
      no = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === no) {
      newarr.push(arr[j]);
      no = no + 1;
    }
  }
  return newarr;
}

console.log(arrSort([1, 4, 5, 3, 2, 6, 7, 8, 9, 4]));
