$(document).ready(function() {

$("#startButton").on("click", function() {
    $("#startButton").hide();
    setInterval (tic, 1000);
    $("#questions").toggle();
})
var timer = 120
function tic () {
    timer = timer - 1
    $("#timer").text(timer + " Seconds ");
}
function check(){
    document.getElementById("afterDone").style.visibility = "visible";
}


})
