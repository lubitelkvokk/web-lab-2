export function getX(): HTMLInputElement {
    const xButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="xChoice"]');
    for (let x of xButtons) {
        if (x.classList.contains("active")) {
            if (x.value) {
                return x;
            }
        }
    }
    return  document.createElement("input");
}

export function getY(): HTMLInputElement {
    const y: HTMLInputElement | null = document.querySelector('input[name="yChoice"]');
    return y !== null ? y :  document.createElement("input");
}

export function getR() {
    const r: HTMLInputElement | null = document.querySelector('input[name="rChoice"]');
    return r !== null ? r :  document.createElement("input");
}


export function getValue(element: HTMLInputElement) {
    return element.value;
}


export function getXErrorField() {
    return document.querySelector("#x-error");
}

export function getYErrorField() {
    return document.querySelector("#y-error");
}

export function getRErrorField() {
    return document.querySelector("#r-error");
}