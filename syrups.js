/* =========================================================
   Inventory Tools
   Syrups Module
========================================================= */

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
   ДОСТУП К ДАННЫМ
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

    document.getElementById("note").textContent =
        currentCompany().note;

    const minWeight =
        currentBottle().tare +
        currentPump().weight;

    document.getElementById("weight").placeholder =
        "от " + minWeight + " г";

    const prev =
        document.getElementById("bottlePrev");

    const next =
        document.getElementById("bottleNext");

    if (currentCompany().bottles.length === 1) {

        prev.style.visibility = "hidden";
        next.style.visibility = "hidden";

    } else {

        prev.style.visibility = "visible";
        next.style.visibility = "visible";

    }

}

/* =========================================================
   ОТКРЫТЬ КАЛЬКУЛЯТОР
========================================================= */

function openSyrups() {

    const pageContent =
        document.getElementById("pageContent");

    pageContent.innerHTML = `

<div id="syrupApp">

<h2 style="text-align:center;color:#6EB8FF;margin-bottom:25px;">
🧋 Калькулятор сиропов
</h2>

<div class="selector">

<button id="companyPrev">◀</button>

<div id="companyName"></div>

<button id="companyNext">▶</button>

</div>

<div class="selector">

<button id="bottlePrev">◀</button>

<div id="bottleName"></div>

<button id="bottleNext">▶</button>

</div>

<div class="selector">

<button id="pumpPrev">◀</button>

<div id="pumpName"></div>

<button id="pumpNext">▶</button>

</div>

<div id="note"></div>

<div class="caption">
Вес (кг)
</div>

<input
id="weight"
type="text"
inputmode="decimal">

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



    /* =========================================================
       ПЕРЕКЛЮЧЕНИЕ ФИРМ
    ========================================================= */

    document.getElementById("companyPrev").onclick = function () {

        companyIndex--;

        if (companyIndex < 0) {

            companyIndex = DATA.length - 1;

        }

        bottleIndex = 0;

        updateScreen();

        calculate();

    };

    document.getElementById("companyNext").onclick = function () {

        companyIndex++;

        if (companyIndex >= DATA.length) {

            companyIndex = 0;

        }

        bottleIndex = 0;

        updateScreen();

        calculate();

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

        calculate();

    };

    document.getElementById("bottleNext").onclick = function () {

        bottleIndex++;

        if (bottleIndex >= currentCompany().bottles.length) {

            bottleIndex = 0;

        }

        updateScreen();

        calculate();

    };

    /* =========================================================
       ПЕРЕКЛЮЧЕНИЕ ПОМПЫ
    ========================================================= */

    document.getElementById("pumpPrev").onclick = function () {

        pumpIndex--;

        if (pumpIndex < 0) {

            pumpIndex = PUMPS.length - 1;

        }

        updateScreen();

        calculate();

    };

    document.getElementById("pumpNext").onclick = function () {

        pumpIndex++;

        if (pumpIndex >= PUMPS.length) {

            pumpIndex = 0;

        }

        updateScreen();

        calculate();

    };

    document.getElementById("weight")
        .addEventListener("input", calculate);

    document.getElementById("weight")
        .addEventListener("focus", function () {

            this.value = "";

        });

    calculate();

}





/* =========================================================
   РАСЧЁТ
========================================================= */

function calculate() {

    const weight = document.getElementById("weight");
    const result = document.getElementById("result");

    let text = weight.value.replace(",", ".");
    let kg = parseFloat(text);

    if (weight.value.trim() === "") {

        result.textContent = "0,000";
        return;

    }

    if (isNaN(kg)) {

        result.textContent = "Ошибка";
        return;

    }

    const grams = kg * 1000;

    const minWeight =
        currentBottle().tare +
        currentPump().weight;

    if (grams < minWeight) {

        result.textContent = "Ошибка";
        return;

    }

    let volume =
        (grams -
         currentBottle().tare -
         currentPump().weight)
        / SETTINGS.density;

    result.textContent =
        volume
            .toFixed(SETTINGS.decimals)
            .replace(".", ",");
result.classList.remove("copied");

const mark = document.getElementById("copyMark");

if (mark) {

    mark.classList.remove("show");

}
}


/* =========================================================
   КОПИРОВАНИЕ РЕЗУЛЬТАТА
========================================================= */

document.addEventListener("click", async function (event) {

    if (event.target.id !== "result") return;

    const result = document.getElementById("result");

    if (
        result.textContent === "Ошибка" ||
        result.textContent === "0,000"
    ) {
        return;
    }

    try {

        await navigator.clipboard.writeText(result.textContent);

        result.classList.add("copied");

        document
            .getElementById("copyMark")
            .classList.add("show");

        setTimeout(function () {

            result.classList.remove("copied");

            document
                .getElementById("copyMark")
                .classList.remove("show");

        }, 700);

    }

    catch (e) {

        console.log(e);

    }

});






