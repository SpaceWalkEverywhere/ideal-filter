function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(325,250);
    vid=createCapture(VIDEO);
    vid.hide();
    colour="";
}
function draw(){
    image(vid,0,0,640,480);
    tint(colour);
}
function ohsnap(){
    save("image_"+colour+".png");
}
function filter_tint(){
    colour=document.getElementById("fill").value;
}
