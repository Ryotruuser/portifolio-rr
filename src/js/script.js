const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const menuLinksMobile = document.querySelectorAll(".menu__item .menu__link");

const fakeBtn = document.querySelector(".play-fake-btn");
const gameDiv = document.querySelector(".main__content2-game");

menuLinksMobile.forEach((link)=>{
    link.addEventListener("click", () => {
        menuLinksMobile.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    });
})

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark"){
        rootHtml.setAttribute("data-theme", "light");
    }else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    toggleTheme.classList.toggle("bi-brightness-high");
    toggleTheme.classList.toggle("bi-moon-stars");
    
    console.log(currentTheme);

}

function gameExec(){
    gameDiv.style.display = "block";
}

toggleTheme.addEventListener("click", changeTheme);


fakeBtn.addEventListener("click", gameExec);


