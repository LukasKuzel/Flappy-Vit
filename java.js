let block = document.getElementById("block")
let hole = document.getElementById("hole")
let character = document.getElementById("character")
let music = new Audio('music/elephant.mp3');
let ragerust = new Audio('music/vitaRustRage-1.mp3');
let haha = new Audio('music/haha.mp3')
let fly = new Audio('music/Chrapot11.mp3')
let jumping = 0;
let counter = 0;

/*Pokaždé, když se spustí tato funkce, tak s ní i animace */ 
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*400)+250);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function(){
    let characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }else{
        music.play();
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(700-characterTop);
    if((characterTop>680)||((blockLeft<61)&&(blockLeft>-150)&&((cTop-10<holeTop)||(cTop>holeTop+175)))){
            music.pause();
        if(counter<3){
            ragerust.play();
        }
        if((counter>=70)&&(counter<=100)){
            haha.play();
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
    fly.play();
}

function audio(){
        music.volume = 0.3
        music.play();
}

function audio2(){
    ragerust.volume = 0.2
    ragerust.currentTime = 0;
    ragerust.play();
    haha.volume = 0.5
    haha.currentTime = 0;
    haha.play();
    fly.volume = 0.5
    fly.currentTime = 3;
    fly.play();
}



/*

function audio3(){
    
}

function audio4(){
    
}
*/