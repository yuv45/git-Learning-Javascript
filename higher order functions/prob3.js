// Problem 3: Taking the following array into consideration get the output as given below://
arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7
let bag =""
let ans = arr.forEach(function (element){
  if(element%2==0){
    bag+=-1+" "
  }
  else {
    bag+=1+" "
  }

})
   console.log(bag)