const product = document.getElementById("product");

async function getBasket() {
  try {
    const response = await axios.get("https://655c844f25b76d9884fd70a7.mockapi.io/products");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cart.length === 0) {
      document.getElementById("noData").style.display = "flex";
      product.style.display = "none";
    } else {
      document.getElementById("noData").style.display = "none";
      product.style.display = "flex";
      product.innerHTML = "";
      
      cart.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "box col-12 col-sm-4 col-lg-4";
        box.innerHTML = `
          <div class="boxes">
            <h1>${item.name}</h1>
            <h2>€ ${item.price}</h2>
            <p>${item.description}</p>
            <button class="add" onclick="remove(${index})"> Delete </button>
          </div>
        `;
        product.appendChild(box);
      });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
}

function remove(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getBasket();
}

window.onload = () => {
    getBasket();
};
