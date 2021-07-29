

function showCircleChords(chords) {

	allChords = ["C","Em","G","Bm","D","F#m","A","C#m","E","G#m","B","D#m","F#","B♭m","D♭","Fm","A♭","Cm","E♭","Gm","B♭","Dm","F","Am"];


	offChords = allChords.filter(function(val) {
      return chords.indexOf(val) == -1;
    });


    for (var i = 0; i < offChords.length; i++) {

        for (var j = document.getElementsByClassName(offChords[i]+"_chord").length - 1; j >= 0; --j) {
          document.getElementsByClassName(offChords[i]+"_chord")[j].setAttribute('opacity', 0.0);
        }
    }

    for (var i = 0; i < chords.length; i++) {
        //console.log('this chord is in this scale',chords[i]+"_chord");
        for (var j = document.getElementsByClassName(chords[i]+"_chord").length - 1; j >= 0; --j) {
          document.getElementsByClassName(chords[i]+"_chord")[j].setAttribute('opacity', 1.0);
        }
    }

}