

export default function graphClickListener(){
    const graphRoom = document.querySelector(".svg-graph")
    graphRoom!.addEventListener('mousedown', function(event: MouseEvent) {
        let x = event.clientX;
        let y = event.clientY;

        console.log('Координаты мыши: x = ' + x + ', y = ' + y);
    } as EventListener);
}


