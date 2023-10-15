import validation from "./utils/Validation";
import {rTextListening, xButtonsListening, yTextListening} from "./specific_functions/ButtonsListening";
import {getR, getRErrorField, getX, getXErrorField, getY, getYErrorField} from "./specific_functions/SelectionResults";
import graphClickListener from "./utils/GraphClickCoordinates";
import {getTable, updateTable} from "./specific_functions/Table";


let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//Прослушивание кнопки X
xButtonsListening();

//Проверка на change Y
yTextListening();

//Проверка на change Y
rTextListening();

graphClickListener();



document.querySelector("#form-submit")?.addEventListener("click", function () {
    let validation_result = validation(getX(), getY(), getR(), getXErrorField(), getYErrorField(), getRErrorField());
    if (validation_result) {
        let x = parseFloat(getX().value);
        let y = parseFloat(getY().value.slice(0, 13));
        let r = parseFloat(getR().value.slice(0, 13));
        getTable(x, y, r);
    }
})


function addRowToTable(html: string) {
    document.querySelector("#hit-results")!.innerHTML += html;
}




