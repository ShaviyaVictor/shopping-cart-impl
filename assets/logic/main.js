
'use strict'
let catalogue = document.getElementById('catalogue-container')
console.log(catalogue)

let catalogueItems = [{
  
},{},{}]

let printCatalogue = () => {
  return catalogue.innerHTML = `
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
}
printCatalogue()

