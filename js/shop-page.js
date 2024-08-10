import { updateCart, cart, addToCart } from "../data/cart.js";
import { renderAllProducts } from "../data/product.js";

const totalCartItems = document.querySelectorAll(".nav--cart-counter");
const cartIcons = document.querySelectorAll(".nav--cart-icon");
const productContainer = document.querySelector(".js-product-container");

async function loadPage() {
  await renderAllProducts(productContainer);
  addButtonListener();
}

loadPage();

function addButtonListener() {
  const addToCartButtons = document.querySelectorAll(".js-add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { productId } = button.dataset;
      addToCart(productId);
    });
  });
}

function updateCartQuantity() {
  cart.forEach((cartItems) => {
    cartQuantity += item.quantity;
  });

  totalCartItems.forEach((cart) => {
    cart.innerHTML = cartQuantity;
  });
}
