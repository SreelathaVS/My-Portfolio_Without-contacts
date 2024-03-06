var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0 ;
function nextSequence () {
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++
}
var userClickedPattern=[];
$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length);
    
})
function playSound(name) {
    var audio = new Audio('./sounds/'+ name+".mp3");
    audio.play();
}
function animatePress(currentColour) {
        $('#'+currentColour).addClass("pressed");
        setTimeout(function(){
            $('#'+currentColour).removeClass("pressed");
        },100);
}
var started = false; 
$(document).on("keydown", function() {
    if (!started) {
        nextSequence();
        $("#level-title").text("level 1" )
        started = true ;
    }
    
})
function checkAnswer (currentLevel) {
    if (userClickedPattern[currentLevel -1 ] === gamePattern[currentLevel -1]) {
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence()
                $("#level-title").text("level "+ level )
            }, 1000);
        
        }
    }   else {
        console.log("Wrong");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game over. Press any key to Restart")
        startOver();
        
    }
}
function startOver () {
    level = 0;
    gamePattern=[];
    started = false ;
}



