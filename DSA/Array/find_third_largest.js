const arr =[32,53,52,12,4,99,67,17,9,19,32,54,68,88]


function findThirdLargest(arr){

  let first= -Infinity;
  let second= -Infinity;
  let third= -Infinity;

  for(let i =0; i<arr.length;i++){
    if(arr[i]>first){
      third=second;
      second=first;
      first=arr[i]
    }else if(arr[i]>second && arr[i]<first){
      third=second;
      second=arr[i];
    }else if(arr[i]>third && arr[i]<second){
      third=arr[i];
    }
  }
  return third


}

console.log(findThirdLargest(arr))