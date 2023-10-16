/* Invoice about procucts with their respective prices and quantities */

//lab 8 part 2.1
let product_quantities = [2,1,3,1,2];

//lab 8 part 2.2
//alert("The size of the products array is: "+product_quantities.length)

//lab 8 part 2.3
product_quantities.push(3);
product_quantities.pop();

// Product Data 1
let item1 = 'Whey Protein Powder - Oreo Cookies n Cream';
let quantity1 = product_quantities[0];
let price1 = 40;

//Prodct 2
let item2 = 'Whey Protein Powder - Cinnamon Toast Crunch';
let quantity2 = product_quantities[1];
let price2 = 40;

//Prodct 3
let item3 = 'Whey Protein Powder - Vaifala';
let quantity3 = product_quantities[2];
let price3 = 40;

//Prodct 4
let item4 = 'RAW Gear - Creatine';
let quantity4 = product_quantities[3];
let price4 = 30;

//Prodct 5
let item5 = 'BuckedUp - Pre';
let quantity5 = product_quantities[4];
let price5 = 30;

//lab 8 part 1.1
let product1 = {
    itemName: 'iPhone 12',
    quantity: product_quantities[0],
    price: 247.95
};

//lab 8 part 1.4
product1["SKU#"]=1234;
delete product1["SKU#"];

//lab 8 part 1.3
//product1.quantity = 3;

//lab 8 part 1.2
let extended_price1 = product1.quantity * product1.price;

//Compute extended prices
//let extended_price1 = quantity1 * price1;
let extended_price2 = quantity2 * price2;
let extended_price3 = quantity3 * price3;
let extended_price4 = quantity4 * price4;
let extended_price5 = quantity5 * price5;

//Calculate subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

//Calculate sales tax
let tax_rate = 0.0575;
let tax = subtotal * tax_rate

//Calculate grand total
let total = subtotal + tax;

//Show table in HTML to DOM
let invoiceTable = document.getElementById('invoiceTable');

// item row 1
let row = invoiceTable.insertRow();
//lab 8 1.2, changed item1 to product1.item and etc...
row.insertCell().innerHTML = product1.itemName; 
row.insertCell().innerHTML = product1.quantity;
row.insertCell().innerHTML = product1.price;
row.insertCell().innerHTML = extended_price1.toFixed(2);

// item row 2
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item2; 
row.insertCell().innerHTML = quantity2;
row.insertCell().innerHTML = price2.toFixed(2);
row.insertCell().innerHTML = extended_price2;

// item row 3
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item3; 
row.insertCell().innerHTML = quantity3;
row.insertCell().innerHTML = price3.toFixed(2);
row.insertCell().innerHTML = extended_price3;

// item row 4
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item4; 
row.insertCell().innerHTML = quantity4;
row.insertCell().innerHTML = price4.toFixed(2);
row.insertCell().innerHTML = extended_price4;

// item row 5
row = invoiceTable.insertRow();
row.insertCell().innerHTML = item5; 
row.insertCell().innerHTML = quantity5;
row.insertCell().innerHTML = price5.toFixed(2);
row.insertCell().innerHTML = extended_price5;

//Set subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);