export const cart = [];

export function updateCart(icons, cartQty, counter) {
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      open("./check-out-page.html", "_blank");
    });
  });

  if (cart.length <= 0) {
    cartQty.forEach((cartQty) => {
      counter.classList.add("d-none");
    });
  }

  cart.forEach((item) => {
    cartQty.innerHTML = cartQuantity + item.quantity;
  });
}

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
  console.log(cart);
}
