const state = {
    view: {
        gameView: document.querySelector(".main__content2-game"),
    },
    sprites: {
        ship: document.querySelector(".game__ship"),
        shipPosition: 140,
    }
}

function moveShip(){
    window.addEventListener("keydown", (e) => {
        if(state.view.gameView.style.display === "flex"){
            if(e.key==="ArrowLeft"){
                state.sprites.shipPosition -= 10;
                if(state.sprites.shipPosition <= -10){
                    state.sprites.shipPosition = -10;
                }
            }else if(e.key==="ArrowRight"){
                state.sprites.shipPosition += 10;
                if(state.sprites.shipPosition >= 290){
                    state.sprites.shipPosition = 290;
                }      
            }
        }
        state.sprites.ship.style.left = state.sprites.shipPosition + "px";
        console.log(state.sprites.shipPosition)
        
    })
}


function init () {
    moveShip();
}

init();