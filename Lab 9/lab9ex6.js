// Define the attributes string
let attributes = "Trent; 21; 21.5; -20.5";

// Split the attributes string into an array of parts using ";" as the separator
let pieces = attributes.split(";");

/**
 * Validates whether a string represents a non-negative integer.
 *
 * @param {string} input - The input string to validate.
 * @param {boolean} returnErrors - (Optional) When true, returns an array of errors; otherwise, returns a boolean.
 * @returns {boolean|array} - Returns true if the input is a non-negative integer, or an array of errors if returnErrors is true.
 */

function isPosInt(input, returnErrors = false) {
  let errors = [];

  if (Number(input) != input) errors.push('Not a number!');
  if (input < 0) errors.push('Negative value!');
  if (parseInt(input) != input) errors.push('Not an integer!');

  return returnErrors ? errors : (errors.length == 0);
}

/* pieces.forEeach((item,index) => {
    console.log(`part ${index} is ${(isPosInt(item) ? 'a' : 'not a')} quantity`);
});*/

/* checkIt function
function checkIt(item, index) {
    console.log(`part ${index} is ${(isPosInt(item) ? 'a' : 'not a')} quantity`);
}

// callback function
pieces.forEach(checkIt); */

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
        callback(picture_data);
    }, 3* 1000);
    
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';
download(url, process);