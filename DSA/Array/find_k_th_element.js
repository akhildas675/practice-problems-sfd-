const arr =[32,53,52,12,4,99,67,17,9,19,32,54,67,88]


function findKthElement(arr,k){
  if(k<1 || k>arr.length){
    return `Invalid position`
  }

  for(let i=0;i<arr.length;i++){
    if(i==k-1){
      return arr[i]
    }
  }
}

console.log(findKthElement(arr,4))