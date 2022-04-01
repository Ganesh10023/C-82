var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";
widthofline=3;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
   // mouse_x=e.clientX-canvas.offsetLeft;
   // mouse_y=e.clientY-canvas.offsetTop;
    mouseEvent="mouseDown";}
    
    canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
   
    mouseEvent="mouseUP";}


    canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";}

    canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
   current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_postition_of_mouse_y=e.clientY-canvas.offsetTop;
   if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    console.log("last position of x and y");
    console.log("x=" + lastpositionofx "y="+ lastpositionofy); 
    ctx.moveTo(lastpositionofx,lastpositionofy);

    console.log("current position of x and y");
    console.log("x=" + current_position_of_mouse_x "y="+ current_postition_of_mouse_y); 
    ctx.lineTo(current_position_of_mouse_x,current_postition_of_mouse_y);
    ctx.stroke();
    last_position_of_x = current_position_of_mouse_x; last_position_of_y = current_position_of_mouse_y;
   }