export let cart = [
  {
    productId: "1",
    quantity: 2,
  },
  {
    productId: "14",
    quantity: 1,
  },
];

export function updateCart(icons, totalCount) {
  let cartQty = 0;

  if (cart.length != 0) {
    cart.forEach((item) => {
      cartQty += item.quantity;
    });
  }

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      open("./check-out-page.html", "_blank");
    });
  });

  if (cartQty != 0) {
    totalCount.forEach((count) => {
      count.classList.toggle("d-none");
      count.innerHTML = cartQty;
    });
  }

  console.log(cartQty);
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
