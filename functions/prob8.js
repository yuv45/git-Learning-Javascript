//PROBLEM-8
Problem-8
Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included)//
function odd_of(n)
{
  
   if(n%2!==0){
     console.log("The no.is odd",n);
   }
  
}start =0;
  end =100;
for(j=start;j<=end;j++){
    odd_of(j)
}