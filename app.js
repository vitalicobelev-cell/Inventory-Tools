/* =========================================================
   Inventory Tools
   app.js
========================================================= */

/* =========================================================
   ЭЛЕМЕНТЫ
========================================================= */

const menu = document.getElementById("menu");
const page = document.getElementById("page");

const quote = document.getElementById("quote");

const breadcrumbs = document.getElementById("breadcrumbs");
const pageContent = document.getElementById("pageContent");

const backButton = document.getElementById("backButton");

const menuButtons = document.querySelectorAll(".menuButton");

/* =========================================================
   СЛУЧАЙНАЯ ФРАЗА
========================================================= */

function showRandomQuote(){

    const random = Math.floor(Math.random() * QUOTES.length);

    quote.textContent = QUOTES[random];

}

/* =========================================================
   ОТКРЫТЬ СТРАНИЦУ
========================================================= */

function openPage(title){

    menu.style.display = "none";

    page.classList.remove("hidden");

    

   


    switch(title){

        case "🧋 Сиропы":

            openSyrups();

            break;

        default:

            pageContent.innerHTML =
                "<h2 style='text-align:center;color:#6EB8FF;margin-top:40px;'>" +
                title +
                "</h2>";

    }

}

/* =========================================================
   НАЗАД
========================================================= */

function goHome(){

    page.classList.add("hidden");

    menu.style.display = "block";

    breadcrumbs.innerHTML = "";

    pageContent.innerHTML = "";

}

/* =========================================================
   КНОПКИ МЕНЮ
========================================================= */

menuButtons.forEach(function(button){

    button.addEventListener("click", function(){

        openPage(button.textContent.trim());

    });

});

/* =========================================================
   КНОПКА НАЗАД
========================================================= */

backButton.addEventListener("click", goHome);

/* =========================================================
   ЛОГОТИП
========================================================= */



/* =========================================================
   ПЕРВЫЙ ЗАПУСК
========================================================= */

window.addEventListener("load", function(){

    showRandomQuote();

    page.classList.add("hidden");

    menu.style.display = "block";

});
