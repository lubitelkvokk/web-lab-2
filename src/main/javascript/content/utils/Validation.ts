export default function validation(x: HTMLInputElement | null, y: HTMLInputElement | null, r: HTMLInputElement | null,
                                   xError: Element | null, yError: Element | null, rError: Element | null) {

    let isVaild: boolean = true;
    if (!xError || !yError || !rError) {
        console.error("Some fields for errors not exists or access")
        isVaild = false;
    }

    // Проверка X
    if (x?.value == "") {
        xError!.textContent = "Значение поля X должно быть выбрано";
        isVaild = false;
    } else {
        xError!.textContent = "";
    }

    // Проверка y
    if (y!.value == "" || y == null) {
        yError!.textContent = "Значение поля Y должно быть выбрано";
        isVaild = false;
    } else {

        let y_number = parseFloat(y!.value.slice(0,5));
        // console.log(/^\s*[0-9]+.?[0-9]*\s*$/.test(y.value));
        console.log(!(/^\s*[0-9]+.?[0-9]*\s*$/.test(y.value)) || (y_number <= -5 || y_number >= 3))
        if (!(/^\s*[0-9]+.?[0-9]*\s*$/.test(y.value)) || (y_number <= -5 || y_number >= 3)) {
            yError!.textContent = "-5 < Y < 3";
            isVaild = false;
        }
        else {
            yError!.textContent = "";
        }

    }
    
    // Проверка R
    if (r?.value == "") {
        rError!.textContent = "Значение поля R должно быть выбрано";
        isVaild = false;
    } else {
        rError!.textContent = "";
    }

    return isVaild;

}