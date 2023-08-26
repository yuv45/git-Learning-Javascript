
//Problem 2 : Given a character in lower case print the upper case character//

let char='a';
let lower =['a','b','c']
let upper =['A','B','C'];

for (i=0;i<lower.length;i++){
  if(char==lower[i]){
    char=upper[i];
}
  
}
console.log(char)