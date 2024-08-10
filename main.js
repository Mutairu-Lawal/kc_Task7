import { getFeatures } from "./data/product.js";

const menuBtn = document.querySelector(".nav--button");
export const totalCartItems = document.querySelectorAll(".nav--cart-counter");
export const cartIcons = document.querySelectorAll(".nav--cart-icon");
export const productContainer = document.querySelector(".js-product-container");

export function updateCart() {
  cartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      open("./check-out-page.html", "_blank");
    });
  });

  totalCartItems.forEach((c) => {
    c.innerHTML = 0;
  });
}

getFeatures(productContainer, updateCart);
