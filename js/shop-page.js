import { products, renderProducts } from "../data/product.js";

const clothingArray = products.filter((e) => {
  return e.category.includes("clothing") || e.category.includes("jewelery");
});

const productContainer2 = document.querySelector(".js-product-container-2");

productContainer2.innerHTML = renderProducts(clothingArray);
