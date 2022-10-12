// achivable through time complexity of 0(n^2)
// const arr = [-3, -2, -1, 0, 1, 4, 7];
// const MultiplePointer = (arr) => {
//   //   assuming that the arr is already sorted
//   //   Take the first pointer as index 0 on the array and loop through it.
//   for (let i = 0; i < arr.length; i++) {
//     //   take second pointer as index 1 and then loop through it .
//     for (let j = 1; j < arr.length; j++) {
//       //   check if the two moving pointer sum is 0 at some point. if so the retun the two pinter value as an array
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };

// console.log(MultiplePointer(arr));

// achivable through time complexity of O(n)

// const MultiplePointer = (arr) => {
//   // we are asuuming that the array is already sorted
//   // we have make two pointes in the array. it will be better if it is right and left
//   let left = 0;
//   let right = arr.length - 1;
//   // loop through the array untill two pointer come into the middle
//   while (arr[left] < arr[right]) {
//     // if the sum of the two points is zero than return the two pointers
//     const sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     }
//     // if the sum is greater than 0 then we will move the pointer from the position where the heighest positive number present
//     if (sum > 0) {
//       right--;
//     } else {
//       // if the sum is less than 0 then we will move the pointer from the position where the heighest number present
//       left++;
//     }
//   }
// };

// console.log(MultiplePointer(arr));
const arr = [-1, 1, 2, 2, 3, 3, 4];
const uniqueValueCount = (arr) => {
  // when there is no value return zero
  if (arr.length === 0) return 0;

  //  we have to take two pointers in the array one is the first in index and on is the second index of the array
  let first = 0;
  let second = first + 1;
  // we have to make a unique value counter
  let uniqueValueCount = 1;
  while (second < arr.length) {
    //  check if the two pointers is same or not if they are same then move second pointer one index
    if (arr[first] === arr[second]) {
      second++;
    } else {
      //  if the pointer are not same then increase unique value count by one and move bothe the index value by one
      first = second;
      uniqueValueCount++;
    }
  }
  return uniqueValueCount;
};

console.log(uniqueValueCount(arr));
