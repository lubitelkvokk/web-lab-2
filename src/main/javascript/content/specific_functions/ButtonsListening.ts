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

export function rButtonListening() {
    const rButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="rChoice"]');

    let selectedRButton: HTMLInputElement | null = null;
    rButtons.forEach(button => {

        button.addEventListener('click', () => {
            if (selectedRButton !== null) {
                selectedRButton.classList.remove("active");
            }
            // Здесь вставьте логику валидации для кнопок
            selectedRButton = button;
            button.classList.add("active");
        });

    });
}