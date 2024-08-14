import { Products, getData } from "../data/product.js";
import { cart, clearCartFromStorage } from "../data/cart.js";
import { getFooterHTML } from "../utils/footer.js";

const previewContainer = document.querySelector(".js-preview-container");
let summaryHTML = "";

async function loadPage() {
  await getData();
  renderOrderSummary();
}
loadPage();

function renderOrderSummary() {
  console.log(cart);
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProductId(productId);

    const { image, price, title } = matchingProduct;

    const total = ((price * 100 * cartItem.quantity) / 100).toFixed(2);

    summaryHTML += `<div class="col-12 ">
                  <div class="cart-item-container">
                    <div class="cart-item--image border bg-white p-2">
                      <img
                        src="${image}"
                        alt="${title} image"
                        class="rounded-2 img-fit"
                      />
                    </div>
                    <div class="cart-item--details pe-3">
                      <div
                        class="c-row d-flex justify-content-between align-items-center"
                      >
                        <p class="fw-bolder ">${title}</p>
                      </div>
                      <div class="cart-item-qty">
                        <p class="lead">${cartItem.quantity}x</p>
                      </div>
                      <div
                        class="c-row d-flex justify-content-between align-items-center"
                      >
                        <p class="fw-bolder fs-4">${new Intl.NumberFormat(
                          "en-NG",
                          {
                            style: "currency",
                            currency: "NGN",
                          }
                        ).format(total)}</p>
                      </div>
                    </div>
                  </div>
                </div>`;
  });

  previewContainer.innerHTML = summaryHTML;
  document.querySelector(".js-place-order").addEventListener("click", (e) => {
    e.preventDefault();
    clearCartFromStorage();
  });
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

document.querySelector(".js-footer-container").innerHTML = getFooterHTML();
