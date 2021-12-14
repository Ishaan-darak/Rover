background_array=["mars.jpg","Mars_1.jpg","Mars_2.jpg","mars_3.jfif"];

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

random_number=Math.floor(Math.random()*4)
background_image = background_array[random_array]
rover_image = "rover.png"

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = upload_background;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = upload_rover;
    rover_imgtag.src = rover_image;
}

function upload_background() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", MyKeyDown);
function MyKeyDown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == 38) {
        up();
        console.log("up")
    }
    if (keypress == 37) {
        left();
        console.log("left");
    }
 if (keypress == 39) {
        right();
        console.log("right");
    }
    if (keypress == 40) {
        down();
        console.log("down");
    }
}
function up(){
    if(rover_y>=0){
        rover_y-=10;
        console.log("When up arrow is pressed, x="+rover_x+", y="+rover_y);
    upload_background();
    upload_rover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y+=10;
        console.log("When down arrow is pressed, x="+rover_x+", y="+rover_y);
    upload_background();
    upload_rover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x-=10;
        console.log("When left arrow is pressed, x="+rover_x+", y="+rover_y);
    upload_background();
    upload_rover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x+=10;
        console.log("When right arrow is pressed, x="+rover_x+", y="+rover_y);
    upload_background();
    upload_rover();
    }
}