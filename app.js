$(document).ready(() => {
    let isMousedown = false;
    const positions = []; // array of coordinates {x, y}

    const canvas = $("canvas").get(0).getContext("2d");
    canvas.canvas.width  = window.innerWidth;
    canvas.canvas.height = window.innerHeight;
    canvas.fillStyle = "blue";

    $("canvas").mousedown(() => {
        isMousedown = true;
    });
    $("canvas").mousemove((event) => {
        if (!isMousedown) return;

        positions.push({x: event.pageX, y: event.pageY});

        console.debug("x, y >>> ", event.pageX, event.pageY);
        canvas.fillRect(event.pageX, event.pageY, 2, 2); // draws a pixel 2x2
    });
    $("canvas").mouseup(() => {
        isMousedown = false;
        // send positions[] to the server here
    });
});
