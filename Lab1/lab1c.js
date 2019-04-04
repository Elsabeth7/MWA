 {
 
 function applyCoupon(input){
     return function(couponValue){
         return function(item){
             const price = item.price - (item.price * couponValue);
             return {input, price}
         }
     }
 }
 const item = {
    "name": "Avocado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
}
        

 console.log(applyCoupon('food')(0.1)(item).price ===180);
 
}