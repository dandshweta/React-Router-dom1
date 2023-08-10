function longestPalindrome(str) {
  let arr = str.toLowerCase().split(" ");
  let maxlength = 0;
  let word = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxlength) {
      maxlength = arr[i].length;
      word = [arr[i]];
    } else if (arr[i].length === maxlength) {
      word.push(arr[i]);
    }
  }
  console.log(maxlength);
  console.log(word);
}
longestPalindrome("i am a madam");
