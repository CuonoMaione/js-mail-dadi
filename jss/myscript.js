
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

 document.getElementById("firstplayer").innerHTML = "Player 1 = " + x ;
 document.getElementById("secondplayer").innerHTML = "Player 2 = " + y ;


})

const buttonmail = document.getElementById("buttonmail");
const mail = ["gigio@hotmail.it" , "simone@outlook.it" , "antonio@gmail.com"] ;


buttonmail.addEventListener("click", function(){

    let Usermail = document.getElementById("User");
   
    let mailfound = false;

    for (let i = 0; i < mail.length ; i++) {
        
        if(mail[i] == Usermail.value){
            mailfound= true;
        }
    
    }

    if ( mailfound ) {
        document.getElementById("prova").innerHTML = "GIUSTO"
    } else {
        document.getElementById("prova").innerHTML = "FALSO"
    }
}
)






