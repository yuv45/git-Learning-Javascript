//Problem 3: Use the same function to print Non-Primes from 2 to a given limit//
function check_prime(n)
{
  let count=0;
  for(let i=1;i<=n;i++){
 if (n%i==0){
   count++
 }   
  }
 // if(count==2){
 //   console.log("number is prime",n)
 // }
  if(count!==2){
    console.log("number is not prime",n)
  }
}
for(j=2;j<=10;j++){
  check_prime(j)
}