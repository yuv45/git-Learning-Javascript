//# **Problem-3**

### Sales Total

Write a function called `calculateSalesTotals()`
 which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. The default value would be 0.0.//

solution :-


var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];
function  object(){
    let data=[];
  
      for( let i=0;i<sales.length;i++){
     let obj={}
        obj.item=sales[i].item;
        obj.stock=sales[i].stock;
        obj.original=sales[i].original;

        if(sales[i].discount===undefined){
         obj.sale=sales[i].original
        }
        else{
          obj.sale=sales[i].original-(sales[i].original*sales[i].discount);
           obj.discount=sales[i].discount;
        }
        obj.total=obj.sale*obj.stock;
      
           data.push(obj);
      }
      return data;
}
console.log(object());
 
