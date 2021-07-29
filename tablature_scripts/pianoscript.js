const notes = document.querySelectorAll(".key");

// Setting key-notes pairs
const keys = {
  0: "C",
  1: "Db",
  2: "D",
  3: "Eb",
  4: "E",
  5: "F",
  6: "Gb",
  7: "G",
  8: "Ab",
  9: "A",
  10: "Bb",
  11: "B"
};

// Setting Click events for each key
notes.forEach(note => {
  note.addEventListener("click", () => {

  });
});

// Keypress events
// window.addEventListener("keypress", e => {
//   playNote(e.key);
// });

// Play note function
// function playNote(note) {
//   console.log("what", note);
//   if (note in keys) {


//     let key = document.querySelector(`[data-note="${keys[note]}"]`);

//     if (key.classList.contains("white")) {
//       key.classList.add("white-active");
//       setTimeout(() => {
//         key.classList.remove("white-active");
//       }, 300);
//     } else {
//       key.classList.add("black-active");
//       setTimeout(() => {
//         key.classList.remove("black-active");
//       }, 300);
//     }
//   }
// }





function showPianoNotes(pianonotes) {

for( let i = 0; i < 12; i++ ) {
    let key = document.querySelector(`[data-note="${keys[i]}"]`);
    //console.log(key)
    // key.classList.remove(".white-active");
    // key.classList.remove(".black-active");
    // console.log(key.classlist);


    if (key.classList.contains("white")) {
      key.classList.remove("white-active");

    } else {
      key.classList.remove("black-active");
    }
  }

  
  for( let i = 0; i < pianonotes.length; i++ ) {
    let key = document.querySelector(`[data-note="${keys[pianonotes[i]]}"]`);
    //console.log(key)
    // key.classList.remove(".white-active");
    // key.classList.remove(".black-active");
    // console.log(key.classlist);


    if (key.classList.contains("white")) {
      key.classList.add("white-active");

    } else {
      key.classList.add("black-active");
    }
  }
}