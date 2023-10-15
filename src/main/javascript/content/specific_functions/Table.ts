import {getR, getX, getY} from "./SelectionResults";

export function getTable(x: number, y: number, r: number) {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    fetch(`https://se.ifmo.ru/~s367403/lab1/index.php?x=${x}&y=${y}&r=${r}&timeZone=${timeZone}`)
        .then(response => response.text())
        .then(data => {
            updateTable(data);

        })
        .catch(reason => {
            console.error(reason)
        })
}

export function updateTable(html: string) {
    document.querySelector('#hit-results')!.innerHTML = "<tr>\n" +
        "                                                                <th>X</th>\n" +
        "                                                                <th>Y</th>\n" +
        "                                                                <th>R</th>\n" +
        "                                                                <th>Current time</th>\n" +
        "                                                                <th>Script runtime</th>\n" +
        "                                                                <th>Hit result</th>\n" +
        "                                                            </tr>" + html;

}