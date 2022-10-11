// const array1 = [1, 2, 3];
// const array2 = [1, 4, 9];

// const frequencyCounter = (array1, array2) => {
//   //  checking if the two array has equal length or not
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   //   loop through the first array then check if the square of that value if exist in the array or not
//   for (let i = 0; i < array1.length; i++) {
//     const correctIndex = array2.indexOf(array1[i] ** 2);
//     //   if the square of the first array value id not exist on the second array then return false
//     if (correctIndex === -1) {
//       return false;
//     }
//     //   if the square of the first array is exist in the second array then remove the item from the second array.
//     array2.splice(correctIndex, 1);
//   }
//   return true;
// };

// console.log(frequencyCounter(array1, array2));

// // achivebale through time complexcity of O(n^2)
// const frequencyCounter = (str1, str2) => {
//   //    check if the length of two string is equal or not
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   //    loop through the first string then check if the word is available on the second string or not
//   for (let i = 0; i < str1.length; i++) {
//     const correctIndex = str2.indexOf(str1[i]);
//     //    if the word is not present on the second string then return false
//     if (correctIndex === -1) {
//       return false;
//     }
//     //    if the word is present in the second string then remove it from there
//     str2.substring(correctIndex);
//   }
//   //   output will be true if the frequency and count is same
//   return true;
// };
// achiveing through time complexity of O(n)
const frequencyCounter = (str1, str2) => {
  // return false if the two is not
  if (str1.length !== str2.length) {
    return false;
  }
  //  we are ignoring invalid and empty inputs
  //  get the words and how many time it appear on the string
  let str1Count = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    str1Count[letter] ? (str1Count[letter] += 1) : (str1Count[letter] = 1);
  }
  // loop through the second string check if the str1count object key is matching to the the second string key
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!str1Count[letter]) {
      return false;
    } else {
      str1Count[letter] -= 1;
    }
  }
  return true;
};
const str1 = "anagram";
const str2 = "nagaraa";
console.log(frequencyCounter(str1, str2));
