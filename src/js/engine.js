const state = {
    view: {
        gameView: document.querySelector(".main__content2-game"),
        fakeBtn: document.querySelector(".play-fake-btn"),
        videoDiv: document.querySelector(".main__content2"), 
        videoApresent: document.querySelector(".video__apresentacao"),
    },
    sprites: {
        ship: document.querySelector(".game__ship"),
    }
};

let shipPosition = 140;
let colCont = 0;
let enemyHealthBar = 150;



function shipCenter(){
    const shipRect = state.sprites.ship.getBoundingClientRect();
    const gameRect = state.view.gameView.getBoundingClientRect();
    return shipRect.left - gameRect.left + (shipRect.width / 2);
}

function cannonShot() {
    const shoot = document.createElement("div");
    shoot.classList.add("game__ship-shoot");

    const shipCenterX = shipCenter();

    shoot.style.left = `${shipCenterX - 2}px`;
    shoot.style.bottom = `64px`; 

    state.view.gameView.appendChild(shoot);

    let position = 64;
    const move = setInterval(() => {
        position += 5;
        shoot.style.bottom = `${position}px`;
        verifyCollision(shoot, move);

        if (position > window.innerHeight) {
            shoot.remove();
            clearInterval(move);
        }
    }, 30);
}

function moveShip() {
    window.addEventListener("keydown", (e) => {
        if (state.view.gameView.style.display === "flex") {
            if (e.key === "ArrowLeft") {
                shipPosition -= 10;
                if (shipPosition <= -10) {
                    shipPosition = -10;
                }
            } else if (e.key === "ArrowRight") {
                shipPosition += 10;
                if (shipPosition >= 290) {
                    shipPosition = 290;
                }
            }

            state.sprites.ship.style.left = `${shipPosition}px`;
        }
    });
}

function verifyCollision(bullet, move){
    const enemies = document.querySelectorAll(".game__enemy");
    let bulletRect = bullet.getBoundingClientRect();
    let points = document.querySelector("#game__points");
    let enemyHealth = document.querySelector(".enemy__health-bar")
    
    enemies.forEach((enemy)=>{
        let enemyRect = enemy.getBoundingClientRect();

        let colisaoVertical = bulletRect.top <= enemyRect.bottom && bulletRect.bottom >= enemyRect.top;
        let colisaoHorizontal = bulletRect.left <= enemyRect.right && bulletRect.right >= enemyRect.left;

        if (colisaoVertical && colisaoHorizontal) {
            
            bullet.remove();
            clearInterval(move);
            colCont++
            enemyHealthBar -= 10;
            let enemyWidth = enemy.getBoundingClientRect().width
            const newLeft = Math.floor(Math.random() * (window.innerWidth - enemyWidth));
            enemy.style.left = newLeft + "px";
            enemyHealth.style.width = enemyHealthBar + "px";

            if(enemyHealthBar <= 0){
                gameClose();
            }
        }


        points.innerHTML = colCont;
        
        
    });
}

function startAutoShoot() {
    setInterval(() => {
        if (state.view.gameView.style.display === "flex") {
            cannonShot();
        }
    }, 100);
}

function init() {
    moveShip();
    startAutoShoot();
}


function gameClose(){
    let winner = `<div><h2>Obrigado por jogar</h2><h4>você marcou ${colCont} pontos.</h4> <button onclick="window.load()">Voltar<button></div>`;
    state.view.gameView.innerHTML = winner;

}

init();


