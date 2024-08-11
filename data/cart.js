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
  console.log(cart);
}

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function updateCart(icons, totalCount) {
  let cartQty = 0;

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      open("./check-out-page.html", "_blank");
    });
  });

  cart.forEach((item) => {
    cartQty += item.quantity;
  });

  console.log(cartQty);

  if (cartQty != 0) {
    totalCount.forEach((count) => {
      count.classList.toggle("d-none");
      count.innerHTML = cartQty;
    });
  }
}
