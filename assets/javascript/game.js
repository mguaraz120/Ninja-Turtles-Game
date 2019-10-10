$(document).ready(function(){
    
    let gameTarget = Math.floor(Math.random()*70) + 50;
    
    $("#game-target").text(gameTarget);
    let turtleVal1 = Math.floor(Math.random()*3) + 9;   
    let turtleVal2 = Math.floor(Math.random()*3) + 6;   
    let turtleVal3 = Math.floor(Math.random()*2) + 4;   
    let turtleVal4 = Math.floor(Math.random()*3) + 1;   
    
    
    let turtleSum = 0;
    var lockGame = false;

    $("#turtle-val1").on("click", function() 
    {
        // on each click add the turtleVal value to turtleSum 
        //display turtleSum.
        if (lockGame !== true) 
        {
            let resultDiv = $("#result");
            turtleSum = turtleVal1 + turtleSum;
            $(".score").text(turtleSum);

            if (turtleSum === gameTarget)
            {
                resultDiv.text("you got it");
                lockGame = true;
                location.reload(true);
            }
            else if(turtleSum>gameTarget){
                resultDiv.text("nope! you lost") 
                lockGame = true;
                location.reload(true);        
            }
        }
    });
        
    $("#turtle-val2").on("click", function() 
    {
        if (lockGame !== true) 
        {
            let resultDiv = $("#result");
            turtleSum = turtleVal2 + turtleSum
            $(".score").text(turtleSum);

            if (turtleSum === gameTarget)
            {
                resultDiv.text("you got it")
                lockGame = true;
                location.reload(true);
            }
            else if(turtleSum>gameTarget){
                resultDiv.text("nope! you lost") 
                lockGame = true;
                location.reload(true);
            }
        }
    });
    
    $("#turtle-val3").on("click", function() 
    {
        if (lockGame !== true) 
        {
            let resultDiv = $("#result");
            turtleSum = turtleVal3 + turtleSum
            $(".score").text(turtleSum);

            if (turtleSum === gameTarget)
            {
                resultDiv.text("you got it")
                lockGame = true;
                location.reload(true);
            }
            else if(turtleSum>gameTarget){
                resultDiv.text("nope! you lost")
                lockGame = true;
                location.reload(true);
            }
        }
    });
    
    $("#turtle-val4").on("click", function() 
    {
        if (lockGame !== true) 
        {
            let resultDiv = $("#result");
            turtleSum = turtleVal4 + turtleSum
            $(".score").text(turtleSum);

            if (turtleSum === gameTarget)
            {
                resultDiv.text("you got it")
                lockGame = true;
                location.reload(true);
            }
            else if(turtleSum>gameTarget){
                resultDiv.text("nope! you lost")
                lockGame = true;
                location.reload(true);
            }
        }
    });
    
});