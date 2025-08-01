const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const menuLinksMobile = document.querySelectorAll(".menu__item .menu__link");

const fakeBtn = document.querySelector(".play-fake-btn");
const gameDiv = document.querySelector(".main__content2-game");
const videoDiv = document.querySelector(".main__content2");
const videoApresentacao = document.querySelector(".video__apresentacao");

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
    let videoHeight = window.innerWidth;
    if(videoHeight >= 768){
        videoDiv.style.height = "auto";
    }else{
        videoDiv.style.height = "500px";
    }
    window.addEventListener("resize", ()=>{
        const width = window.innerWidth;
        if(width >= 768){
            videoDiv.style.height = "auto";
        }else{
            videoDiv.style.height = "500px";
        }
    })
    gameDiv.style.display = "flex";
    videoApresentacao.style.zIndex = "-1";
    fakeBtn.style.zIndex = "-1"
}

toggleTheme.addEventListener("click", changeTheme);

fakeBtn.addEventListener("click", gameExec);


