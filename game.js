const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.shadowBlur = 20;
ctx.shadowColor = "black";
ctx.fillStyle = "red";

let rectX = 20;  // Initial X position of the rectangle
const rectY = 20;
const rectWidth = 100;
const rectHeight = 80;
const rectSpeed = 2;  // Adjust this for desired movement speed

function drawRectangle() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update the X position of the rectangle
    rectX += rectSpeed;

    // Draw the rectangle with updated position
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

    requestAnimationFrame(drawRectangle);  // Keep animating
}

drawRectangle();
