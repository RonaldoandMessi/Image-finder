Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});

camera=document.getElementById("cam");
Webcam.attach(camera);

function Snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="image_result" src="'+data_uri+'">';
});
}

console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-RfV6bYNq/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}

function Check(){
    img=document.getElementById("image_result");
    classifier.classify(img,gotResult);
}

function gotResult(error,success){
    if (error){
        console.error(error);
    }

    else{
        console.log(success);
        document.getElementById("resultobjectname").innerHTML=success[0].label;
        document.getElementById("objectaccuracy").innerHTML=success[0].confidence.toFixed(4);

    }
}