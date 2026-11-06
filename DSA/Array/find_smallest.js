const arr =[32,53,52,12,4,99,67,17,9,19,32,54,67,88]



function findSmallestElement(data){

  let smallest = arr[0];

  for(let i =0 ;i<data.length;i++){
    if(data[i]<smallest){
      smallest=arr[i]
    }
  }
  return smallest
  
}

console.log(findSmallestElement(arr))