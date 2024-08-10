import { updateCart } from "../data/cart.js";
import { renderAllProducts } from "../data/product.js";

const totalCartItems = document.querySelectorAll(".nav--cart-counter");
const cartIcons = document.querySelectorAll(".nav--cart-icon");
const productContainer = document.querySelector(".js-product-container");

updateCart(cartIcons, totalCartItems);
renderAllProducts(productContainer);
