
const button = document.querySelector("button");

button.addEventListener("click", function(){



let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;

console.log(x);
console.log(y);

if (x > y) {
    document.getElementById("esito").innerHTML= "WIN PLAYER 1"
} else if ( x < y) {
    document.getElementById("esito").innerHTML= "WIN PLAYER 2"
} else {
    document.getElementById("esito").innerHTML= "DRAW"
};

 document.getElementById("firstplayer").innerHTML += x ;
 document.getElementById("secondplayer").innerHTML += y ;
})
