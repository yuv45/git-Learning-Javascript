//Problem 4: Print the average of even numbers from 1 to 100 (both included)//
let  count =0;
let sum = 0;
let start=1
let end=20;

  while (start<=end){
    if(start%2==0){
      sum=sum+start;
      count++;
    }
    start++
  }
console.log(sum/count);


