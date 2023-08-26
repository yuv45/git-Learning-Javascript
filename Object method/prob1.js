//PROBLEM 1
Problem-1 Rectangle Object

Create a rectangle object with length and width properties
Create two methods area and perimeter, that will return the area and perimeter of the rectangle//

solution:-


let obj=
{
  width:52,
  length:45,
  area:function()
  {
    let result=this.length* this.width;
    console.log(result)
  },
  perimeter:function()
  {
  let value =2*(this.length+ this.width);
    console.log(value);
  }
}
obj.area()
obj.perimeter()