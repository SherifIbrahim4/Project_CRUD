let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productCategory = document.getElementById('productCategore');
let productDesc = document.getElementById('productDesc');
let btnProduct = document.getElementById('btnProduct');
let productContainer;
let proId;



if (localStorage.getItem('products') === null) {
    productContainer = [];
} else {
    productContainer = JSON.parse(localStorage.getItem('products'));
    displayProducts(productContainer);
}


btnProduct.addEventListener('click',function(){
    let product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDesc.value
    };
if(btnProduct.innerHTML == 'Add')
{
    productContainer.push(product);
}
else{
    productContainer[proId] = product;
    btnProduct.innerHTML = 'Add';
    btnProduct.style.background = 'blue';
    btnProduct.style.color = '#fff';
}
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProducts(productContainer);

    clearInputs();
})


    function displayProducts(productsList) {
        let tableBody = document.getElementById('productTable');
        tableBody.innerHTML = '';
    
        for (let i = 0; i < productsList.length; i++) {
            let product = productsList[i];
            let row = `
                <tr>
                    <td class="dis">${i}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td class="dis">${product.category}</td>
                    <td class="dis">${product.description}</td>
                    <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning w-75">Update</button></td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger w-75">Delete</button></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        }
    }
     



function clearInputs() {
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDesc.value = '';
}

function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(productContainer));
    displayProducts(productContainer);
}

function searchProducts(term) {
    let searchResults = productContainer.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));
    displayProducts(searchResults);

}
function updateProduct(i)
{
    productName.value = productContainer[i].name;
    productPrice.value = productContainer[i].price;
    productCategory.value = productContainer[i].category;
    productDesc.value = productContainer[i].description;
    btnProduct.innerHTML = 'Update';
    btnProduct.style.background  ='darkorange';
    btnProduct.style.color = 'black';
    proId = i;
    gett();
  
}
function gett()
{
    scroll({
        top:0,
        behavior:"smooth"
    })
}





