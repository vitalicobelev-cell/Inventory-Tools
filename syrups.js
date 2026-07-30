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

}
