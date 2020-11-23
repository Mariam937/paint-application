var mouseEvent = "";
var lastPositionOfX, lastPositionOfY;
var currentPositonOfX, currentPositonOfY;
var color = "black";
var width = 1;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e) {
    
    mouseEvent = "mouseup"
}


canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e) {
    
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove", myMousemove);
function myMousemove(e) {

currentPositonOfX=e.clientX-canvas.offsetLeft;
currentPositonOfY=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width
ctx.moveTo(lastPositionOfX,lastPositionOfY);
ctx.lineTo(currentPositonOfX, currentPositonOfY);
ctx.stroke();

}
lastPositionOfX=currentPositonOfX;
lastPositionOfY=currentPositonOfY;

}


function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}