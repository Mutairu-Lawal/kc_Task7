let url = "https://api.escuelajs.co/api/v1/products";
url = "https://fakestoreapi.com/products";

export async function getData() {
  try {
    const res = await fetch(url);
    if (res.status >= 400) {
      throw res;
    } else {
      const data = await res.json();
      data.forEach((p) => {
        if (p.category.id === 1) {
          console.log(p);
        }
      });
    }
  } catch (er) {
    console.error("error occur");
  }
}

let products = [];
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
      // localStorage.setItem("products", JSON.stringify(products));
      console.log("done");
    }
  } catch (er) {
    console.log(er);
  }
}
