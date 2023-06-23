
'use strict'

// * variable connecting us to the html dom 
let catalogue = document.getElementById('catalogue-container')
console.log(catalogue)


// empty basket initialization
// let basket = [];
// calling data stored in the localStorage back to the basket upon browser refresh and if no item then the empty basket 
let basket = JSON.parse(localStorage.getItem("basketItems")) || [];


// * looping through the objects extracting each item using map() function 
  // * map() takes in 1 argument and then join() removes the comas from the collection 
let printCatalogue = () => {
  return (catalogue.innerHTML = catalogueItems.map((eachItem) => {
    // destructuring assignment impl to avoid calling items using the eachItem.img formart of calling prop values
    let {id, product_title, price_old, price_new, product_desc, img} = eachItem;
    let search = basket.find((item) => item.id === id) || [];
    return `
      <li id=shop-item-${id} class="product_item">
        <div class="product_sale">
          <p>On Offer</p>
        </div>
        <div class="product_image">
          <a href="#"><img src="${img}" alt=""></a>
        </div>
        <div class="product_values">
          <div class="product_title">
            <h5>${eachItem.product_title}</h5>
          </div>
          <div class="product_price">
            <a href="#"><span class="price_old">${price_old}</span> <span class="price_new">${price_new}</span></a>
            <span class="product_rating"></span>
          </div>
          <div class="product_desc">
            <p class="truncate">
              ${product_desc}
            </p>
          </div>
          <div class="product_buttons">
            <button onclick="itemDecreament(${id})" class="product_remove"><i class="bi bi-dash-lg"></i></i></button>
            <span id="${id}">
              ${search.items === undefined ? 0 : search.items}
            </span>
            <button onclick="itemIncreament(${id})" class="add_to_cart"><i class="bi bi-plus-lg"></i></button>
          </div>
        </div>
      </li>
      `
  }).join(""));
}
printCatalogue()


// item increment function 
// TODO Investigave further why...when the {id} prop is called in another element, the id prop is collected in a collection in counts and id is undefined
// ! Reason: The ID must be a unique value thus the callenge in picking the exact id,
// * Adding some unique values on the id where it is called in another element will work 
let itemIncreament = (id) => {
  let increasedItem = id;
  // console.log("Item added: id - " + increasedItem.id)

  // console.log("Check 1")
  // console.log(increasedItem)

  // console.log(increasedItem.id);
  // console.log(id);
  // console.log("Reverse Check")

  // * search function that searches whether an item exists in the basket or not so as to give a more precise count 
  // * the item argument is to allow for the search of that one specific item with that unique id 
  let itemSearch = basket.find((item) => item.id === increasedItem.id);
  // check if the item with the id is not defined/ not found in the basket; if true the item is added to the basket
  if (itemSearch === undefined) {
    // function to add clicked items in the basket
    basket.push({
      id: increasedItem.id,
      items: 1,
    });
  }
  // if found
  // else itemSearch.items += 1; OR
  else {
    itemSearch.items += 1;
  }
  // console.log(basket);

  // triggering the function call 
  itemsUpdate(increasedItem.id);

  // saving the data being pushed to the basket to localStorage 
  // localStorage.setItem("basketItems", basket)
  // using JSON.stringify() function to convert the object on the localStorage console more readable
  localStorage.setItem("basketItems", JSON.stringify(basket));

}


// item decrement function 
let itemDecreament = (id) => {
  let deductedItem = id;
  // console.log("Item removed: id - " + deductedItem.id)

  let itemSearch = basket.find((item) => item.id === deductedItem.id);
  // if statement to catch undefined ids upon a search & break the program
  if (itemSearch === undefined) {
    return;
  }

  // * if the items count is at 0, discontinue the program 
  else if (itemSearch.items === 0) 
    return;
  else itemSearch.items -= 1;
  // console.log(basket);

  // triggering the function call 
  itemsUpdate(deductedItem.id);

  // logic to remove an item from the basket once the item count gets to 0
  basket = basket.filter((item) => item.items !== 0);

  // saving the data being pushed to the basket to localStorage 
  localStorage.setItem("basketItems", JSON.stringify(basket));

}


// count update function to show the number of items added
let itemsUpdate = (id) => {
  let itemSearch = basket.find((item) => item.id === id);
  // console.log(itemSearch)
  // console.log(itemSearch.items)

  // * Add the item count to the html element tag keeping track of the count
  document.getElementById(id).innerHTML = itemSearch.items;

  totalItems();

}


// items in cart count 
let totalItems = () => {
  let cartItems = document.getElementById("cart-items");
  // console.log("Check 1")
  // console.log(basket)
  // console.log(basket.map((item) => item.items))
  // * reduce function takes in the previous Num and the next Num and sums them up and adds them on the the defined default value of 0
  // console.log(basket.map((item) => item.items)
  //                   .reduce((prevNum, nextNum) => prevNum + nextNum, 0))
  cartItems.innerHTML = basket.map((item) => item.items)
                              .reduce((prevNum, nextNum) => prevNum + nextNum, 0)
  
};
totalItems();

