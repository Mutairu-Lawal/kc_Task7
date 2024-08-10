import { convertToTens } from "../utils/rating.js";
const url = "https://fakestoreapi.com/products";
export const products = [];

export async function getProducts() {
  try {
    const res = await fetch(url);
    if (res.status >= 400) {
      throw res;
    } else {
      const data = await res.json();
      data.forEach((product) => {
        products.push(product);
      });
    }
  } catch (er) {
    console.log(er);
  }
}

function productHTML(products) {
  let html = "";
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
                  class="btn bg-black text-white w-100 rounded-pill fw-bold mt-2 data-product-id=${id}"
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

function getFiveProducts(arr) {
  for (let i = 0; i <= 4; i++) {
    arr.push(products[i]);
  }
}

export async function getFeatures(displayContainer) {
  const featuresProduct = [];
  const products = await getProducts();
  getFiveProducts(featuresProduct);
  displayContainer.innerHTML = productHTML(featuresProduct);
}
