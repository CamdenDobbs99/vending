let userMoney = 10.00;
let item = "Candy"
let price = 1.00;

if (userMoney >= price) {
    let change = userMoney - price;
  
    console.log("you bought " + item + " for $" + price + ".");
    console.log("your change is $" + change + ".");

} else {
    console.log("insufficient funds. Please add" + price - change);

}
   
let itemChips = "Chips"
let chipPrice = 2.00;

if (userMoney >= price) {
    let change = userMoney - price;
  
    console.log("you bought " + itemChips + " for $" + price + ".");
    console.log("your change is $" + change + ".");

} else {
    console.log("insufficient funds. Please add" + price - change);

}


