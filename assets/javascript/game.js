// GLOBAL VARIABLES
// ------------------------------------------------------------------------------------------------------
// Arrays and Variables for holding data
var random = 0;
var sapphire = 0;
var ruby = 0;
var diamond = 0;
var emerald = 0;
var user = 0;

   // Game Counters

var wins = 0;
var losses = 0;
var totalscore = 0;

// FUNCTIONS (resusable blocks of code that I will call upon when needed )
// ------------------------------------------------------------------------------------------------------

// start of game: regenerating a new random number, displaying the current wins and losses, and generate new random numbers for the crystals

// function to give you a random number at start
function startGame () {
    random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    emerald = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    ruby = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    diamond = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    sapphire = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

   $("#random").text(random);
}
// onclick function

  $("#emerald" ).click(function() {
  console.log( "clicked emerald." );
  totalscore += emerald;
  console.log(totalscore);
 $ ("#totalscore").text(totalscore);
 
  if(totalscore == random) {
  	 win++;
  	  document.querySelector('#wins').innerHTML = wins;
          $('#wins').html(win);
          startGame();
          alert('Congratulations,You Win!');
          //reset game
          reset();
   if (totalscore !==random){
   	    losses++;
	       $('#losses').html(losses);
          document.querySelector("#loSsses").innerHTML = loss;
          alert('Too bad, So sad, You lose!');
          //reset game
          reset();
        }
        }
        });

 $("#ruby" ).click(function() {
 console.log( "clicked ruby.");
 totalscore += ruby;
 console.log(totalscore);
 $("#totalscore").text(totalscore);
   if(totalscore == random) {
  	 win++;
  	  document.querySelector('#wins').innerHTML = wins;0
          $('#wins').html(win);
          startGame();
          alert('Congratulations,You Win!');
          //reset game
          reset();
   if (totalscore !==random){
   	    losses++;
	       $('#losses').html(losses);
          document.querySelector("#loSsses").innerHTML = loss;
          alert('Too bad, So sad, You lose!');
          //reset game
          reset();
        }
        }
        });

$("#diamond" ).click(function() {
 console.log( "clicked diamond.");
 totalscore += diamond;
 console.log(totalscore);
 $("#totalscore").text(totalscore);
 $("#totalscore").text(totalscore);
   if(totalscore == random) {
  	 win++;
  	  document.querySelector('#wins').innerHTML = wins;
          $('#wins').html(win);
          startGame();
          alert('Congratulations,You Win!');
          //reset game
          reset();
   if (totalscore !==random)
   {
   	    losses++;
	       $('#losses').html(losses);
          document.querySelector("#loSsses").innerHTML = loss;
          alert('Too bad, So sad, You lose!');
          //reset game
          reset();
        }
        }
        });
$("#sapphire" ).click(function() {
 console.log( "clicked sapphire.");
 totalscore += sapphire;
 console.log(totalscore);
 $("#totalscore").text(totalscore);
 $("#totalscore").text(totalscore);
   if(totalscore == random) {
  	 win++;
  	  document.querySelector('#wins').innerHTML = wins;
          $('#wins').html(win);
          startGame();
          alert('Congratulations,You Win!');
          //reset game
          reset();
 if (totalscore !==random) {
    	    losses++;
	       $('#losses').html(losses);
          document.querySelector("#loSsses").innerHTML = loss;
          alert('Too bad, So sad, You lose!');
          //reset game
          reset();
        }
        }
	    });
// Testing/Debugging

var randomnumber= "????"

// MAIN PROCESS
// --------------------------------------------------------------------------------------------------------

// initiates the code for the first time:
 startGame();

// Register Keyclicks

$()

document.onclick = function(event) {
   var emerald = String.fromCharCode(event.keyCode).toLowerCase();
}

document.onclick = function(event) {
   var ruby = String.fromCharCode(event.keyCode).toLowerCase();
}
document.onclick = function(event) {
   var diamond = String.fromCharCode(event.keyCode).toLowerCase();
}
document.onclick = function(event) {
   var sapphire = String.fromCharCode(event.keyCode).toLowerCase();
}

console.log(emerald);

// Functions

// Main Process
