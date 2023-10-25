//define variable 
let attributes  =  "<name>;<age>;<age + 0.5>;<0.5 - age>" ;

console.log(typeof attributes);

//split string into parts using ;
let pieces = attributes.split(";");

//loop for parts
for (let i = 0; i<pieces.length; i++) {
    console.log(`${pieces[i]} is type ${typeof pieces[i]}`);
}

console.log(pieces.join(','));

//lab9 ex4a
function isNonNegInt(q) {
    let errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    return (errors.length == 0)
}

for (let i = 0; i < pieces.length; i++) {
    let isValid = isNonNegInt(pieces[i]);
    console.log(`Element "${pieces[i]}" is a non-negative integer: ${isValid}`);
}