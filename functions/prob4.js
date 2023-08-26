//Problem 4: Write a function to check if the char is a small case or not.//
function check_case(char)
{
  let str="abcdefghijklmnopqrstuvwxyz";
  let answer=false
  for(let i=0;i<=str.length;i++){
    if(char==str[i]){
      answer=true
      break;
    }
  }  
  if(answer==true){
      console.log("lowercase");
    }
    else{
      console.log("Uppercase")
    }
  
}
check_case("D")
check_case("n")
