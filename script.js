const addProduct = () => {
const productName = document.getElementById('product-name');
const productQuantity = document.getElementById('product-quantity');
const productNameValue = productName.value.trim();
const productQuantityValue = productQuantity.value.trim();
// reset input
productName.value = "";
productQuantity.value = '';
console.log(productNameValue, productQuantityValue);
}

