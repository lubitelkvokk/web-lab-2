import validation from "./utils/Validation";
import {rButtonListening, xButtonsListening} from "./specific_functions/ButtonsListening";
import {getR, getRErrorField, getX, getXErrorField, getY, getYErrorField} from "./specific_functions/SelectionResults";
import graphClickListener from "./utils/GraphClickCoordinates";




let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//Прослушивание кнопки X
xButtonsListening();
//Прослушивание кнопки R
rButtonListening();


graphClickListener();
// const graphRoom = document.querySelector("svg")
// graphRoom!.addEventListener('mousedown', function(event: MouseEvent) {
//     let x = event.clientX;
//     let y = event.clientY;
//
//     console.log('Координаты мыши: x = ' + x + ', y = ' + y);
// } as EventListener);
fetch(`https://se.ifmo.ru/~s367403/lab1/getTable.php`)
    .then(response => response.text())
    .then(data => {
        updateTable(data);
    })
    .catch(reason => {
        console.error(reason)
    })


document.querySelector("#form-submit")?.addEventListener("click", function () {
    let validation_result = validation(getX(), getY(), getR(), getXErrorField(), getYErrorField(), getRErrorField());
    if (validation_result) {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        getTable();
    }
})


function updateTable(html: string) {
    document.querySelector('#hit-results')!.innerHTML = "<tr>\n" +
        "                                                                <th>X</th>\n" +
        "                                                                <th>Y</th>\n" +
        "                                                                <th>R</th>\n" +
        "                                                                <th>Current time</th>\n" +
        "                                                                <th>Script runtime</th>\n" +
        "                                                                <th>Hit result</th>\n" +
        "                                                            </tr>" + html;

}

function addRowToTable(html: string) {
    document.querySelector("#hit-results")!.innerHTML += html;
}

function getTable() {
    fetch(`https://se.ifmo.ru/~s367403/lab1/index.php?x=${getX()?.value}&y=${getY()!.value.slice(0, 13)}&r=${getR()?.value}&timeZone=${timeZone}`)
        .then(response => response.text())
        .then(data => {
            updateTable(data);

        })
        .catch(reason => {
            console.error(reason)
        })
}


