

// / // <!-- psuedo-code:

// //  --> once the game begins:

// <!--  first thing: you must generate a random number.  -->


 function startGame()
{
function random(){
tarNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
diamond = Math.floor(Math.random() * (12 - 1 + 1)) + 19;
ruby = Math.floor(Math.random() * (12 - 1 + 1)) + 19;
sapphire = Math.floor(Math.random() * (12 - 1 + 1)) + 19;
emerald = Math.floor(Math.random() * (12 - 1 + 1)) + 19;
console.log(tarNumber);
 };

// var tarNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// var diamond = Math.floor(Math.random() * (12 - 1 + 1)) + 19;

// var ruby = Math.floor(Math.random() * (12 - 1 + 1)) + 19;

// var sapphire = Math.floor(Math.random() * (12 - 1 + 1)) + 19;

// var emerald = Math.floor(Math.random() * (12 - 1 + 1)) + 19;

// <!-- var for each player score -->



// // <!-- onclickfunction: 

// // use variable to record what number the user clicks -->

// // $('#IMAGES CLASS').click(function(event) {

// // // if attribute is ruby, then increase player score by 4
// // // if attribute is diamond, then increase player score by 6
// // if attribute is sapphire, then increase player score by 2
// // if attribute is emerald, then increase player score by 4
// }

$( '#ruby', '#emerald', "#diamond", "#sapphire" ).click(function(event) {

     if (userAnswer == ruby) {
        score++ +4
       } else { (userAnswer == diamond)
        score++ +6
       } else { (userAnswer == sapphire)
        score++ +2
       } else { (userAnswer == emerald)
        score++ +4
      }
     });

}
// <!-- compare the players score to the target score -->

compare the players score to the target score

while (player score is less than target) {
    statement

    while the players score is less than the target, they will keep playing. when the score is eaqual to the number, then it jumps out of the while loop
}
var i = 0; 
while(i<=10){

}


// <!-- if then statement: -->

if the random number equals the target score, you win
if less than target score, click agin
if over target score, you loose

must enclose all code into a larger function so you can restart the game

}
startGame();