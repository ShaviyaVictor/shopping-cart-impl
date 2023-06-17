
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
]

// * looping through the objects extracting each item using map() function 
  // * map() takes in 1 argument and then join() removes the comas from the collection 
let printCatalogue = () => {
  return (catalogue.innerHTML = catalogueItems.map((eachItem) => {
    // destructuring assignment impl to avoid calling items using the item.img formart
    let {id, product_title, price_old, price_new, product_desc, img} = eachItem
    return `
      <li id=${id} class="product_item">
        <div class="product_sale">
          <p>On Sale</p>
        </div>
        <div class="product_image">
          <a href="#"><img src="${img}" alt=""></a>
        </div>
        <div class="product_values">
          <div class="product_title">
            <h5>${product_title}</h5>
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
            <button onclick="itemDecreament()" class="product_remove"><i class="bi bi-dash-lg"></i></i></button>
            <span id=${id}>0</span>
            <button onclick="itemIncreament()" class="add_to_cart"><i class="bi bi-plus-lg"></i></button>
          </div>
        </div>
      </li>
      `
  }).join(""));
}
printCatalogue()

let itemIncreament = () => {
  console.log("Item added.")
}

let itemDecreament = () => {
  console.log("Item removed.")
}

let itemsUpdate = () => {}

