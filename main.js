import { getFeatures } from "./data/product.js";
import { updateCart } from "./data/cart.js";

const menuBtn = document.querySelector(".nav--button");
export const totalCartItems = document.querySelectorAll(".nav--cart-counter");
export const cartIcons = document.querySelectorAll(".nav--cart-icon");
export const productContainer = document.querySelector(".js-product-container");

// updateCart(cartIcons, totalCartItems);
getFeatures(productContainer);
