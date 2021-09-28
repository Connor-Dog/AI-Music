song=" ";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
song = loadSound('music.mp3');
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}
function modelloaded(){
console.log("poseNetisinitialized");
}
function gotposes(results){
if(results.length>0)
{
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightwristx= "+rightWristX+",rightwristy= "+rightWristY);
console.log("leftwristx= "+leftWristX+",leftwristy= "+leftWristY);
}
}
function draw(){
image(video,0,0,600,500);
}
function play_song(){
song.play();
}
