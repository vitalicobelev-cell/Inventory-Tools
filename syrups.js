/* =========================================================
   Inventory Tools
   syrups.js
========================================================= */

function openSyrups() {

    document.getElementById("pageContent").innerHTML = `

<div id="syrupApp">

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
        inputmode="decimal"
        autocomplete="off"
        spellcheck="false"
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

    initSyrups();

}


