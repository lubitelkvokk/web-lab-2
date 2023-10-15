import {getR, getX, getY} from "./SelectionResults";

export function getTable(x: number, y: number, r: number) {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // fetch(`http://localhost:8080/web-lab-2.1/controller?x=${x}&y=${y}&r=${r}&timeZone=${timeZone}`)
    //     .then(response => response.text())
    //     .then(data => {
    //         updateTable(data);
    //
    //     })
    //     .catch(reason => {
    //         console.error(reason)
    //     })

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "JSESSIONID=-kYt2jtzNVYhPdRWSFFreeKLbleBN0-GbsoIvqQE.predator; Phpstorm-d2bc2213=f0b6a102-d3b3-4d9c-b2f1-c37a3a1558d9");

    let raw = JSON.stringify({
        "x": x,
        "y": y,
        "r": r,
        "timeZone": timeZone
    });

    fetch("http://localhost:8080/web-lab-2.1/controller", {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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