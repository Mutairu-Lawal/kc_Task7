import { cart } from "../data/cart.js";
// import { products } from "../data/product.js";

let cartSummary = "";

// cart.forEach((cartItem) => {
//   const productId = cartItem.productId;

//   let matchingProduct;
//   products.forEach((product) => {
//     if (product.id === productId) {
//       matchingProduct = product;
//     }
//   });

//   const { image, price, title } = matchingProduct;

//   cartSummary += `<div class="cart-item-container">
//                 <div class="cart-item--image">
//                   <img
//                     src="${image}"
//                     alt="product image"
//                     class="rounded-2 img-fit"
//                   />
//                 </div>
//                 <div class="cart-item--details">
//                   <div
//                     class="c-row d-flex justify-content-between align-items-center"
//                   >
//                     <p class="fw-bolder fs-5">${title}</p>
//                     <div class="delete-icon fs-6 text-danger">
//                       <i class="fa-solid fa-trash-can"></i>
//                     </div>
//                   </div>
//                   <div
//                     class="c-row d-flex justify-content-between align-items-center"
//                   >
//                     <p class="fw-bolder fs-3">$${price.toFixed(2)}</p>
//                     <div
//                       class="quantity-control d-flex bg-body-tertiary px-3 rounded-pill py-2  d-flex justify-content-between"
//                     >
//                       <div class="decrease-btn me-2 icon-btn">
//                         <i class="fa-solid fa-minus"></i>
//                       </div>
//                       <div class="quantity-value fw-bold">${
//                         cartItem.quantity
//                       }</div>
//                       <div class="increase-btn ms-2 icon-btn">
//                         <i class="fa-solid fa-plus"></i>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>`;
// });

// document.querySelector(".js-cart-container").innerHTML = cartSummary;

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
      console.log("done");
    }
  } catch (er) {
    console.log(er);
  }
}

async function renderCart() {
  await get;
}

getProducts();
