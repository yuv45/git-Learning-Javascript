//Problem-10
Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]//

let arr =["MA","SA","I","SCH","OOL"];
  
function check_lowercase()
{
let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower ="abcdefghijklmnopqrstuvwxyz";
result=[];
  for(i=0;i<arr.length;i++){
    let str =arr[i];
    let bag="";
      for(j=0;j<str.length;j++){
      for(k=0;k<upper.length;k++){
        if(str[j]==upper[k]){
          bag+=lower[k]
        }
   
    }
    

  }
   result.push(bag)
 }
console.log(result)
}
check_lowercase()
 

  