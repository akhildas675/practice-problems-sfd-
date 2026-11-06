const arr =[32,53,52,12,4,99,67,17,9,19,32,54,67,88]

function findLargestElement(arr){

  let largest = -Infinity;

  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
      largest=arr[i]
    }
  }
  return largest

}


console.log(findLargestElement(arr))