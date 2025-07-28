const state = {
    view: {
        gameView: document.querySelector(".main__content2-game"),
    },
    sprites: {
        ship: document.querySelector(".game__ship"),
        shipPosition: 140,
    }
};

function cannonShot() {
    const shoot = document.createElement("div");
    shoot.classList.add("game__ship-shoot");

    shoot.style.left = `${state.sprites.shipPosition + 30}px`;
    shoot.style.bottom = `64px`; 

    state.view.gameView.appendChild(shoot);

    let position = 64;
    const interval = setInterval(() => {
        position += 5;
        shoot.style.bottom = `${position}px`;

        if (position > window.innerHeight) {
            shoot.remove();
            clearInterval(interval);
        }
    }, 30);
}

function moveShip() {
    window.addEventListener("keydown", (e) => {
        if (state.view.gameView.style.display === "flex") {
            if (e.key === "ArrowLeft") {
                state.sprites.shipPosition -= 10;
                if (state.sprites.shipPosition <= -10) {
                    state.sprites.shipPosition = -10;
                }
            } else if (e.key === "ArrowRight") {
                state.sprites.shipPosition += 10;
                if (state.sprites.shipPosition >= 290) {
                    state.sprites.shipPosition = 290;
                }
            }

            state.sprites.ship.style.left = `${state.sprites.shipPosition}px`;
        }
    });
}

function startAutoShoot() {
    setInterval(() => {
        if (state.view.gameView.style.display === "flex") {
            cannonShot();
        }
    }, 1000);
}

function init() {
    moveShip();
    startAutoShoot();
}

init();
