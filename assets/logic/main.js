
'use strict'

// * variable connecting us to the html dom 
let catalogue = document.getElementById('catalogue-container')
console.log(catalogue)


// * object holding the data for the catalogue 
let catalogueItems = [
  {
    id: "si_1",
    product_title: "Casual Shirt",
    price_old: "$79.99",
    price_new: "$69.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-1.jpg"
  },
  {
    id: "si_2",
    product_title: "Office Shirt",
    price_old: "$119.99",
    price_new: "$99.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-2.jpg"
  },
  {
    id: "si_3",
    product_title: "T Shirt",
    price_old: "$59.99",
    price_new: "$39.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-3.jpg"
  },
  {
    id: "si_4",
    product_title: "Mens Suit",
    price_old: "$299.99",
    price_new: "$249.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-4.jpg"
  },
  {
    id: "si_5",
    product_title: "Mens Tie",
    price_old: "$29.99",
    price_new: "$19.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-5.png"
  },
  {
    id: "si_6",
    product_title: "Casual Shoes",
    price_old: "$79.99",
    price_new: "$69.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-6.png"
  },
  {
    id: "si_7",
    product_title: "Black Suit",
    price_old: "$299.99",
    price_new: "$269.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-7.png"
  },
  {
    id: "si_8",
    product_title: "Polo Shirt",
    price_old: "$79.99",
    price_new: "$69.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-8.png"
  },
  {
    id: "si_9",
    product_title: "Denim Shirt",
    price_old: "$99.99",
    price_new: "$89.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-9.png"
  },
  {
    id: "si_10",
    product_title: "Denim Pants",
    price_old: "$129.99",
    price_new: "$119.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-10.png"
  },
  {
    id: "si_11",
    product_title: "Cap",
    price_old: "$69.99",
    price_new: "$59.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-11.png"
  },
  {
    id: "si_12",
    product_title: "Leather Boots",
    price_old: "$179.99",
    price_new: "$169.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-12.png"
  }
];


let basket = [];


// * looping through the objects extracting each item using map() function 
  // * map() takes in 1 argument and then join() removes the comas from the collection 
let printCatalogue = () => {
  return (catalogue.innerHTML = catalogueItems.map((eachItem) => {
    // destructuring assignment impl to avoid calling items using the eachItem.img formart of calling prop values
    let {id, product_title, price_old, price_new, product_desc, img} = eachItem
    return `
      <li id=shop-item-${id} class="product_item">
        <div class="product_sale">
          <p>On Sale</p>
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
            <span id="${id}">0</span>
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

  itemsUpdate(increasedItem.id);

}


// item decrement function 
let itemDecreament = (id) => {
  let deductedItem = id;
  // console.log("Item removed: id - " + deductedItem.id)

  let itemSearch = basket.find((item) => item.id === deductedItem.id);

  // * if the items count is at 0, discontinue the program 
  if (itemSearch.items === 0) 
    return;
  else itemSearch.items -= 1;
  // console.log(basket);

  itemsUpdate(deductedItem.id);

}


// count update function 
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

