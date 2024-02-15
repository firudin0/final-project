
// Products


const product = document.getElementById('product')
const loadMoreBtn=document.getElementById("load")

const limit = 3;
let page = 1;

async function getProducts() {
    const res = await axios.get(`https://655c844f25b76d9884fd70a7.mockapi.io/products?limit=${limit}&page=${page}`)
    const data = await res.data
    db = data
    console.log(db);
    db.map(item => {
        const box = document.createElement('div')
        box.className = 'box col-12 col-sm-4 col-lg-4'
        box.innerHTML = `
        <div class="boxes">
        <h1>${item.name}</h1>
        <h2>€ ${item.price}</h2>
        <p>${item.description}</p>
        <div class="buttons">
            <button class="add" onclick="addToCart(${item.id})">Add to cart</button>
            <button class="wishlist" onclick="addToWishlist(${item.id})"><i class="fa-regular fa-heart"></i></button>
        </div>
    </div>
        `
        product.appendChild(box)
    });

    page++
}

function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)
    if (productItem) {
        alert('Only 1 product')
    } else {
        cart.push(db.find(item => item.id == id))
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
function addToWishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    if (productItem) {
        alert('Only 1 product')
    } else {
        wishlist.push(db.find(item => item.id == id))
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
}
getProducts()

loadMoreBtn.addEventListener("click", getProducts)
