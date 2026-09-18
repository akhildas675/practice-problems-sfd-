//Remove array elements in-place (modify same array without declare new)


//with in build method

const arr = [1,2,3,4];

let removeElement = 3;

// for(let i=0;i<arr.length;i++){
//     if(removeElement==arr[i]){
//         arr.splice(i,1)
//     }
// }

// console.log(arr)



//with-out in-build method

function removeValue(arr,val){

  for(let i=0;i<arr.length;i++){
    if(val==arr[i]){
      for(let j=i;j<arr.length-1;j++){
        arr[j]=arr[j+1];
      }
      arr.length--
      i--
    }
  }
  return arr

}

console.log(removeValue(arr,removeElement))