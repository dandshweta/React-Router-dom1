function palindrome(str) {
  str = str.toLowerCase();
  //   console.log(str);

  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr = newstr + str[i];
    // console.log(newstr);
  }
  if (newstr === str) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
}

console.log(palindrome("Madam"));
