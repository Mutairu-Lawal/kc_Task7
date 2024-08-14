import { cart, saveCartToStorage } from "../data/cart.js";
import { getFooterHTML } from "../utils/footer.js";
import { getData, Products } from "../data/product.js";
const cartContainer = document.querySelector(".js-cart-container");
let cartSummaryHTML = "";
document.querySelector(".js-footer-container").innerHTML = getFooterHTML();

async function loadCart() {
  try {
    const icons = document.querySelectorAll(".nav--cart-icon");
    icons.forEach((i) => {
      if (!i.classList.contains("d-none")) {
        i.classList.add("d-none");
      }
    });
    await getData();
    renderOrderSummary();
    renderPaymentSummary();
    document.querySelectorAll(".js-icon-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const { productId } = btn.dataset;
        const valueId = document.querySelector(`.js-value-id-${productId}`);
        cart.forEach((cartItem) => {
          if (cartItem.productId === productId) {
            if (btn.classList.contains("js-plus")) {
              cartItem.quantity += 1;
            } else {
              if (cartItem.quantity != 1) {
                cartItem.quantity -= 1;
              }
            }
            valueId.innerHTML = cartItem.quantity;
          }
        });
        saveCartToStorage();
        renderPaymentSummary();
      });
    });
  } catch (error) {
    console.error("Error loading cart");
  }
}

loadCart();

function renderOrderSummary() {
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProductId(cartItem.productId);

    const { image, price, title, id } = matchingProduct;

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
                    <p class="fw-bolder fs-5">${new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    }).format(price)}</p>
                    <div
                      class="quantity-control d-flex bg-body-tertiary px-3 rounded-pill py-2  d-flex justify-content-between"
                    >
                      <div class="decrease-btn me-2 icon-btn  js-minus js-icon-btn" data-product-id="${id}">
                        <i class="fa-solid fa-minus"></i>
                      </div>
                      <div class="quantity-value fw-bold js-quantity-value js-value-id-${id}">${
      cartItem.quantity
    }</div>
                      <div class="increase-btn ms-2 icon-btn js-plus js-icon-btn" data-product-id="${id}">
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

function renderPaymentSummary() {
  let productTotal = 0;
  cart.forEach((cartItem) => {
    const product = getProductId(cartItem.productId);
    productTotal += product.price * cartItem.quantity;
  });
  productTotal = productTotal.toFixed(2);
  const discountPercentage = (productTotal * 0.1).toFixed(2);
  const deliveryFee = productTotal <= 0 ? 0 : 15;
  const grandTotal = (productTotal - discountPercentage + deliveryFee).toFixed(
    2
  );

  document.querySelector(".js-cart-summary").innerHTML = `
  <div class="c-row d-flex justify-content-between mb-3">
                  <p>Subtotal (${getTotalCart(cart)})</p>
                  <p class="fw-bold"><span>${new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(productTotal)}</span></p>
                </div>
                <div class="c-row d-flex justify-content-between mb-3">
                  <p>Discount (-10%)</p>
                  <p class="fw-bold text-danger">-<span>${new Intl.NumberFormat(
                    "en-NG",
                    {
                      style: "currency",
                      currency: "NGN",
                    }
                  ).format(discountPercentage)}</span></p>
                </div>
                <div class="c-row d-flex justify-content-between mb-3">
                  <p>Delivery Fee</p>
                  <p class="fw-bold"><span>${new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(deliveryFee)}</span></p>
                </div>
                <hr />
                <div class="c-row d-flex justify-content-between mb-3">
                  <p>Total</p>
                  <p class="fw-bolder fs-5"><span>${new Intl.NumberFormat(
                    "en-NG",
                    {
                      style: "currency",
                      currency: "NGN",
                    }
                  ).format(grandTotal)}</span></p>
                </div>
                <div class="row">
                  <div class="col-12 mt-1 d-grid">
                    <a
                      href="./check-out-page.html"
                      class="btn bg-black text-white rounded-pill fw-bold"
                    >
                      Go to Checkout
                      <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>`;
}

function getProductId(productId) {
  let matchingProduct;
  Products.forEach((product) => {
    if (product.id == productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

function getTotalCart(cart) {
  let qty = 0;
  cart.forEach((item) => {
    qty += item.quantity;
  });

  return qty;
}
