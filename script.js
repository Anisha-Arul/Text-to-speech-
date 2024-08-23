var speech = new SpeechSynthesisUtterance();

function setFemaleVoice() {
    const voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
       if (voices[i].gender === "female" || voices[i].name.includes("Female")) {
          speech.voice = voices[i];
          break;
       }
    }
 }


function speak() {
    setFemaleVoice();

   speech.text = textTospeak.value;
   speech.rate = 1; 
   speech.volume = 0.3;
   speech.pitch = 1;
   window.speechSynthesis.speak(speech);



}