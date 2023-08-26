 // PROBLEM 1
// Problem 1: Find the average of elements present at odd index of the following array.//
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
function check(){
  let ans =arr.filter((element,index)=>index%2!==0).reduce((acc,cur)=>acc+cur,0)/arr.map((element,index)=>index%2!==0).reduce((acc,cur)=>acc+cur,0)
 return ans                                                                      
                }
console.log(check())