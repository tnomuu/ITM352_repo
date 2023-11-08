//order.js for lab 12 (part 6)

//check URL for any error parameters and quantity and display/use them 
    let params = (new URL(document.location)).searchParams;
    let q = Number(params.get('quantity'));
    let error = params.get('error');

//if error, alert the user
    if (error) {
        alert (error)
    }

//select div where product details should be displayed 
    let productDetailsDiv = document.getElementById('productDetails');
//display first product's details
    productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

//select div where the product list will be deployed
    let productListDiv=document.getElementById('productList');
//iterate through the products and display their sold counts
    for (let i in products) {
        productListDiv.innerHTML +=`<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold!</h4>`;
    }