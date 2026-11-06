const arr =[32,53,52,12,4,99,67,17,9,19,32,54,67,88]


function reverseArrayTwoPointers(arr){
  let left =0;
  let right =arr.length-1;

  while(right>left){
    let temp = arr[left];
    arr[left]=arr[right];
    arr[right]=temp;

    left++;
    right--;
  }
  return arr
}

console.log(reverseArrayTwoPointers(arr))