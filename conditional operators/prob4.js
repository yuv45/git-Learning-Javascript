// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.//
function userlogin(name ,password){
let username ="vinay1540"
let userpassword=1234560

if( name ===username && password===userpassword){
console.log(" user can login")
}
else if(name="" && password=""){
console.log("please write valid details")
}
else{
console.log("user cannot login")
}
}
userlogin("vinay1540",1234560);