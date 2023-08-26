//PROBLEM 2
Problem 2: Use the above function to print the Primes from 2 to a given limit//

function check_prime(n)
{
  let count=0;
  for(let i=1;i<=n;i++){
 if (n%i==0){
   count++
 }   
  }
 if(count==2){
   console.log("number is prime",n)
 }
  
}
for(j=2;j<=10;j++){
  check_prime(j)
}