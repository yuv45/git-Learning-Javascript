//PROBLEM 12
Problem 12. Write a custom function that has the same behavior of inbuilt Array Join//
let arr =['rohan','mohan','johan'];
let seperator = ','
function myjoin(arr,seperator){
  
  let bag ="";
  for(i=0;i<arr.length;i++){
     bag+=arr[i];
    if(i<arr.length-1){
      bag+=seperator
    }
  }
return bag;
}
console.log(myjoin(arr,seperator))
  
