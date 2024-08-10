const cart = [];

export function updateCart(cartIcons, cartQuantitys) {
  cartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      open("./check-out-page.html", "_blank");
    });
  });

  if (cart.length === 0) {
    cartQuantity.forEach((cartQuantity) => {
      cartQuantity.innerHTML = 0;
    });
  }
}
