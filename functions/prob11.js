//Problem-11
Given a string swap the case and print the output
Sample Input - Test
Sample Output - tEST
NOTE: Use multiple functions to achieve the result, NOT one single code block//
function check_case()
{
let lower ="abcdefghijklmnopqrstuvwxyz";
let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let str ="Text";
  let bag="";
  for(i=0;i<=str.length-1;i++){
    let bag= str[i];
    for(k=0;k<=str[i].length;k++){
      bag+=bag[k];
    }
    for(j=0;j<=lower.length-1;j++){
      if(bag[k]==lower[j]){
        bag+=upper[j];
      }
      }
      }
  console.log(bag);

}
 check_case()