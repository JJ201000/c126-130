song="";
leftWristX=0;
leftWristY=0;
rigtWristY=0;
rigtWristX=0;
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas =createCanvas(600,500);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPose);
}
function modelLoaded()
{
console.log("posenet se a iniciado");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.Y;
    rigtWristX=results[0].pose.rigtWrist.x;
    rigtWristY=results[0].pose.rigtWrist.Y;
    console.log(" leftWristX= " +  leftWristX +  "leftWristY = " +  leftWristY) 
}
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
song.setVolume(1);
song.rate(1);

}