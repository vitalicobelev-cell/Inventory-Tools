/* =========================================================
   Inventory Tools
   app.js
========================================================= */

const splash = document.getElementById("splash");
const menu = document.getElementById("menu");
const quote = document.getElementById("quote");

/* =========================================================
   СЛУЧАЙНАЯ ФРАЗА
========================================================= */

function showRandomQuote() {

    const random =
        Math.floor(Math.random() * QUOTES.length);

    quote.textContent = QUOTES[random];

}

/* =========================================================
   ЗАПУСК
========================================================= */

window.addEventListener("load", function () {

    showRandomQuote();

    setTimeout(function () {

        splash.classList.add("hidden");
        menu.classList.remove("hidden");

    }, 2000);

});



/* =========================================================
   ПЕРЕХОДЫ МЕНЮ
========================================================= */

const menuButtons = document.querySelectorAll(".menuButton");

const menu = document.getElementById("menu");

const page = document.getElementById("page");

menuButtons.forEach(function(button){

    button.addEventListener("click", function(){

        menu.style.display = "none";

        page.classList.remove("hidden");

      openSyrups();

openTea();

openLiquids();

    });

});
