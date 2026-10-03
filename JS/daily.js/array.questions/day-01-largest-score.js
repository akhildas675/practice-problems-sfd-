const scores = [72, 91, 43, 91, 68, 100, 54, 100, 87,"12"];

function findLargest(arr){

  let largest = -Infinity;

  if(arr.length==0){
    console.log("Array empty")
  }

  

  for(let i =0;i<arr.length;i++){

    if(arr[i]==String){
      console.log("Value is not a number")
    }
    if(arr[i]>largest){
      largest=arr[i]
    }
  }
  return largest

}


console.log(findLargest(scores))