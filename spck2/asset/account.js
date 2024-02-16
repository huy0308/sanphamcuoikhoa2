
let products = {
    data: [
        {
            id: 1,
            name: "Innovative Ao Dai Peach - Purple",
            price: "1.780.000đ ",
            image: "https://product.hstatic.net/1000136076/product/0k9a2714_917ee42098614fe891d198a8b1dfa296_grande.png"
        },

        {
            id: 2,
            name: "Traditional Ao Dai with Lisianthus Flower ",
            price: "1.500.000đ ",
            image: "https://product.hstatic.net/1000136076/product/_mgl2520_5a1f0521afd14ba2a19c25a592fd4f04_grande.png"
        },

        {
            id: 3,
            name: "Nhat Binh Spring Ao Dai - Green",
            price: "780.000đ ",
            image: "https://product.hstatic.net/1000136076/product/0k9a3640_f3083bfaac55473b97a0b7447c72d7e3_grande.png"
        },

        {
            id: 4,
            name: "Nhat Binh Spring Ao Dai - Pink",
            price: "780.000đ ",
            image: "https://product.hstatic.net/1000136076/product/0k9a3798_78508e7b90514a7eb4dfbad18c87d4f7_grande.png"
        },

        {
            id: 5,
            name: "Nhat Binh Spring Ao Dai - Red",
            price: "780.000đ ",
            image: "https://product.hstatic.net/1000136076/product/_mgl2567_3632c4b0d4854f3598ec55235a192ef5_grande.png"
        },

        {
            id: 6,
            name: "Lac Hoa Binh Ancient Ao Dai - Orange",
            price: "870,000₫ ",
            image: "https://product.hstatic.net/1000136076/product/_mgm2597_804395269ec44716a93b734326fa2454_grande.png"
        },

        {
            id: 7,
            name: "Ao Dai Ancient style Lac Hoa Binh - Hong",
            price: "870,000₫",
            image: "https://product.hstatic.net/1000136076/product/_mgl2722_4fe1e850aed44f1ba30408465e31bf93_grande.png"
        },

        {
            id: 8,
            name: "Lac Hoa Binh Ao Dai - Ancient Green Rice",
            price: "870,000₫",
            image: "https://product.hstatic.net/1000136076/product/img_2274_c997ed9e300041fbbb0c899f1083cc86_grande.png"
        },

        {
            id: 9,
            name: "Lac Hoa Binh Ancient Ao Dai - Red",
            price: "870,000₫",
            image: "https://product.hstatic.net/1000136076/product/_mgl4890_02be1582c5384bae82a0e8eb86819b3b_grande.png"
        },

        {
            id: 10,
            name: "Lac Hoa Binh Ancient Ao Dai - Yellow",
            price: "870,000₫",
            image: "https://product.hstatic.net/1000136076/product/_mgl5153_3922dcce8669459fa698c32c0d6c0757_grande.png"
        },

        
    ]
}
for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute( "onclick", "addToCart(" + items.id + ")",'')
    btn.className='ez'
    btn.innerHTML = "Add to cart"
    container.appendChild(btn)
    

    card.appendChild(container);
    document.getElementById("products").appendChild(card);


}
var cart = []
const byGetProduceById = (id) => {
    for (let items of products.data) {
        if (id == items.id) {
            return items;
        }
    }
}
const addToCart = (id) => {
    let product = byGetProduceById(id);
    let itemDetails = cart.find(items => items.product.id == id)
    if (itemDetails) {
        itemDetails.quantity += 1

    } else {
        cart.push({ product, quantity: 1 })
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
function showAll() {
    var list = `<tr><th>Ten san pham</th><th>ten san pham</th><th>gia</th></tr>`;
    JSON.parse(localStorage.getItem('cart'))
        .forEach(element => {
        list +=`<tr><td>`+element.product.name+
        `</td><td>`+element.quantity+
        `</td><td>`+element.product.price+
        `</td></tr>`
   });
    document.getElementById('list').innerHTML = list
}
document.querySelectorAll('.ez').forEach(item => {
    item.addEventListener('click',event =>{
        modelcontainer.classList.add('show')
    }
    )})
    const anhuy = document.getElementById('anhuy');
    anhuy.addEventListener('click', ()=>{
        modelcontainer.classList.remove('show');  
    });


