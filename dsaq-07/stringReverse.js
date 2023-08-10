// function reverseString(str) {
//   str = str.toLowerCase().split("");

//   let newstr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr.push(str[i]);
//   }
//   return newstr;
// }
// console.log(reverseString("Shweta"));
function reverseString(str) {
  str = str.toLowerCase();

  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}
console.log(reverseString("Shweta"));
