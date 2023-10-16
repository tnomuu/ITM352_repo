//define products_quantities array
let product_quantities = [2,1,3,1,2];

// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

//iterate through product_quantities and print each element in a table
document.write("<table>");
//document.write("<tr><th>Product #</th><th>Quantity</th></tr>");
//lab 8 part 3.2
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");


for (let i=0; i < product_quantities.length; i++) {

    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    //create new row for each product and add hover effect lab 8 part 4.3
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i + 1}</td>
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${extended_cost.toFixed(2)}</td>
    `;
    document.querySelector('table').appendChild(newRow);

    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });

    newRow.addEventListener('mouseout', function () {
        newRow.style.backgroundColor = '';
    });

    newRow.addEventListener('click', function () {
        document.querySelector('table').deleteRow(newRow.rowIndex);
    });
}

//lab 8 part 4.2 but turned 4.3
let addButton = document.createElement('button');
//add content to be displayed on button
addButton.textContent = 'Add New Row';
//add click event listener to execute funtion deleteLastRow
addButton.addEventListener('click', addNewRow);
//append button to document body
document.body.appendChild(addButton);

//lab 8 part 4.1 add a row to completed table with correct number of cells

function addNewRow () {
    let table = document.querySelector('table');

    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
    `;
    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });

    newRow.addEventListener('mouseout', function () {
        newRow.style.backgroundColor = '';
    });

    newRow.addEventListener('click', function () {
        table.deleteRow(newRow.rowIndex);
    });
};

/*
//function to delete last row
function deleteClickedRow() {
    let table = document.querySelector('table');
    let rowCount = table.rows.length; // gives row count for table

    if (rowCount > 1) {
        table.deleteRow(rowCount-1); // deletes last row
    };
}; */