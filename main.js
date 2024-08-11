import { Products } from "./data/product.js";
import { convertToTens } from "../utils/rating.js";

function loadPage() {
  const newArray = [];
  let productHTML = "";

  for (let i = 0; i <= 4; i++) {
    newArray.push(Products[i]);
  }

  newArray.forEach((product) => {
    const {
      image,
      id,
      price,
      title,
      rating: { rate, count },
    } = product;

    productHTML += `
    <div class="col-12 col-sm-6 col-lg-3 ">
            <div class="card h-100 overflow-hidden">
              <div class="img-container p-3">
                <img
                src="${image}"
                class="img-fit"
                alt="product-${title}"
              />
              </div>
              <div class="card-body">
                <p class="product-name fw-bolder">${title}</p>
                <div
                  class="product-rating-details mb-2 d-flex align-items-center"
                >
                <div class="rating-icon-container">
                  <img
                    src="./assets/ratings/rating-${convertToTens(rate)}.png"
                    alt="rating-${rate}"
                    class="img-fit"
                  />
                </div>
                  <div class="product-count ms-2 small mt-1 fw-semibold">${count}</div>
                </div>
                <h4 class="product price fw-bolder mb-1">$${price.toFixed(
                  2
                )}</h4>
                <div class="product-added-status text-center my-1 fw-bold">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/ok--v1.png"
                    alt="ok--v1"
                  />
                  Added
                </div>
                <button
                  class="btn bg-black text-white w-100 rounded-pill fw-bold mt-2 js-add-to-cart" data-product-id="${id}"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
    `;
  });

  document.querySelector(".js-product-container").innerHTML = productHTML;

  const addToCartButtons = document.querySelectorAll(".js-add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { productId } = button.dataset;
      addToCart(productId);
    });
  });
}

loadPage();
