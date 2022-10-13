const array = [12, 8, 9, 10, 1];
//  achievable through O(n)
// function SlidingWindow(arr, num) {
//   //    we have to check if the number is greater than 2 if not then return;
//   if (num < 2 || num > arr.length) {
//     return null;
//   }
//   //  go through the num and give them the particular name with index start with zero and make a object
//   //  take a variable which hold the sum of the number
//   let sum = 0;
//   //  loop through the array, inside of the array loop through the number.
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     // take a another variable to contain the total sum
//     let newSum = 0;
//     for (let j = 0; j < num; j++) {
//       //  add the number one by one into the array until the loop break
//       newSum += arr[i + j];
//     }
//     // if previous sum is less then current sum then previous sum will be current sum
//     if (sum === 0) {
//       sum = newSum;
//     } else if (newSum > sum) {
//       sum = newSum;
//     }
//   }
//   return sum;
// }

function SlidingWindow(arr, num) {
  // if number is grater then the array and num is less then 2 than return;
  if (num > arr.length || num < 2) {
    return null;
  }
  //   we have to take a maximum and temporary sum
  let tempSum = 0;
  let maxSum = 0;
  // we have to loop through num and get the sum of the first sequence in the array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // we have to set the temp sum to maximum sum
  tempSum = maxSum;
  // loop through th array starting point will be num after that we calculate the sum erasing the last value from the sum and adding the next value into the sum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // we have to check with math.max method which one is greater
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(SlidingWindow(array, 2));
