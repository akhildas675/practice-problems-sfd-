const arr =[32,53,52,12,4,99,67,17,9,19,32,54,67,88]


function reverseArrayUsingRecursion(arr,left=0,right=arr.length-1){
    if(left>=right){
      return arr
    }

    let temp = arr[left];

    arr[left] =arr[right];

    arr[right]= temp;

    return reverseArrayUsingRecursion(arr,left+1,right-1)

}

console.log(reverseArrayUsingRecursion(arr))
