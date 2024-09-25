// window element
window.addEventListener('load', ()=>{
    resize(); //Resizes the canvas once the window loads
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPanting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);
});

// declare variable
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');//canvas for 2 dimensional operation
let coord = {x:0 , y:0};// stores the initial position of the cursor
let paint = false; // tirgger drawing


function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clienty - canvas.offsetTop;
}

function startPainting(event) {
    paint = true;
    getPosition(event);
}
function stopPainting() {
    paint = false;
}

function sketch(event) {
    if (!paint) return;
    ctx.beginPath() ;
    ctx.lineWidth = 5;

    ctx.lineCap = 'round';
    ctx.strokeStyle = 'green';
    ctx.moveTo(coord.x, coord.y);
    getPosition(event);
    ctx.lineTo(coord.x , coord.y);
    ctx.stroke();
}