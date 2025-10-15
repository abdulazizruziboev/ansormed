themeBody = document.querySelector("html");
navDisplay = document.getElementById("navBar");
loader = document.getElementById("loader");
moreMenu = document.getElementById("moreMenu");

function themeButton(e) {
    if(e.checked) {
        themeBody.classList.remove("light")
        themeBody.classList.add("dark")
    } else {
        themeBody.classList.remove("dark")
        themeBody.classList.add("light")
    }
}

function navToggler(){
    navDisplay.classList.add("show");
}

function navCloser(){
    navDisplay.classList.remove("show");
}

window.addEventListener("load", ()=> {
    loader.style.display = "none";
});

function moreMenuFn(e) {
    if (e.checked){
        moreMenu.classList.add("show");
    } else {
        moreMenu.classList.remove("show");
    }
}