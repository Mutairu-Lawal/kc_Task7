import { demoCart } from "../data/cart.js";
const product = JSON.parse(localStorage.getItem("products"));
const orderCart = [];
const cartContainer = document.querySelector(".js-cart-container");

let cartSummaryHTML = "";

function loadCart() {
  orderSummary();
}

loadCart();

function orderSummary() {
  demoCart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;
    product.forEach((product) => {
      if (product.id == productId) {
        matchingProduct = product;
      }
    });

    const { image, price, title } = matchingProduct;

    cartSummaryHTML += `<div class="cart-item-container">
                <div class="cart-item--image">
                  <img
                    src="${image}"
                    alt="${title} image"
                    class="rounded-2 img-fit"
                  />
                </div>
                <div class="cart-item--details">
                  <div
                    class="c-row d-flex justify-content-between align-items-center"
                  >
                    <p class="fw-bolder">${title}</p>
                    <div class="delete-icon fs-6 text-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                  <div
                    class="c-row d-flex justify-content-between align-items-center"
                  >
                    <p class="fw-bolder fs-5">$${price.toFixed(2)}</p>
                    <div
                      class="quantity-control d-flex bg-body-tertiary px-3 rounded-pill py-2  d-flex justify-content-between"
                    >
                      <div class="decrease-btn me-2 icon-btn">
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <div class="quantity-value fw-bold">${
                        cartItem.quantity
                      }</div>
                      <div class="increase-btn ms-2 icon-btn">
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  `;
  });

  cartContainer.innerHTML = cartSummaryHTML;
}

function paymentSummary() {}
