//### **Products Cart Object**

- Given an input of products in the below format (Name Quantity Price)//

solution:-


let name = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let price = [60, 50, 20];

let main = {
  data : [],
  addProducts : function(name, quantity, price){
    let obj = {};
    obj.name = name;
    obj.quantity = quantity;
    obj.price = price;

    this.data.push(obj);
    return obj;
  },
  total : function(){
    let total = 0;
    for(let i=0; i<this.data.length; i++){
      total += (this.data[i].quantity*this.data[i].price);
    }
    return total;                            
  }
}

for(let i=0; i<name.length; i++){
  console.log(main.addProducts(name[i],quantity[i],price[i]));
};
console.log(`The total ammount is ${main.total()}.`);
 
    
  

 
 