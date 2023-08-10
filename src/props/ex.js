function ex(no) {
  let newNo = "";
  for (let i = 0; i < no.length; i++) {
    if (newNo[no]) {
      newNo[no]++;
    } else {
      newNo += no[i];
    }
  }
  return newNo;
}
console.log(ex(1100022244));
