
// * call the html sections for population
let cartItem = document.getElementById("cart-item");
let summary = document.getElementById("summary");

let basket = JSON.parse(localStorage.getItem("basketItems")) || [];
// console.log(basket)


// items in cart count 
let totalItems = () => {
  let cartItems = document.getElementById("cart-items");
  // * reduce function takes in the previous Num and the next Num and sums them up and adds them on the the defined default value of 0
  cartItems.innerHTML = basket.map((item) => item.items)
                              .reduce((prevNum, nextNum) => prevNum + nextNum, 0)
  
};
totalItems(); 