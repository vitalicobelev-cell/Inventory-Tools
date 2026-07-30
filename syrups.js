/* =========================================================
   НАСТРОЙКИ
========================================================= */

const SETTINGS = {

    density: 1300,
    decimals: 3,
    pumpWeight: 35

};

/* =========================================================
   ПОМПЫ
========================================================= */

const PUMPS = [

    {
        name: "Без помпы",
        weight: 0
    },

    {
        name: "С помпой",
        weight: SETTINGS.pumpWeight
    }

];

/* =========================================================
   ДАННЫЕ
========================================================= */

const DATA = [

    {

        company: "Rioba",

        note: "",

        bottles: [

            {
                name: "Стекло 0.7 л",
                tare: 498
            }

        ]

    },

    {

        company: "Monin",

        note: "",

        bottles: [

            {
                name: "Стекло 0.7 л",
                tare: 464
            },

            {
                name: "Стекло 1 л",
                tare: 532
            },

            {
                name: "Пластик 1 л",
                tare: 75
            }

        ]

    },

    {

        company: "Maribell",

        note: "",

        bottles: [

            {
                name: "Стекло 0.7 л",
                tare: 454
            }

        ]

    },

    {

        company: "1883",

        note: "",

        bottles: [

            {
                name: "Стекло 1 л",
                tare: 463
            }

        ]

    }

];

/* =========================================================
   ТЕКУЩИЙ ВЫБОР
========================================================= */

let companyIndex = 0;
let bottleIndex = 0;
let pumpIndex = 0;

/* =========================================================
   БЫСТРЫЙ ДОСТУП
========================================================= */

function currentCompany() {

    return DATA[companyIndex];

}

function currentBottle() {

    return currentCompany().bottles[bottleIndex];

}

function currentPump() {

    return PUMPS[pumpIndex];

}

/* =========================================================
   ОБНОВЛЕНИЕ ЭКРАНА
========================================================= */

function updateScreen() {

    document.getElementById("companyName").textContent =
        currentCompany().company;

    document.getElementById("bottleName").textContent =
        currentBottle().name;

    document.getElementById("pumpName").textContent =
        currentPump().name;

}
/* =========================================================
   Inventory Tools
   Syrups Module
========================================================= */

function openSyrups() {

    const pageContent = document.getElementById("pageContent");

    pageContent.innerHTML = `

        <div id="syrupApp">

            <h2 style="text-align:center;color:#6EB8FF;margin-bottom:25px;">
                🧋 Калькулятор сиропов
            </h2>

            <div class="selector">

                <button id="companyPrev">◀</button>

                <div id="companyName">Monin</div>

                <button id="companyNext">▶</button>

            </div>

            <div class="selector">

                <button id="bottlePrev">◀</button>

                <div id="bottleName">Стекло 0.7 л</div>

                <button id="bottleNext">▶</button>

            </div>

            <div class="selector">

                <button id="pumpPrev">◀</button>

                <div id="pumpName">Без помпы</div>

                <button id="pumpNext">▶</button>

            </div>

            <div id="note"></div>

            <div class="caption">
                Вес (кг)
            </div>

            <input
                id="weight"
                type="text"
                inputmode="decimal"
                placeholder="">

            <div class="caption">
                Результат (л)
            </div>

            <div id="resultBox">

                <div id="result">

                    0,000

                </div>

                <div id="copyMark">

                    ✔

                </div>

            </div>

        </div>

    `;
   
updateScreen();

document.getElementById("companyPrev").onclick = function () {

    companyIndex--;

    if (companyIndex < 0) {

        companyIndex = DATA.length - 1;

    }

    bottleIndex = 0;

    updateScreen();

};

document.getElementById("companyNext").onclick = function () {

    companyIndex++;

    if (companyIndex >= DATA.length) {

        companyIndex = 0;

    }

    bottleIndex = 0;

    updateScreen();

};


/* =========================================================
   ПЕРЕКЛЮЧЕНИЕ БУТЫЛОК
========================================================= */

document.getElementById("bottlePrev").onclick = function () {

    bottleIndex--;

    if (bottleIndex < 0) {

        bottleIndex = currentCompany().bottles.length - 1;

    }

    updateScreen();

};

document.getElementById("bottleNext").onclick = function () {

    bottleIndex++;

    if (bottleIndex >= currentCompany().bottles.length) {

        bottleIndex = 0;

    }

    updateScreen();

};

   
}
