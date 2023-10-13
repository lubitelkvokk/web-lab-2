export function tableIsEmpty() {
    return document.querySelector("#hit-results")!.innerHTML.trim() == "";
}