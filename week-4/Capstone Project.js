document.getElementById("questions").onsubmit=function() {
    color = parseInt(document.querySelector('input[name = "color"]:checked').value);
    island = parseInt(document.querySelector('input[name = "island"]:checked').value);
    cops = parseInt(document.querySelector('input[name = "cops"]:checked').value);
    weekend = parseInt(document.querySelector('input[name = "weekend"]:checked').value);
    
    result = color + island + cops + weekend;
    
document.getElementById("score").innerHTML = result;
document.getElementById("score").style.visibility = "hidden";

    if (result <= 2) {result2 = "Jimi Hendrix<br /><img src='jimihendrix.jpg' />"};
    if (result == 3) {result2 = "Eddie Van Halen<br /><img src='EHV.jpg' />"};
    if (result == 4) {result2 = "Eddie Van Halen<br /><img src='EVH.jpg' />"};
    if (result == 5) {result2 = "Eddie Van Halen<br /><img src='EVH.jpg' />"};
    if (result == 6) {result2 = "Eddie Van Halen<br /><img src='EVH.jpg' />"};
    if (result == 7) {result2 = "Tom Morello<br /><img src='tommorello.jpg' />"};
    if (result == 8) {result2 = "Tom Morello<br /><img src='tommorello.jpg' />"};
    if (result == 9) {result2 = "Tom Morello<br /><img src='tommorello.jpg' />"};
    if (result > 9) {result2 = "Jimmy Page<br /><img src='jimmypage.png' />"};

document.getElementById("score2").innerHTML = result2;

 return false;

}

    