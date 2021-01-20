let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let score = document.getElementById("score");
let music = new Audio('music/elephant.mp3');
let ragerust = new Audio('music/vitaRustRage-1.mp3');
let haha = new Audio('music/haha.mp3');
let fly1 = new Audio('music/Chrapot11.mp3');
let ps1 = new Audio('music/piratesong1.mp3');
let jabadabadu = new Audio('music/jabadabadu.mp3');
let vitasailor = new Audio('music/vitasailor.mp3');
let tossacoin = new Audio('music/tossacoin.mp3');
let dragonborn = new Audio('music/dragonborn.mp3');
let testyzakum = new Audio('music/Testyzakum.mp3');
let drunkensailor = new Audio('music/drunkensailor.mp3');
let jetamhlava = new Audio('music/jetamhlava.mp3');
let ps2 = new Audio('music/ps2.mp3');
let ps3 = new Audio('music/ps3.mp3');
let ps4 = new Audio('music/ps4.mp3');
let vypatlanyrealne = new Audio('music/vypatlanyrealne.mp3');
let uprostredhry = new Audio('music/jsemuprostředhry.mp3');
let ps5 = new Audio('music/ps5.mp3');
let snazilsedostatdovnitr = new Audio('music/snazilsedostat.mp3');
let kid = new Audio('music/kid.mp3');
let ps6 = new Audio('music/ps6.mp3');
let zasedostalhlavu = new Audio('music/zasedostalhlavu.mp3');
let menofmedan = new Audio('music/menofmedan.mp3');
let acomamdelat = new Audio('music/acomamdelat.mp3');
let polak = new Audio('music/polak.mp3');
let wisky = new Audio('music/wisky.mp3');
let gofuck = new Audio('music/gofuck.mp3');
let chillbill = new Audio('music/chill_bill.mp3');
let irishrock = new Audio('music/irishrock.mp3');
let putinwalk = new Audio('music/putinwalk.mp3');
let kdyzreciklujes = new Audio('music/kdyzreciklujes.mp3');
let jumping = 0;
let counter = 0;

/*Pokaždé, když se spustí tato funkce, tak s ní i animace */ 
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*400)+250);
    hole.style.top = random + "px";
    counter++;
    score.innerHTML = "Score : " + counter;
    if(counter==10){
        ps3.play();
    }
    if(counter==20){
        polak.play();
    }
    if(counter==30){
        vitasailor.play();
    }
    if(counter==40){
        tossacoin.play();
    }
    if(counter==50){
        uprostredhry.play();
    }
    if(counter==60){
        dragonborn.play();
    }
    if(counter==70){
        drunkensailor.play();
    }
    if(counter==80){
        jetamhlava.play();
    }
    if(counter==90){
        ps2.play();
    }
    if(counter==100){
        gofuck.play();
    }
    if(counter==110){
        jabadabadu.play();
    }
    if(counter==120){
        ps4.play();
    }
    if(counter==130){
        vypatlanyrealne.play();
    }
    if(counter==140){
        testyzakum.play();
    }
    if(counter==150){
        ps5.play();
    }
    if(counter==160){
        snazilsedostatdovnitr.play();
    }
    if(counter==170){
        kid.play();
    }
    if(counter==180){
        ps6.play();
    }
    if(counter==190){
        zasedostalhlavu.play();
    }
    if(counter==200){
        menofmedan.play();
    }
    if(counter==210){
        acomamdelat.play();
    }
    if(counter==220){
        ps1.play();
    }
    if(counter==230){
        putinwalk.play();
    }
    if(counter==240){
        irishrock.play();
    }
    if(counter==250){
        kdyreciklujes.play();
    }
    if(counter==260){
        wisky.play();
    }
    if(counter==270){
        chillbill.play();
    }
});

setInterval(function(){
    let characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }else{
        audio();
    }
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
}

function fly(){
    fly1.volume = 0.5;
    fly1.currentTime = 3;
    fly1.play();
}

function audio2(){
    ragerust.currentTime = 0;
    ragerust.play();
    haha.currentTime = 0;
    haha.play();
    ps1.currentTime = 0;
    ps1.play();
    jabadabadu.currentTime = 0;
    jabadabadu.play();
    vitasailor.currentTime = 0;
    vitasailor.play();
    tossacoin.currentTime = 0;
    tossacoin.play();
    dragonborn.currentTime = 0;
    dragonborn.play();
    testyzakum.currentTime = 0;
    testyzakum.play();
    drunkensailor.currentTime = 0;
    drunkensailor.play();
    jetamhlava.currentTime = 0;
    jetamhlava.play();
    ps2.currentTime = 0;
    ps2.play();
    ps3.currentTime = 0;
    ps3.play();
    ps4.currentTime = 0;
    ps4.play();
    vypatlanyrealne.currentTime = 0;
    vypatlanyrealne.play();
    uprostredhry.currentTime = 0;
    uprostredhry.play();
    ps5.currentTime = 0;
    ps5.play();
    snazilsedostatdovnitr.currentTime = 0;
    snazilsedostatdovnitr.play();
    kid.currentTime = 0;
    kid.play();
    ps6.currentTime = 0;
    ps6.play();
    zasedostalhlavu.currentTime = 0;
    zasedostalhlavu.play();
    menofmedan.currentTime = 0;
    menofmedan.play();
    acomamdelat.currentTime = 0;
    acomamdelat.play();
    polak.currentTime = 0;
    polak.play();
    kdyzreciklujes.currentTime = 0;
    kdyzreciklujes.play();
    irishrock.currentTime = 0;
    irishrock.play();
    gofuck.currentTime = 0;
    gofuck.play(); 
    wisky.currentTime = 0;
    wisky.play();
    chillbill.currentTime = 0;
    chillbill.play(); 
    putinwalk.currentTime = 0;
    putinwalk.play();
}

