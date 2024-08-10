let url = "https://api.escuelajs.co/api/v1/products";
// url = "https://fakestoreapi.com/products";

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

getData(url);

console.log("test");
