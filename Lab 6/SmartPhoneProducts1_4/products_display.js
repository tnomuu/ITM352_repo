//define store name and push to DOM
const store_name="Trent Nomura";
let first_name="Trent"
let last_name="Nomura"


document.write('<b>' + first_name + '<b>' + '<i>' + last_name + '<i>')

//top title
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
 
//bottom title
bottom_title.innerHTML=("Your One Stop Shop For Used Phones - "+store_name+"'s");


function changeClassName(element) {
    element.className = 'item rotate';
}
function resetClassName(element) {
    element.className = 'item';
}



let hits=0;
let spins=1;
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;