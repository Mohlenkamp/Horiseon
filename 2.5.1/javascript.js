function grow(id) {
    document.getElementById(id).style.height = "300px";
    document.getElementById(id).style.width = "300px";
}
function blue(id) {
    document.getElementById(id).style.backgroundColor = "blue";
}
function reset(id) {
    document.getElementById(id).style.height = "150px";
    document.getElementById(id).style.width = "150px";
    document.getElementById(id).style.backgroundColor = "orange"
    document.getElementById(id).style.opacity = 1; 
}
function fade(id) {  //copied from Stack Overflow
    var fadeTarget = document.getElementById(id);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}