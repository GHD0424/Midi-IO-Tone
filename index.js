$(document).ready(function(){
// import * as Tone from 'tone'
const synth = new Tone.Synth().toDestination();

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C5", "8n");

// document.querySelector('button')?.addEventListener('click', async () => {
//     await Tone.start()
    
// })

// const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

$(".click").mousedown(function(){

$(this).css("background-color", "yellow");
  var note = $(this).data("note");
  synth.triggerAttack(note);
});

$(".click").mouseup(function(){
$(this).css("background-color", "white");

  synth.triggerRelease();
});
if(piano){
	piano.addEventListener("mousedown", e => {
	  synth.triggerAttack(e.target.dataset.note);
	});

	piano.addEventListener("mouseup", e => {
	  synth.triggerRelease();
	});
}

document.addEventListener("keydown", e => {
	var key_val = e.key;
	var res = key_val.toLowerCase();
  switch (res) {

    case "s":
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("E#4");
    case "d":
      return synth.triggerAttack("D4");
    case "f":
      return synth.triggerAttack("E4");
    case "t":
      return synth.triggerAttack("F#4");
    case "g":
      return synth.triggerAttack("F4");
    case "h":
      return synth.triggerAttack("G4");
    case "y":
      return synth.triggerAttack("A#4");
    case "j":
      return synth.triggerAttack("A4");
    case "u":
      return synth.triggerAttack("B#4");
	case "k":
      return synth.triggerAttack("B4");

    case "e":
      return synth.triggerAttack("D#4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  var key_val = e.key;
	var res = key_val.toLowerCase();
  switch (res) {
    case "s":

    case "r":

    case "d":

    case "f":

    case "t":

    case "g":

    case "h":

    case "y":

    case "j":

    case "u":

	case "k":

    case "e":

       synth.triggerRelease(); 
  }
});
});