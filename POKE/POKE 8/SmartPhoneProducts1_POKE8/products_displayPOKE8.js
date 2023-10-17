//define store name and push to DOM
const store_name="Trent Nomura";
let first_name="Trent"
let last_name="Nomura"

//name to h1 tags
top_title1.innerHTML=('<b>' + first_name + '<b>' + '<i>' + last_name + '<i>')

//top title to h2 tags 
top_title2.innerHTML=(store_name + "'s Used Smart Phone Store");
 
//bottom title to footer tags
bottom_title.innerHTML=("Your One Stop Shop For Used Phones - "+store_name+"'s");

//initialize hits and spins and send to the DOM
let hits=0;
let spins=1;
//let wins;
let over_half=false
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;

//code for POKE 8
     let name1 = "HTC";
     let price1 = 40.00;
     let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

     let name2 = "Apple";
     let price2 = 75.00;
     let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

     let name3 = "Nokia";
     let price3 = 35.00;
     let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

     let name4 = "Samsung";
     let price4 = 45.00;
     let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

     let name5 = "Blackberry";
     let price5 = 10.00;
     let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

    for (let i=1; eval("typeof name"+i) != 'undefined'; i++) {
        document.querySelector('.main').innerHTML += `
        <section class="item" onmouseover="changeClassName(this);" 
        onclick="resetClassName(this);">
            <h2>${eval("name"+i)}</h2>
            <p2>${eval("price"+i)}</p2>
            <img src="${eval("image"+i)}"/>
        </section>`;
    }

//two functions that change item name to rotate (onmouseover) and to stop (onmouseclick), updates hits and spins count also calculating the hits/spins ratio, sending both to DOM
function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1;
        element.className = 'item rotate';
    }

    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true
    } else {
        //wins=false
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML=spins;
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);
    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress;
    /*if ( hits_spins_ratio > 0 ) {
        progress = 'On your way!';
        if ( hits_spins_ratio >= 0.25 ) {
            progress = 'Almost there!';
            if ( hits_spins_ratio >= 0.5 ) {
                if( hits < spins) { 
                    progress = 'You win!';
                }
            }   
        }
    }
    else {
        progress = 'Get going!' ;
    }
    // code from class
    if (hits_spins_ratio >= 0.5 && hits<spins) {
        progress='You win!';
    } else if (hits_spins_ratio >= 0.25) {
        progress='Almost there!';
    } else if (hits_spins_ratio > 0) {
        progress='On your way!';
    } else {
        progress='Get going!';
    }*/

    // code from Bing
    if ( hits_spins_ratio >= 0.5 && hits < spins) {
        progress = 'You win!';
    } else if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
    } else if ( hits_spins_ratio > 0) { 
        progress = 'On your way!';
    } else {
        progress = 'Get going!' ;
    }
    win_span.innerHTML=progress;
}
    function resetClassName(element) {
    if(element.className=='item rotate'){
        hits=hits+1;
        element.className = 'item';
    } else {
        changeClassName(element);
    }

    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true
    } else {
        //wins=false
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    hits_span.innerHTML=hits;
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);
    // -- Winning progress depends on hits/spins
    let hits_spins_ratio = hits/spins;
    let progress;
    /*if ( hits_spins_ratio > 0 ) {
        progress = 'On your way!';
        if ( hits_spins_ratio >= 0.25 ) {
            progress = 'Almost there!';
            if ( hits_spins_ratio >= 0.5 ) {
                if( hits < spins) { 
                    progress = 'You win!';
                }
            }   
        }
    }
    else {
        progress = 'Get going!' ;
    }
    // code from class
    if (hits_spins_ratio >= 0.5 && hits<spins) {
        progress='You win!';
    } else if (hits_spins_ratio >= 0.25) {
        progress='Almost there!';
    } else if (hits_spins_ratio > 0) {
        progress='On your way!';
    } else {
        progress='Get going!';
    }*/

    // code from Bing
    if ( hits_spins_ratio >= 0.5 && hits < spins) {
        progress = 'You win!';
    } else if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
    } else if ( hits_spins_ratio > 0) { 
        progress = 'On your way!';
    } else {
        progress = 'Get going!' ;
    }
    win_span.innerHTML=progress;
} 


//table that displays name of store, my name, current date and time
        let line=1;
        now = new Date (); 
        year = now.getFullYear();
        hours = now.getHours();
        minutes = now.getMinutes();
        ampm = (hours < 12)?'AM':'PM';
        hours = (hours + 11) % 12+1;
    document.write(`
        <table border="1" style="margin-left: auto; margin-right: auto; text-align: center;">
        <tr><th colspan="2"><h1>Your One Stop For Used Phones - ${first_name[0]}.${last_name[0]}'s</h1></th></tr>
        <tr><td>1.</td><td><br />Copyright @ ${first_name + '' + last_name}</td></tr>
        <tr><td>2.</td><td>${now.getFullYear()}</td></tr>
        <tr><td>3.</td><td>${hours}:${minutes}${ampm}</td></tr>
        </table>
    `);