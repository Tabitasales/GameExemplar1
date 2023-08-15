const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.shadowBlur = 20;
ctx.shadowColor = "black";
ctx.fillStyle = "red";
ctx.fillRect (20, 20, 100, 80);