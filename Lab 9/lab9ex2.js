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