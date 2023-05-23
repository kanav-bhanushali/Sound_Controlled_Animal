//https://teachablemachine.withgoogle.com/models/LF6Y8q54e/
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LF6Y8q54e/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}