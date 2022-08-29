harrypotter_theme = "";
avengers_theme = "";
function preload(){
    harrypotter_theme = loadSound("Hedwigs_Theme.mp3");
    avengers_theme = loadSound("Avengers_Theme.mp3");
}
function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized .");
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left - "+leftWristX + ", " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right - " + rightWristX + ", " + rightWristY);
    }
}