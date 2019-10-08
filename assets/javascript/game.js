$(document).ready(function(){



    let image1 = " ";
    let image2 = " ";
    let image3 = " ";
    let image4 = " ";

    $("#random-button").on("click", function(){
        let random = "";
        for (let i=0; i<2; i++){
        let randomNum = Math.floor(Math.random()*2) +5;
            random = random + randomNum;
        }
        $("#random-button").text(random);
    })


   $("#image1").on("click", function() {
        image1++
    alert(image1);
   })
    $("#image2").on("click", function() {
            image2++
        alert(image2);
    })
    $("#image3").on("click", function() {
        image3++
    alert(image3);
    })
    $("#image4").on("click", function() {
        image4++
    alert(image4);
    })


})