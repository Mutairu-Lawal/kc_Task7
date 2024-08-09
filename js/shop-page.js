import { products, renderProducts } from "../data/product.js";

const productContainer2 = document.querySelector(".js-product-container-2");

productContainer2.innerHTML = renderProducts(products);
