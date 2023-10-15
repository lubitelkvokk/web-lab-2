import {getR, getX, getY} from "../specific_functions/SelectionResults";
import {cleanAllErrors, validateInputElement, validateR} from "./Validation";
import {getTable} from "../specific_functions/Table";

const graphRoom = document.querySelector(".svg-graph")

export default function graphClickListener() {

    graphRoom!.addEventListener('mousedown', function (event: MouseEvent) {
        cleanAllErrors();
        let isValid = validateR();
        if (isValid) {
            if (graphRoom !== null) {
                let window = graphRoom.getBoundingClientRect();
                let x = event.clientX - (window.x + 150);
                let y = (window.y + 150) - event.clientY;

                [x, y] = pointScaling(x, y);

                setX(x);
                setY(y);
                getTable();

            } else {

                console.log("FIIIIIIREEEEE! RUUUUUN FOREST!");
            }
        }


    } as EventListener);
}

function pointScaling(x: number, y: number) {
    let r: number = parseFloat(getR().value);
    console.log(r)
    if (!r) {

    } else {
        let scale = r / 120 // because r in picture equals 60 pixels
        x = scale * x;
        y = scale * y;
    }

    return [x, y];
}


function setX(x: number) {
    const xButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="xChoice"]');
    let selectedXButton: HTMLInputElement | null = document.querySelector("#x-2");
    let minDifference = 9999999999;
    xButtons.forEach(button => {
        if (button !== null) {
            button.classList.remove("active");
        }
        let difference = Math.abs((x - parseFloat(button.value)))
        if (minDifference > difference) {
            minDifference = difference;
            selectedXButton = button;
            setXPointCoord(parseFloat(selectedXButton.value));
        }
    });

    if (selectedXButton != null) {
        selectedXButton.classList.add("active");
    }
}

export function setXPointCoord(x: number) {
    let point = document.querySelector("#point");

    let pixelXCoord = 150 + x * 120 / parseFloat(getR().value)
    if (point !== null) {
        point.setAttribute("cx", `${pixelXCoord}`)
    }
}


function setY(y: number) {
    let labelY: HTMLInputElement | null = document.querySelector("#y");


    if (labelY !== null) {
        labelY.value = String(y);
        setYPointCoord(y);
    }

}

export function setYPointCoord(y: number) {
    let point = document.querySelector("#point");
    let pixelYCoord = 150 - y * 120 / parseFloat(getR().value);
    if (point !== null) {
        point.setAttribute("cy", `${pixelYCoord}`)
    }
}
