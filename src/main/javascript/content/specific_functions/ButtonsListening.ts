import {setXPointCoord, setYPointCoord} from "../utils/GraphClickCoordinates";
import {getX, getY} from "./SelectionResults";
import {validateR} from "../utils/Validation";

export function xButtonsListening() {
    const xButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="xChoice"]');

    let selectedXButton: HTMLInputElement | null = null;
    xButtons.forEach(button => {

        button.addEventListener('click', () => {
            if (selectedXButton !== null) {
                selectedXButton.classList.remove("active");
            }
            // Здесь вставьте логику валидации для кнопок
            selectedXButton = button;
            button.classList.add("active");
            setXPointCoord(parseFloat(button.value))
        });

    });
}

// export function yTextListening() {
//     const yText: HTMLInputElement | null= document.querySelector('input[name="yChoice"]');
//
//     let selectedXButton: HTMLInputElement | null = null;
//     xButtons.forEach(button => {
//
//         button.addEventListener('click', () => {
//             if (selectedXButton !== null) {
//                 selectedXButton.classList.remove("active");
//             }
//             // Здесь вставьте логику валидации для кнопок
//             selectedXButton = button;
//             button.classList.add("active");
//         });
//     });
// }

export function yTextListening() {
    const yText: HTMLInputElement | null = document.querySelector('input[name="yChoice"]');
    yText?.addEventListener("change", (event: Event) => {
        const value = parseFloat((event.target as HTMLInputElement).value);
        setYPointCoord(value);
    })
}

export function rTextListening() {
    const rText: HTMLInputElement | null = document.querySelector('input[name="rChoice"]');

    rText?.addEventListener("change", (event: Event) => {
        let x = parseFloat(getX().value);
        let y = parseFloat(getY().value);
        if (validateR()){
            setXPointCoord(x);
            setYPointCoord(y);
        }

    })
}

// export function rButtonListening() {
//     const rButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="rChoice"]');
//
//     let selectedRButton: HTMLInputElement | null = null;
//     rButtons.forEach(button => {
//
//         button.addEventListener('click', () => {
//             if (selectedRButton !== null) {
//                 selectedRButton.classList.remove("active");
//             }
//             // Здесь вставьте логику валидации для кнопок
//             selectedRButton = button;
//             button.classList.add("active");
//         });
//
//     });
// }