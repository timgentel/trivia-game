/* i couldnt figure out the last bit 

*/

$(document).ready(function(){
    $("#start").show();
    $("#resualts").hide();
    $("#questions").hide();

    $( "#startButton" ).click(function() {
        startquiz()
    
       
      }); 
    function startquiz(){
        $("#questions").show();
        $("#resualts").hide();
        $("#start").hide();
        
        
        var number = 10;
        var intervalId;
        var unanswereds = 0;
        var correctAnswers = 0;
        var wrongAnswers = 0;
        run()
        
        $("#submit").click(function(){
            restart()
        });
             $("#restart").click(function(){

                $("#questions").show();
                
            });  
              

        
              function restart(){
                checker()
                $("#correct-answers").text(correctAnswers)
                $("#unanswered").text(unanswereds)
                $("#incorrect-answers").text(wrongAnswers)
                $("#resualts").show();
                $("#questions").hide();
                $("#questions").hide(); 
               
                   
               
            }
        
        
            function checker(){
                var ans1=$('input[name=question1]:checked').val()
                let ans2=$('input[name=question2]:checked').val()
                let ans3=$('input[name=question3]:checked').val()
                let ans4=$('input[name=question4]:checked').val()
                let ans5=$('input[name=question5]:checked').val()
                let ans6=$('input[name=question6]:checked').val() 
            
            
                if(!ans1) {
                        
                        unanswereds++
                        console.log(unanswereds)
                    } else if (ans1=="c"){
                        correctAnswers++
                    
                    }else{
                        wrongAnswers++
                }

                if(!ans2) {
                    
                    unanswereds++
                    console.log(unanswereds)
                } else if (ans2=="b"){
                    correctAnswers++
                    
                }else{
                    wrongAnswers++
                }

                if(!ans3) {
                    unanswereds++
                    console.log(unanswereds)
                } else if (ans3=="b"){
                    correctAnswers++
                    
                }else{
                wrongAnswers++
                }
                
                if(!ans4) {
                    
                    unanswereds++
                    console.log(unanswereds)
                } else if (ans4=="c"){
                    correctAnswers++
                    
                }else{
                    wrongAnswers++
                }
                        
                if(!ans5) {
                    
                    unanswereds++
                    console.log(unanswereds)
                } else if (ans5=="d"){
                    correctAnswers++

                }else{
                    wrongAnswers++
                }
                if(!ans6) {
                    unanswereds++
                    console.log(unanswereds)
                } else if (ans6=="c"){
                    correctAnswers++
                }else{
                    wrongAnswers++
                }
            }; 
        

        
            function run() {
                decrement()
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
                
                function decrement() {
            
                    //  Decrease number by one.
                    number--;
                    
                    $("#timer").text(number)
                    
                    if (number === 0) {
    
                        
                        timesUp();

                        
                    }
                }
                function timesUp(){
                    clearInterval(intervalId);
                    number = 10;
                    
                    restart()
                    }
                
            }
        }
   
    
});
