//Problem 16
Write a custom function that has the same behavior of inbuilt Array Includes Function//
let arr1=['cat','dog','ball','tree'];
function myinclude(element)
{

 for(i=0;i<=arr1.length-1;i++){
    if(arr1[i]==element){
    return true;
  } 
 
  else{
  return false;
  }
   
}
}
console.log(myinclude('cat'))
