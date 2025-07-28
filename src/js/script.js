const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const menuLinksMobile = document.querySelectorAll(".menu__item .menu__link");

const fakeBtn = document.querySelector(".play-fake-btn");

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
    console.log("Clickou");
}

toggleTheme.addEventListener("click", changeTheme);


fakeBtn.addEventListener("click", gameExec);


