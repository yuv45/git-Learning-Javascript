//Problem 14
Write a custom function that has the same behavior of inbuilt Array Slice Function//
let arr=['amazon','flipcart','shopsy','myntra','snapdeal'];
let result=[];
function my_slice(a,b)
{
  if(a>0&&!b){
    for(i=a;i<arr.length;i++){
      result.push(arr[i]);
    }
  }
  else  if(a>0&&b>0){
  for(i=a;i<b;i++){
    result.push(arr[i]);
  }
}

   else if(a<0&&!b){
     a=arr.length+a;
  for(i=a;i<arr.length;i++){
    result.push(arr[i]);
  }
}
    
  else if(a>0&&b<0){
  b=arr.length+b
  for(i=a;i<b;i++){
    result.push(arr[i]);
  }
  }
 else if(a>=0&&b>0){
    for(i=a;i<=b;i++){
      result.push(arr[i]);
    }
  }
console.log(result)

}
my_slice(1,-2);

