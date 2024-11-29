//get user data and add product
const addProduct = () => {
const productName = document.getElementById('product-name');
const productQuantity = document.getElementById('product-quantity');
const productNameValue = productName.value.trim();
const productQuantityValue = productQuantity.value.trim();
// reset input
productName.value = "";
productQuantity.value = '';
displayProduct(productNameValue, productQuantityValue);
setProductInLocalStorage(productNameValue, productQuantityValue);
}

//display product in ui
const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li)
}

//initial variable and value created
const getProductFromLocalStorage = () =>{
    let cart = {};
    const existProduct = localStorage.getItem('cart');
    if(existProduct){
        cart = JSON.parse(existProduct);
    }
    return cart;
}

//set product in localstorage
const setProductInLocalStorage = (product, quantity) =>{
//get initial variable and value in localstorage
const cart =  getProductFromLocalStorage();
// value insert into cart obj
cart[product] = quantity
// set obj in localStorage
const cartString = JSON.stringify(cart);
localStorage.setItem('cart', cartString);
}

//display localStorage product in UI
const displayLocalStoragesProduct = () =>{
//get localStorage obj
const products =  getProductFromLocalStorage();
for(let product in products){
    const quantity = products[product];
    displayProduct(product, quantity);
}
console.log(products);
}
displayLocalStoragesProduct();