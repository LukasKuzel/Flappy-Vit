let block = document.getElementById("block")
let hole = document.getElementById("hole")

/*Pokaždé, když se spustí tato funkce, tak s ní i animace */ 
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*400)+200);
    hole.style.top = random + "px";
});


