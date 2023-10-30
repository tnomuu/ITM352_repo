/* Invoice about procucts with their respective prices and quantities */

// Product Data 1
let item1 = 'Whey Protein Powder - Oreo Cookies n Cream';
let quantity1 = 2;
let price1 = 40;

//Prodct 2
let item2 = 'Whey Protein Powder - Cinnamon Toast Crunch';
let quantity2 = 1;
let price2 = 40;

//Prodct 3
let item3 = 'Whey Protein Powder - Vaifala';
let quantity3 = 3;
let price3 = 40;

//Prodct 2
let item4 = 'RAW Gear - Creatine';
let quantity4 = 1;
let price4 = 30;

//Prodct 2
let item5 = 'BuckedUp - Pre';
let quantity5 = 2;
let price5 = 30;

//Compute extended prices
let extended_price1 = quantity1 * price1;
let extended_price2 = quantity2 * price2;
let extended_price3 = quantity3 * price3;
let extended_price4 = quantity4 * price4;
let extended_price5 = quantity5 * price5;

//Calculate subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

//Calculate sales tax
let tax_rate = 0.0575;
let tax = subtotal * tax_rate

//Calculate shipping
let shipping = 0
if (subtotal <= 50) {
    shipping=2;
} else if (subtotal <= 100) {
    shipping=5;
} else {
    shipping= 0.05*subtotal; //5% of subtotal
}

//Calculate grand total
let total = subtotal + tax + shipping;

//Show table in HTML to DOM
let invoiceTable = document.getElementById('invoiceTable');

// item row 1
let row = invoiceTable.insertRow();
row.insertCell().innerHTML = item1; 
row.insertCell().innerHTML = quantity1;
row.insertCell().innerHTML = price1.toFixed(2);
row.insertCell().innerHTML = extended_price1;

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

//Set subtotal, tax, shipping, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shipping.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);