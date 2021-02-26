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

$(this).css("background", "yellow");
  var note = $(this).data("note");
  synth.triggerAttack(note);
});

$(".click").mouseup(function(){
$(this).css("background", "");

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
      $(".keyS").css("background", "yellow");
      return synth.triggerAttack("C4");
    case "r":
    	$(".keyR").css("background", "yellow");
      	return synth.triggerAttack("D#4");
    case "d":
    	$(".keyD").css("background", "yellow");
      	return synth.triggerAttack("D4");
    case "f":
    	$(".keyF").css("background", "yellow");
      	return synth.triggerAttack("E4");
    case "i":
    	$(".keyI").css("background", "yellow");
      	return synth.triggerAttack("A#4");
    case "g":
    	$(".keyG").css("background", "yellow");
      	return synth.triggerAttack("F4");
    case "h":
    	$(".keyH").css("background", "yellow");
      	return synth.triggerAttack("G4");
    case "y":
    	$(".keyY").css("background", "yellow");
      	return synth.triggerAttack("F#4");
    case "j":
    	$(".keyJ").css("background", "yellow");
      	return synth.triggerAttack("A4");
    case "u":
    	$(".keyU").css("background", "yellow");
      	return synth.triggerAttack("G#4");
	case "k":
		$(".keyK").css("background", "yellow");
      	return synth.triggerAttack("B4");

    case "e":
    	$(".keyE").css("background", "yellow");
      	return synth.triggerAttack("C#4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  var key_val = e.key;
	var res = key_val.toLowerCase();
  switch (res) {
    case "s":
    	$(".keyS").css("background","");

    case "d":
    	$(".keyD").css("background","");

    case "f":
    	$(".keyF").css("background","");

    case "i":
    	$(".keyI").css("background","");

    case "g":
    	$(".keyG").css("background","");

    case "h":
    	$(".keyH").css("background","");

    case "y":

    	$(".keyY").css("background","");
    case "j":

    	$(".keyJ").css("background","");
    case "u":

    	$(".keyU").css("background","");
	case "k":

		$(".keyK").css("background","");
    case "e":

    	$(".keyE").css("background","");

    case "r":

    	$(".keyR").css("background","");
       synth.triggerRelease(); 
  }
});
});