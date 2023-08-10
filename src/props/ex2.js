function ex(no) {
  let digitCount = {};
  let newNo = "";

  for (let i = 0; i < no.length; i++) {
    let digit = no[i];
    if (digitCount[digit]) {
      digitCount[digit]++;
    } else {
      digitCount[digit] = 1;
      newNo += digit;
    }
  }

  return newNo;
}

console.log(ex("1100022244"));
