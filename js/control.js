const form = document.getElementById('form')
const namee = document.getElementById('name')
const price = document.getElementById('price')
const description = document.getElementById('description')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    axios.post('https://655c844f25b76d9884fd70a7.mockapi.io/products', {
        name: namee.value,
        price: price.value,
        description: description.value,
    })
    .then(res => {
        console.log(res.data);
        form.reset()
    })
})




const product = document.getElementById('producte')


function getProducts() {
    product.innerHTML = ''
    axios.get('https://655c844f25b76d9884fd70a7.mockapi.io/products')
    .then(res => {
        db = res.data
        db.map(item => {
            const box = document.createElement('tr')
            box.className = 'boxToForm col-12'
            box.innerHTML = `
            <div class="boxes">
            <h1>${item.name}</h1>
            <h2>€ ${item.price}</h2>
            <p>${item.description}</p>
            <button class="add" onclick="remove(${item.id})">Delete</button>
        </div>
            `
            product.appendChild(box)
        })
    })

}
getProducts()



function remove(id) {
    axios.delete(`https://655c844f25b76d9884fd70a7.mockapi.io/products/${id}`)
    .then(res => {
        getProducts()
    })
}
