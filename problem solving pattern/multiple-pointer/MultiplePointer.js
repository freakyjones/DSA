// achivable through time complexity of 0(n^2)
const arr = [-3, -2, -1, 0, 1, 2, 3];
const MultiplePointer = (arr) => {
  //   assuming that the arr is already sorted
  //   Take the first pointer as index 0 on the array and loop through it.
  for (let i = 0; i < arr.length; i++) {
    //   take second pointer as index 1 and then loop through it .
    for (let j = 1; j < arr.length; j++) {
      //   check if the two moving pointer sum is 0 at some point. if so the retun the two pinter value as an array
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(MultiplePointer(arr));
