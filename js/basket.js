const product = document.getElementById("product")

function getBasket() {
    async = axios.get("https://655c844f25b76d9884fd70a7.mockapi.io/products")
    product.innerHTML=""
    let cart = JSON.parse(localStorage.getItem('cart')) || []
     cart.map((item,index) => {
        const box = document.createElement('div')
        box.className = 'box col-12 col-sm-4 col-lg-2'
        box.innerHTML = `
        <div class="boxes">
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>$ ${item.price}</p>
        <P>Count: ${item.count}</p>
        <button class="add" onclick="remove(${index})"> Delete </button>
    </div>
        `
        product.appendChild(box)
    })
}

function remove(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getBasket()
}
getBasket()

