// hide-show nav bar
var navMenu = document.querySelector(".nav-menu");
function showNavMenu(){
navMenu.classList.toggle("nav-menu-hide");
console.log('done')
}

function hideNavMenu(){
navMenu.classList.remove("nav-menu-hide");
console.log('done')
}

// switch theme btn
var themeSwitch = document.getElementById("theme-switch");

themeSwitch.onclick= function(){
    themeSwitch.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme","light")
    }else{
        localStorage.setItem("theme","dark")
    }
}

if(localStorage.getItem("theme") == "dark"){
    themeSwitch.classList.add("dark-mode");
    document.body.classList.add("dark-theme");
}else{
    themeSwitch.classList.remove("dark-mode");
    document.body.classList.remove("dark-theme");
}



