import { updateCart } from "../data/cart.js";
import { renderAllProducts } from "../data/product.js";

const totalCartItems = document.querySelectorAll(".nav--cart-counter");
const cartIcons = document.querySelectorAll(".nav--cart-icon");
const productContainer = document.querySelector(".js-product-container");

async function loadPage() {
  await updateCart(cartIcons, totalCartItems);
  await renderAllProducts(productContainer);
  addButtonListener();
}

loadPage();

function addButtonListener() {
  const addToCartButtons = document.querySelectorAll(".js-add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { productId } = button.dataset;
    });
  });
}
