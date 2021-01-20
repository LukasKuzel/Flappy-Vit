let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let score = document.getElementById("score");
let music = new Audio('music/elephant.mp3');
let ragerust = new Audio('music/vitaRustRage-1.mp3');
let fly1 = new Audio('music/Chrapot11.mp3');
let jumping = 0;
let counter = 0;
let MusicPole = ['music/haha.mp3', 'music/piratesong1.mp3', 'music/jabadabadu.mp3', 'music/vitasailor.mp3', 'music/tossacoin.mp3', 
'music/dragonborn.mp3', 'music/Testyzakum.mp3', 'music/drunkensailor.mp3', 'music/jetamhlava.mp3', 'music/ps2.mp3', 'music/ps3.mp3', 
'music/ps4.mp3', 'music/vypatlanyrealne.mp3', 'music/jsemuprostředhry.mp3', 'music/ps5.mp3', 'music/snazilsedostat.mp3', 
'music/kid.mp3', 'music/ps6.mp3', 'music/zasedostalhlavu.mp3', 'music/menofmedan.mp3', 'music/acomamdelat.mp3', 'music/polak.mp3', 
'music/wisky.mp3', 'music/gofuck.mp3', 'music/chill_bill.mp3', 'music/irishrock.mp3', 'music/putinwalk.mp3', 'music/kdyzreciklujes.mp3'];
let audioPole = new Audio ();

/*Pokaždé, když se spustí tato funkce, tak s ní i animace */ 
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*400)+250);
    hole.style.top = random + "px";
    counter++;
    score.innerHTML = "Score : " + counter;
    let musicrandom = Math.floor(Math.random()*MusicPole.length);
    for(let i = 0; i < 1000; i+=10){
        if(i==counter){
        audioPole.src = MusicPole[musicrandom];
        audioPole.play();
        }
    }
});

setInterval(function(){
    let characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }/*else{
        audio();
    }*/
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(700-characterTop);
    if((characterTop>680)||((blockLeft<61)&&(blockLeft>-150)&&((cTop-10<holeTop)||(cTop>holeTop+175)))){
            music.pause();
        if(counter<3){
            ragerust.play();
        }
        if (confirm("Game is over. Score: "+counter+" Try again?")) {
            location.reload();
          } else {
            alert ("Thanks for playing.");
            close();
          }          
        character.style.top = 100 + "px";  
        counter=0;
    }
},10)

function jump(){  
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(counter<1000)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;   
    },10);  
    fly();
}

function audio(){
        music.volume = 0.06;
        music.play();
        ragerust.currentTime = 0;
        ragerust.play();
}

function fly(){
    fly1.volume = 0.5;
    fly1.currentTime = 3;
    fly1.play();
}


function click1(){
    if(document.getElementById('hudba').checked==true){
        music.volume = 0.06;
        music.play();
    }
    else{
        music.pause();       
    music.currentTime = 0;
    }
}

document.body.addEventListener('keydown', function(event) {
    event.preventDefault();
    if(event.keyCode===32){
        jump();
    }
});
