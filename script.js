const canvas = document.getElementById('signature-pad');
const context = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(event) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

document.getElementById('clear-button').addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});