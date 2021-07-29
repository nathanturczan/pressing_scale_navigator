var render_notation;
const vex_notes = ["c/4", "c#/4", "d/4", "eb/4", "e/4", "f/4", "f#/4", "g/4", "g#/4", "a/4", "bb/4", "b/4"];
const accidentals = 	{"c/4": "n", 
					"c#/4": "#", 
					"d/4": "n", 
					"eb/4": "b", 
					"e/4": "n", 
					"f/4": "n", 
					"f#/4": "#", 
					"g/4": "n", 
					"g#/4": "#", 
					"a/4": "n", 
					"bb/4": "b", 
					"b/4": "n"};

	
VF = Vex.Flow;


render_notation = function (key) {

	var notation_container = document.getElementById("notation")
	//clear all child elems of notation
	while (notation_container.firstChild) {
    	notation_container.removeChild(notation_container.firstChild);
	}



	var renderer = new VF.Renderer("notation", VF.Renderer.Backends.SVG);
	renderer.resize(500, 130);

	
	//console.log("is this working?", scales[key].pitch_classes)
	// Create an SVG renderer and attach it to the DIV element named "notation".
	

	// Configure the rendering context.
	
	var context = renderer.getContext();
	context.setFont("Arial", 10, "");
	
	//context.rect(0, 0, 450, 200, { stroke: 'none', fill: 'white' });
	// Create a stave of width 400 at position 10, 40 on the canvas.
	var stave = new VF.Stave(10, 20, 600);
	//stave.setStyle({fillStyle: "white", strokeStyle: "white"});

	// Add a clef and time signature.
	stave.addClef("treble");

	function render_lilypond_to_vexflow(lilypond_string) {

		//convert string using split
		var split_by_space = lilypond_string.split(" ");
		//walk thru all spaces, convert letter into vexflow notes : b/4
		//append "/4" to the end of each
		//convert "s" into ""

		
		var notes = [];
		const convert_inflection = {"s": "#", "ss": "##", "f": "b", "ff": "bb", "": "n"}
		const convert_octavation = {"''": "/6", "'": "/5", "": "/4" };

		split_by_space.forEach(function(element) {
  			var re_lilypond_note = /^([a-g])(s|ss|f|ff|)('|''|)$/
			//match returns an array pf what it matched: whats the note, acidental and octave??
			//pass gi2567756bg3h45g : match_obj will be NULL
			var match_obj = element.match(re_lilypond_note);

			if (match_obj === null) {
				return [];

			}

			var base_note_name = match_obj[1];
			var inflection = match_obj[2];
			var octavation = match_obj[3];

			if (inflection == ""){
				notes.push(new VF.StaveNote({clef: "treble", keys: [base_note_name + convert_octavation[octavation]], duration: "q" }))
			}
			else {
				notes.push(new VF.StaveNote({clef: "treble", keys: [base_note_name + convert_octavation[octavation]], duration: "q" }).
				addAccidental(0, new VF.Accidental(convert_inflection[inflection])));
			}
			
			

		});
		return notes;
		


	}
	var notes = render_lilypond_to_vexflow(lilypond_spellings[key]);
	
	// Connect it to the rendering context and draw!
	stave.setContext(context).draw();

	
	// Create a voice in 4/4 and add above notes
	if (notes.length == 7){
		var voice = new VF.Voice({num_beats: 7,  beat_value: 4});
	} else if (notes.length == 6){
		var voice = new VF.Voice({num_beats: 6,  beat_value: 4});
	} else if (notes.length == 8){
		var voice = new VF.Voice({num_beats: 8,  beat_value: 4});
	}
	
	voice.addTickables(notes);

	// Format and justify the notes to 400 pixels.
	var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

	// Render voice
	voice.draw(context, stave);



	}