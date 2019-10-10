$(document).ready(function(){

    let gameTarget = Math.floor(Math.random()*70) + 50;
    
    $("#game-target").text(gameTarget);
    let turtleVal1 = Math.floor(Math.random()*3) + 9;   
    let turtleVal2 = Math.floor(Math.random()*3) + 6;   
    let turtleVal3 = Math.floor(Math.random()*2) + 4;   
    let turtleVal4 = Math.floor(Math.random()*3) + 1;   
    

    let turtleSum = 0;
    
    $("#turtle-val1").on("click", function() 
    {
        // on each click add the turtleVal value to turtleSum 
        //display turtleSum.
        let resultDiv = $("#result");
        turtleSum = turtleVal1 + turtleSum;
        $(".score").text(turtleSum);
        if (turtleSum === gameTarget){
            resultDiv.text("you got it");
        }
        else if(turtleSum>gameTarget){
            resultDiv.text("nope! you lost")
        }
    });
    
    $(".score").text(turtleSum);
    
    $("#turtle-val2").on("click", function() 
    {
        // on each click add the turtleVal value to turtleSum 
        //display turtleSum.
        let resultDiv = $("#result");
         turtleSum = turtleVal2 + turtleSum
         $(".score").text(turtleSum);
         if (turtleSum === gameTarget){
            resultDiv.text("you got it")
        }
        else if(turtleSum>gameTarget){
            resultDiv.text("nope! you lost")
        }
    });
    
    $("#turtle-val3").on("click", function() 
    {
        //$("#turtle-val1").html("<img src='assets/images/donatello.jpg'/>");
        // on each click add the turtleVal value to turtleSum 
        //display turtleSum.
        let resultDiv = $("#result");
        turtleSum = turtleVal3 + turtleSum
        $(".score").text(turtleSum);
        if (turtleSum === gameTarget){
            resultDiv.text("you got it")
        }
        else if(turtleSum>gameTarget){
            resultDiv.text("nope! you lost")
        }
    });
    
    $("#turtle-val4").on("click", function() 
    {
        // on each click add the turtleVal value to turtleSum 
        //display turtleSum.
        let resultDiv = $("#result");
        turtleSum = turtleVal4 + turtleSum
        $(".score").text(turtleSum);
        if (turtleSum === gameTarget){
            resultDiv.text("you got it")
        }
        else if(turtleSum>gameTarget){
            resultDiv.text("nope! you lost")

        }
    });
    
});