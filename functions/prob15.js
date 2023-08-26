//Problem 15
Write a custom function that has the same behavior of inbuilt String Substring Function//
let str="hello,bangalore";
let bag="";
function my_substring(str,start,end)
{
  for(i=start;i<end;i++){
    bag+=str[i];
  }
  return bag
}
let start=6
let end =15
console.log(my_substring(str,start,end))