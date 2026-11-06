const arr =[32,53,52,12,4,99,67,17,9,19,32,54,67,88]


function findSmallestElement(arr){

  let firstSmallest = arr[0]
  let secondSmallest =arr[0]

  for(let i=0;i<arr.length;i++){
    if(arr[i]<firstSmallest){
      secondSmallest=firstSmallest;
      firstSmallest=arr[i]
    }else if(arr[i]<secondSmallest && arr[i]>firstSmallest){
      secondSmallest=arr[i]
    }
  }
  return secondSmallest

}

console.log(findSmallestElement(arr))