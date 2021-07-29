class TablatureManager {
    constructor() {
        $(document).ready(function() {
            $('#select_instrument').on('change', function() {
                if (this.value == '0') {
                    $("#mandolin_container").show();
                } else if (this.value == '1') {
                    $("#guitar_container").show();
                } else if (this.value == '2') {
                    $("#banjo_container").show();
                } else if (this.value == '3') {
                    $("#ukulele_container").show();
                } else if (this.value == '4') {
                    $("#flute_container").show();
                } else if (this.value == '5') {
                    $("#piano_container").show();
                } else if (this.value == '6') {
                    $("#notation_container").show();
                } else if (this.value == '7') {
                    $("#chordstext_container").show();
                } else if (this.value == '8') {
                    $("#chordcircle_container").show();
                } else if (this.value == '9') {
                    $("#snharp_container").show();
                }
            });
        });
    }

    setScale(key = random(Object.keys(data["scales"]))) {
        var keyData = data["scales"][key]

        showPianoNotes(keyData.pitch_classes);
        displayFluteDiagrams(keyData.pitch_classes);
        showGuitarNotes(keyData.pitch_classes);
        showCircleChords(keyData.chords);

        return [key, keyData]
    }
}