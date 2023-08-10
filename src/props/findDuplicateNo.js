function findDuplicateNo(no) {
  let one = " ";
  let zero = " ";

  for (let i = 0; i < no.length; i++) {
    if (no[i] === "1") {
      one = one + no[i];
    } else if (no[i] === "0") {
      //   zero.push(no[i]);
      zero = zero + no[i];
    }
  }

  return one + zero;
}

console.log(findDuplicateNo("111000011100"));
