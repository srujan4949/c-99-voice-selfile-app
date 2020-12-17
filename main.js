var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
 
recognition.onresult = function run (event) {

    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").nodeValue;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camara);
}

webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camara = document.getElementById("camara");