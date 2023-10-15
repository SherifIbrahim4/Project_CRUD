
btnProduct.addEventListener('click',function(){
    let product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDesc.value
    };

    productContainer.push(product);
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProducts(productContainer);

    clearInputs();

})
if(btnProduct == 'Add')
{
    productContainer.push(product);

}else
{
    productContainer[proId] = product;
    btnProduct.innerHTML = 'Add';
    btnProduct.style.background = 'black';
    btnProduct.style.color = 'blue';
}