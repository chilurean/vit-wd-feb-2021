document.getElementById("questions").onsubmit=function() {
    color = parseInt(document.querySelector('input[name = "color"]:checked').value);
    island = parseInt(document.querySelector('input[name = "island"]:checked').value);
    cops = parseInt(document.querySelector('input[name = "cops"]:checked').value);
    weekend = parseInt(document.querySelector('input[name = "weekend"]:checked').value);
    
    result = color + island + cops + weekend;
    
document.getElementById("score").innerHTML = result;
document.getElementById("score").style.visibility = "hidden";

    if (result <= 2) {result2 = "You Are<br />Jimi Hendrix<br /><video src='Purple Haze.mp4' controls />"};
    if (result == 3) {result2 = "You Are<br />Eddie Van Halen<br /><video src='Eruption.mp4' controls />"};
    if (result == 4) {result2 = "You Are<br />Eddie Van Halen<br /><video src='Eruption.mp4' controls />"};
    if (result == 5) {result2 = "You Are<br />Eddie Van Halen<br /><video src='Eruption.mp4' controls />"};
    if (result == 6) {result2 = "You Are<br />Eddie Van Halen<br /><video src='Eruption.mp4' controls />"};
    if (result == 7) {result2 = "You Are<br />Tom Morello<br /><video src='RATM.mp4' controls />"};
    if (result == 8) {result2 = "You Are<br />Tom Morello<br /><video src='RATM.mp4' controls />"};
    if (result == 9) {result2 = "You Are<br />Tom Morello<br /><video src='RATM.mp4' controls />"};
    if (result > 9) {result2 = "You Are<br />Jimmy Page<br /><video src='JP.mp4' controls />"};

document.getElementById("score2").innerHTML = result2;

 return false;

}

    