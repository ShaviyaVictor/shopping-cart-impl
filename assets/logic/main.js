
'use strict'
let catalogue = document.getElementById('catalogue-container')
console.log(catalogue)

let catalogueItems = [
  {
    id: "jfhgbvnscs",
    product_title: "Casual Shirt",
    price_old: "$79.99",
    price_new: "$69.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-1.jpg"
  },
  {
    id: "ioytrhndcv",
    product_title: "Office Shirt",
    price_old: "$119.99",
    price_new: "$99.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-2.jpg"
  },
  {
    id: "wuefbncxbsn",
    product_title: "T Shirt",
    price_old: "$59.99",
    price_new: "$39.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-3.jpg"
  },
  {
    id: "thyfhcbcv",
    product_title: "Mens Suit",
    price_old: "$299.99",
    price_new: "$249.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-4.jpg"
  },
  {
    id: "thiecbawdjksadjk",
    product_title: "Mens Tie",
    price_old: "$29.99",
    price_new: "$19.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-5.jpg"
  },
  {
    id: "iuertrywebncdjksadjk",
    product_title: "Casual Shoes",
    price_old: "$79.99",
    price_new: "$69.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-6.jpg"
  },
  {
    id: "thierytbvcbvzdhadjk",
    product_title: "Black Suit",
    price_old: "$299.99",
    price_new: "$269.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-7.jpg"
  },
  {
    id: "trfoiwfcnbcawdjksadjk",
    product_title: "Polo Shirt",
    price_old: "$79.99",
    price_new: "$69.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-8.jpg"
  },
  {
    id: "cbvxbcvsceldk",
    product_title: "Denim Shirt",
    price_old: "$99.99",
    price_new: "$89.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-9.jpg"
  },
  {
    id: "ioytrhagbhzshytndcv",
    product_title: "Denim Pants",
    price_old: "$129.99",
    price_new: "$119.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-10.jpg"
  },
  {
    id: "iogabzrtytrhndcv",
    product_title: "Cap",
    price_old: "$69.99",
    price_new: "$59.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-11.jpg"
  },
  {
    id: "ioytrhndEGTcv",
    product_title: "Leather Boots",
    price_old: "$179.99",
    price_new: "$169.99",
    product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?",
    img: "/assets/images/img-12.jpg"
  }
]

let printCatalogue = () => {
  return (catalogue.innerHTML = catalogueItems.map((item) => {
    return `
    <li class="product_item">
        <div class="product_sale">
          <p>On Sale</p>
        </div>
        <div class="product_image">
          <a href="#"><img src="https://bit.ly/1myplK1" alt=""></a>
        </div>
        <div class="product_values">
          <div class="product_title">
            <h5>White Fancy Dress</h5>
          </div>
          <div class="product_price">
            <a href="#"><span class="price_old">$79.99</span> <span class="price_new">$69.99</span></a>
            <span class="product_rating"></span>
          </div>
          <div class="product_desc">
            <p class="truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat ipsa aut temporibus, pariatur tempore vitae architecto cum? Dolores necessitatibus ipsam eius repellendus minus molestiae, harum iste error quia blanditiis?
            </p>
          </div>
          <div class="product_buttons">
            <button class="product_remove"><i class="bi bi-dash-lg"></i></i></button>
            <span>0</span>
            <button class="add_to_cart"><i class="bi bi-plus-lg"></i></button>
          </div>
        </div>
      </li>
      `
  }).join(""));
}
printCatalogue()

