import { products, renderProducts } from "./js/product.js";
const product1 = [];
let html = "";
const menuBtn = document.querySelector(".nav--button");
const totalCartItems = document.querySelectorAll(".nav--cart-counter");
const cartIcons = document.querySelectorAll(".nav--cart-icon");
const productContainer = document.querySelector(".js-product-container");

cartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    open("./check-out-page.html", "_blank");
  });
});

totalCartItems.forEach((c) => {
  c.innerHTML = 0;
});

for (let i = 0; i <= 4; i++) {
  product1.push(products[i]);
}

productContainer.innerHTML = renderProducts(product1);
