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
