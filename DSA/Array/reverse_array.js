const arr = [32, 53, 52, 12, 4, 99, 67, 17, 9, 19, 32, 54, 67, 88];

function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray(arr));
