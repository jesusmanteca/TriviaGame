$("#startButton").on("click", function() {
    $("#startButton").hide()
    setInterval (tic, 1000)
})
var timer = 120
function tic () {
    timer = timer - 1
    $("#timer").text(timer + " Seconds")
}
