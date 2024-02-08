// $(".nav-switch").on('click', function (e) {
//     e.preventDefault();
//     $(".slicknav_btn").click();
// });

// $('.nav__menu').slicknav({
//     'appendTo' : '.main__menu',
//     'openedSymbol': '<i class="fa fa-angle-up"></i>',
//     'closedSymbol': '<i class="fa fa-angle-right"></i>'
// });



// Products


const product = document.getElementById('product')


async function getProducts() {
    const res = await axios.get(`https://655c844f25b76d9884fd70a7.mockapi.io/products`)
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
    })
}

function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)
    if (productItem) {
        productItem.count = (productItem.count || 1) +1
    } else {
        cart.push(db.find(item => item.id == id))
    }
    localStorage.setItem('cart', JSON.stringify(cart))
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

