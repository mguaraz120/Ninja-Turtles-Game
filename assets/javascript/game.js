$(document).ready(function(){
    let winCounter = 0;
    let lossCounter = 0;
    
    let gameTarget = Math.floor(Math.random()*70) + 50;
    $("#game-target").text(gameTarget);

    let turtleVal1 = Math.floor(Math.random()*3) + 9;   
    let turtleVal2 = Math.floor(Math.random()*3) + 6;   
    let turtleVal3 = Math.floor(Math.random()*2) + 4;   
    let turtleVal4 = Math.floor(Math.random()*3) + 1;   
    
    

    $("#winCounter").html(winCounter);
    $("#lossCounter").html(lossCounter);
    
    let counter = 0;
    $("#score").text(counter);
    
    function restartGame() {
          
    gameTarget = Math.floor(Math.random() * 70) + 50;
    $("#game-target").text(gameTarget);
    turtleVal1 = Math.floor(Math.random() * 3) + 1;
    turtleVal2 = Math.floor(Math.random() * 3) + 6;
    turtleVal3 = Math.floor(Math.random() * 2) + 4;
    turtleVal4 = Math.floor(Math.random() * 3) + 9;
    counter = 0;
    $("#score").text(counter);
    
    }
    
    function win() {
    
        alert("You win!");
        winCounter ++;
        $("#winCounter").text(winCounter);
        restartGame();
    }
    
    function lose() {
    
        alert("You lose!");
        lossCounter ++;
        $("#lossCounter").text(lossCounter);
        restartGame();
    }



    $("#turtle-val1").on("click", function() 
    {
        counter = counter + turtleVal1;

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

            //turtleSum = turtleVal2 + turtleSum
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

            //turtleSum = turtleVal3 + turtleSum
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

            //turtleSum = turtleVal4 + turtleSum
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