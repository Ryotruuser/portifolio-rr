const state = {
    view: {
        gameView: document.querySelector(".main__content2-game"),
    },
    sprites: {
        ship: document.querySelector(".game__ship"),
        shipPosition: 140,
        cannon: document.querySelector(".game__ship-canon"),
        cannonPosition: 170,
        shootPosition: 0,
    }
}

function cannonShot(){
    let shoot = document.createElement("li");
    shoot.classList.add("game__ship-shoot");
    state.sprites.cannon.appendChild(shoot);
}

function moveShip(){
    window.addEventListener("keydown", (e) => {
        if(state.view.gameView.style.display === "flex"){
            if(e.key==="ArrowLeft"){
                state.sprites.shipPosition -= 10;
                state.sprites.cannonPosition -= 10;
                setInterval(cannonShot(), 20);
                if(state.sprites.shipPosition <= -10){
                    state.sprites.shipPosition = -10;
                    state.sprites.cannonPosition = 20;
                    state.sprites.cannon.innerHTML = "";
                }
            }else if(e.key==="ArrowRight"){
                state.sprites.shipPosition += 10;
                state.sprites.cannonPosition +=10;
                setInterval(cannonShot(), 20);
                if(state.sprites.shipPosition >= 290){
                    state.sprites.shipPosition = 290;
                    state.sprites.cannonPosition = 320;
                    state.sprites.cannon.innerHTML = "";
                }      
            }
        }
        
        state.sprites.ship.style.left = state.sprites.shipPosition + "px";
        state.sprites.cannon.style.left = state.sprites.cannonPosition + "px"; 
    })
}


function init () {
    moveShip();
    
}

init();