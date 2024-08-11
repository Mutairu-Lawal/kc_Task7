export let Products = JSON.parse(localStorage.getItem("products")) || [];

async function getData() {
  try {
    const res = await fetch(url);
    if (res.status >= 400) {
      throw res;
    } else {
      const data = await res.json();
      data.forEach((product) => {
        Products.push(product);
      });
      console.log("done");
    }
  } catch (er) {
    console.log("Unexpected error, Please try again Later.");
  }
}
