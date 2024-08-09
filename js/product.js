import { convertToTens } from "../utils/rating.js";

export const products = JSON.parse(localStorage.getItem("data")) || [];
const copyProduct = [];
let html = "";

const url = "https://fakestoreapi.com/products";

async function getData() {
  try {
    const res = await fetch(url);
    if (res.status >= 400) {
      throw res;
    } else {
      const data = await res.json();
      localStorage.setItem("data", JSON.stringify(data));
      console.log("done");
    }
  } catch (er) {
    console.error("error occur");
  }
}

export function renderProducts() {
  products.forEach((product) => {
    const {
      image,
      id,
      price,
      title,
      rating: { rate, count },
    } = product;

    html += `
    <div class="col-12 col-sm-6 col-lg-3 ">
            <div class="card">
              <img
                src='${image}'
                class="card-img-top img-fluid"
                alt="${title}-img"
                height="200"
              />
              <div class="card-body">
                <p class="product-name fw-bolder">${title}</p>
                <div
                  class="product-rating-details mb-2 d-flex align-items-center"
                >
                  <img
                    src="./assets/ratings/rating-${convertToTens(rate)}.png"
                    alt="rating-${rate}"
                    height="30px"
                  />
                  <div class="product-count ms-2 small mt-1">${count}</div>
                </div>
                <h4 class="product price fw-bolder mb-1">$${price}</h4>
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
                  class="btn bg-black text-white w-100 rounded-pill fw-bold mt-2 dta-product-id=${id}"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
    `;
  });
  return html;
}
