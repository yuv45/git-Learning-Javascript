//Problem 1: Create a function to check if a number is Prime or Not//

function check_prime(number)
{
  let count=0;
  for(let i=1;i<=number;i++){
 if (number%i==0){
   count++
 }   
  }
 if(count==2){
   console.log("number is prime",number)
 }
  else{
    console.log("number is not prime",number)
  }
}
 check_prime(5)
