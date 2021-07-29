function isSubsetOf(svg_name, scaleNotes) {
    var fluteNotes = svg_name.replace('.svg', '').split`-`.map(x=>+x)
    for (let i = 0; i < fluteNotes.length; i++) {
        if (scaleNotes.indexOf(fluteNotes[i]) == -1) {
            return false;
        }
    }
    
    return true;
}

function HideFluteSVG(svg_name) {
    document.getElementById("svg_name").src = img.src.replace(toString(svg_name), "blank");
}

function displayFluteDiagrams(scaleNotes) {
    var allImages = document.querySelectorAll('.flute_svg');
    //console.log(allImages);
    allImages[0].src = 'trills/2-4.svg';
    allImages[1].src = 'trills/3-5.svg';
    allImages[2].src = 'trills/4-6.svg';
    allImages[3].src = 'trills/5-6.svg';
    allImages[4].src = 'trills/6-8.svg';
    allImages[5].src = 'trills/8-9.svg';
    allImages[6].src = 'trills/8-10.svg';
    allImages[7].src = 'trills/9-10.svg';
    allImages[8].src = 'trills/10-11.svg';
    allImages[9].src = 'trills/10-0.svg';
    allImages[10].src = 'trills/0-1.svg';
    allImages[11].src = 'trills/0-2.svg';
    allImages[12].src = 'trills/1-2.svg';
    allImages[13].src = 'trills/1-3.svg';


    for(var i = 0; i < allImages.length ; i++) {
      var parts = allImages[i].src.split("/");
      var result = parts[parts.length - 1];

      if (isSubsetOf(result, scaleNotes) === false) {
          allImages[i].src = 'trills/blank.svg';
      } 
    }
}