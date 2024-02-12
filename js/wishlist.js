const product = document.getElementById("product")

function getWishlist() {
    async = axios.get("https://655c844f25b76d9884fd70a7.mockapi.io/products")
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    product.innerHTML=""
    wishlist.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'box col-12 col-sm-4 col-lg-4'
        box.innerHTML = `
        <div class="boxes">
        <h1>${item.name}</h1>
        <h2>€ ${item.price}</h2>
        <p>${item.description}</p>
        <button class="add" onclick="remove(${index})"> Delete </button>
    </div>
        `
        product.appendChild(box)
    })
}

function remove(index){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
    getWishlist()
}
getWishlist()

