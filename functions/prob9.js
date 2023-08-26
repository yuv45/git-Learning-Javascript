//Problem-9
Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average//
function sum(arr)
{
  let arr1= [8,7,6,9,5];
  let sum=0;
  for (i=0;i<=arr1.length-1;i++){
    sum=sum+arr1[i];

  }
    return sum;
}
let arr1= [8,7,6,9,5];
let result = sum();
console.log("Sum of arr is",result);
console.log("Average of arr is",result/arr1.length)
     