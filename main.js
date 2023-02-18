function preload(){
    //ABSOLUTELY NOTHING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function setup(){
    var infinty = 600;
    canvas = createCanvas(infinty, infinty-100);
    canvas.position(100, 300);
    video = createCapture(VIDEO);
    video.hide();
    color = ""
}

function draw(){
    image(video, 0, 0, 600, 500);
    tint(color);
}

function take_snapshot(){
    color = document.getElementById("the-imput").value;
}

function download(){
    save("tint-image(Infinity).png");
}