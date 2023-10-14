export default function validation(x: HTMLInputElement | null, y: HTMLInputElement | null, r: HTMLInputElement | null,
                                   xError: Element | null, yError: Element | null, rError: Element | null) {

    let isValid: boolean = true;
    if (!xError || !yError || !rError) {
        console.error("Some fields for errors not exists or access")
        isValid = false;
    }

    // Проверка X
    if (x?.value == "") {
        xError!.textContent = "Value X must be chosen";
        isValid = false;
    } else {
        xError!.textContent = "";
    }

    // Проверка y
    if (y!.value == "" || y == null) {
        yError!.textContent = "Value Y must be chosen";
        isValid = false;
    } else {

        let y_number = parseFloat(y!.value.slice(0, 5));
        // console.log(/^\s*[0-9]+.?[0-9]*\s*$/.test(y.value));
        // console.log(!(/^\s*[0-9]+.?[0-9]*\s*$/.test(y.value)) || (y_number <= -5 || y_number >= 5))
        if (!(/^\s*-?[0-9]+\.?[0-9]*\s*$/.test(y.value)) || (y_number <= -5 || y_number >= 5)) {
            yError!.textContent = "-5 < Y < 5";
            isValid = false;
        } else {
            yError!.textContent = "";
        }

    }

    // Проверка R
    if (r!.value == "" || r == null) {
        rError!.textContent = "Value R must be chosen";
        isValid = false;
    } else {

        let r_number = parseFloat(r!.value.slice(0, 5));
        // console.log(/^\s*[0-9]+.?[0-9]*\s*$/.test(y.value));
        // console.log(!(/^\s*[0-9]+.?[0-9]*\s*$/.test(r.value)) || (r_number <= 2 || r_number >= 5))
        if (!(/^\s*[0-9]+.?[0-9]*\s*$/.test(r.value)) || (r_number <= 2 || r_number >= 5)) {
            rError!.textContent = "2 < R < 5";
            isValid = false;
        } else {
            rError!.textContent = "";
        }

    }

    return isValid;
}

export function validateInputElement(r: HTMLInputElement | null, rError: Element | null, lowerLimit: number, upperLimit: number) {
    let isValid = true;
    // Проверка R
    if (r!.value == "" || r == null) {
        rError!.textContent = `Value must be chosen`;
        isValid = false;
    } else {
        let r_number = parseFloat(r!.value.slice(0, 5));
        // console.log(/^\s*[0-9]+.?[0-9]*\s*$/.test(y.value));
        // console.log(!(/^\s*[0-9]+.?[0-9]*\s*$/.test(r.value)) || (r_number <= 2 || r_number >= 5))
        if (!(/^\s*[0-9]+.?[0-9]*\s*$/.test(r.value)) || (r_number <= lowerLimit || r_number >= upperLimit)) {
            rError!.textContent = `${lowerLimit} < R < ${upperLimit}`;
            isValid = false;
        } else {
            rError!.textContent = "";
        }
    }
    return isValid;
}