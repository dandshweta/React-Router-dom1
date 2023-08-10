function palindrome(str) {
  //   str = str.split("");
  str = str.toLowerCase();
  let newstr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  if (newstr === str) {
    return "str is palindrome";
  } else return "str is not palindrome";
}

console.log(palindrome("Madam"));
