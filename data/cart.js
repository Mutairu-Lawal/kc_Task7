export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveCartToStorage();
}

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCartFromStorage() {
  localStorage.removeItem("cart");
}
export function updateCart(icons, totalCount) {
  let cartQty = 0;

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      open("../add-to-cart-page.html", "_blank");
    });
  });

  cart.forEach((item) => {
    cartQty += item.quantity;
  });

  if (cartQty != 0) {
    totalCount.forEach((count) => {
      count.classList.remove("d-none");
      count.innerHTML = cartQty;
    });
  }
}
