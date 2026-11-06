const arr =[32,53,52,12,4,99,67,17,9,19,32,54,67,88]



function findSecondLargest(arr){
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
      secondLargest=largest;
      largest=arr[i]
    }else if(arr[i]>secondLargest && arr[i]<largest){
      secondLargest=arr[i]
    }
  }
  return secondLargest
}

console.log(findSecondLargest(arr))