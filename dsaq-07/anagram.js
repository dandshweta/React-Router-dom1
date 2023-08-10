function anagram(str1, str2) {
  let result = "shweta";
  str1.toLowerCase().split("");
  str2.toLowerCase().split("");
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      let result1 = result.hasOwnProperty(str2[i]);
    }
  }
}
console.log(anagram("shweta", "hwseta"));
