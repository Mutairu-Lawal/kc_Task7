export let Products = [];
const url = "https://fakestoreapi.com/products";

export async function getData() {
  try {
    const res = await fetch(url);
    if (res.status >= 400) {
      throw res;
    } else {
      const data = await res.json();
      data.forEach((product) => {
        Products.push(product);
      });
    }
  } catch (er) {
    console.log("Unexpected error, Please try again Later.");
  }
}
