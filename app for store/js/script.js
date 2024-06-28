// import all Form's

let searchForm = document.querySelector(".search-form");

let cartForm = document.querySelector(".cart-form");

let loginForm =document.querySelector(".login-form");

let menuForm = document.querySelector(".navbar");

// import all Form's






// Form Active Function

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");    
    cartForm.classList.remove("active");
    menuForm.classList.remove("active");
    loginForm.classList.remove("active");
}

document.querySelector("#cart-btn").onclick = () => {
    cartForm.classList.toggle("active");    
    searchForm.classList.remove("active");
    menuForm.classList.remove("active");
    loginForm.classList.remove("active");
}

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");   
    searchForm.classList.remove("active");
    cartForm.classList.remove("active");
    menuForm.classList.remove("active");

}

document.querySelector("#menu-btn").onclick = () => {
    menuForm.classList.toggle("active");
    searchForm.classList.remove("active");
    cartForm.classList.remove("active");
    loginForm.classList.remove("active");
    
}

// Form Active Function




// Window Scroll Remove Form Code

window.onscroll = () => {
    searchForm.classList.remove("active");
    cartForm.classList.remove("active");
    loginForm.classList.remove("active");
    menuForm.classList.remove("active");

}

// Window Scroll Remove Form Code


