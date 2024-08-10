import { products, renderProducts, getData } from "./data/product.js";
const product1 = [];

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

async function renderHtml() {}

renderHtml();
