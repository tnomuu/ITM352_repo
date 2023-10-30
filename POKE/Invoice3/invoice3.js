/* Invoice about procucts with their respective prices and quantities */

// import data from products_data.js
import { itemData, quantity } from './products_data.js'; 

//initialize varibales for subtotal, tax, shipping, and total
let subtotal = 0;
let tax_rate = 0.0575;
let tax = 0;
let total = 0;
let shipping = 0; 

/*Compute extended prices
let extendedPrices = [];
let subtotal = 0
for (let i=0; i < itemData.length; i++) {
    let itemQuantity = quantity[itemData[i].quantityIndex];
    let extendedPrice = itemData[i].price * itemQuantity;
    subtotal += extendedPrice;
    extendedPrices.push(extendedPrice);
} 

//Calculate sales tax
let tax_rate = 0.0575;
let tax = subtotal * tax_rate
*/

//Calculate shipping
//let shipping = 0

generateItemRows();

if (subtotal <= 50) {
    shipping=2;
} else if (subtotal <= 100) {
    shipping=5;
} else {
    shipping= 0.05*subtotal; //5% of subtotal
}

//Calculate tax and grand total including shipping
tax = subtotal * tax_rate;
total = subtotal + tax + shipping;

//Set subtotal, tax, shipping, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shipping.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);

/* quantity validation from bing
    switch (true) {
        case isNaN(quantity):
          console.log("Quantity is not a number.");
          break;
        case quantity < 0 && Number.isInteger(quantity):
          console.log("Quantity is a negative integer.");
          break;
        case quantity < 0 && !Number.isInteger(quantity):
          console.log("Quantity is negative and not an integer.");
          break;
        case quantity >= 0 && !Number.isInteger(quantity):
          console.log("Quantity is not an integer.");
          break;
        default:
          console.log("");
      } */

//quantity validation
function validateQuantity(quantity) {
    if (isNaN(quantity)) {
        return "Not a number";
    } else if (quantity < 0 && !Number.isInteger(quantity)) {
        return "Negative inventory and not an Integer";
    } else if (quantity < 0) {
        return "Negative inventory";
    } else if (!Number.isInteger(quantity)) {
        return "Not an Integer";
    } else {
        return ""; // No errors
    }
}

// Function to generate item rows and apply quantity validation
function generateItemRows() {
    // Get the table element to populate
    let table = document.getElementById('invoiceTable');
  
    // Clear the table content
    table.innerHTML = '';
  
    // Initialize variable to keep track of errors
    let hasErrors = false;
  
    // Loop through the itemData and quantity arrays
    for (let i = 0; i < itemData.length; i++) {
      let item = itemData[i];
      let itemQuantity = quantity[item.quantityIndex];
  
      // Validate the quantity
      let validationMessage = validateQuantity(itemQuantity);
  
      // If there are validation errors, display the item with an error message
      if (validationMessage !== "") {
        hasErrors = true;
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = validationMessage;
      } else if (itemQuantity > 0) {
        // Calculate the extended price if quantity is valid and positive
        let extendedPrice = item.price * itemQuantity;
        subtotal += extendedPrice;
  
        // Display the item with the calculated extended price
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = itemQuantity;
        row.insertCell(2).innerHTML = '$' + item.price.toFixed(2);
        row.insertCell(3).innerHTML = '$' + extendedPrice.toFixed(2);
      }
    }
  
    // If there are no errors, display the total
    if (!hasErrors) {
      document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
    }
}