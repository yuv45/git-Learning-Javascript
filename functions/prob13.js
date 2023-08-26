//Problem 13
Write a custom function that has the same behavior of inbuilt Array Last Index Of Function//
let arr=["hp","dell","lenovo","apple"];
function last_index(index){
  let bag=-1;
  for(i=0;i<arr.length;i++){
    if(arr[i]==index){
      bag=i
    }
    // else{
    //      bag=-1
    // }
  }
  return bag;
}
console.log(last_index("lenovo"))