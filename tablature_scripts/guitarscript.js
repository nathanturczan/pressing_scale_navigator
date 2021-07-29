
var note_translate = ["C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];

function showGuitarNotes(notes) {

    allNotes = [0,1,2,3,4,5,6,7,8,9,10,11];
    offNotes = allNotes.filter(function(val) {
      return notes.indexOf(val) == -1;
    });


    for (var i = 0; i < offNotes.length; i++) {

        for (var j = document.getElementsByClassName(note_translate[offNotes[i]]).length - 1; j >= 0; --j) {
          document.getElementsByClassName(note_translate[offNotes[i]])[j].setAttribute('opacity', 0.0);
        }
    }

    for (var i = 0; i < notes.length; i++) {

        for (var j = document.getElementsByClassName(note_translate[notes[i]]).length - 1; j >= 0; --j) {
          document.getElementsByClassName(note_translate[notes[i]])[j].setAttribute('opacity', 1.0);
        }
    }
}