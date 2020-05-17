$(document).ready(function(){
    let winCounter = 0;
    let lossCounter = 0; 
    let counter = 0;
    let audio1 = new Audio("assets/audio/punch.wav")
    let audio2 = new Audio("assets/audio/alright.wav")
    let audio3 = new Audio("assets/audio/evilLaugh.wav", )
    let audio4 = new Audio("assets/audio/sword.wav")
    let audio5 = new Audio("assets/audio/slap.wav")
    let audio6 = new Audio("assets/audio/hit.wav")
    let audio7 = new Audio("assets/audio/turtles.mp3") 
    audio7.play();    
    
    restartGame();

    $("#winCounter").html(winCounter);
    $("#lossCounter").html(lossCounter);
    
    $(".score").text(counter);
    
    function restartGame() {
    audio7.play();            
        gameTarget = Math.floor(Math.random() * 70) + 50;
        $("#game-target").text(gameTarget);
        turtleVal1 = Math.floor(Math.random() * 3) + 1;
        turtleVal2 = Math.floor(Math.random() * 3) + 6;
        turtleVal3 = Math.floor(Math.random() * 2) + 4;
        turtleVal4 = Math.floor(Math.random() * 3) + 9;
        counter = 0;
        $(".score").text(0);
    
    }
    
    function win() {
        audio2.play();    
        winCounter ++;
        $("#winCounter").text(winCounter);
        restartGame();
    }
    
    function lose() {
        audio3.play();    
        lossCounter ++;
        $("#lossCounter").text(lossCounter);
        restartGame();
    }



    $("#turtle-val1").on("click", function() 
    {
        counter = counter + turtleVal1;
        audio1.play();

        $(".score").text(counter);

        if (counter === gameTarget)
        {
            win();
        }
        else if(counter>gameTarget){
            lose();        
        }
    });
        
    $("#turtle-val2").on("click", function() 
    {
        counter = counter + turtleVal2;
        audio4.play();
            $(".score").text(counter);

            if (counter === gameTarget)
            {
                win();
            }
            else if(counter>gameTarget){
                lose();
            }
    });
    
    $("#turtle-val3").on("click", function() 
    {
        counter = counter + turtleVal3;
        audio5.play();    
            $(".score").text(counter);

            if (counter === gameTarget)
            {
                win();
            }
            else if(counter>gameTarget){
                lose();
            }
    });
    
    $("#turtle-val4").on("click", function() 
    {
        counter = counter + turtleVal4;
        audio6.play();    
            $(".score").text(counter);

            if (counter === gameTarget)
            {
                win();
            }
            else if(counter>gameTarget){
                lose();
            }
    });
    
});