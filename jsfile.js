// an array that contains a short list of predictions

var predictions = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", 
"As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
"Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", 
"Outlook not so good.", "Very doubtful."];

console.log(predictions.join());

// formatted console statement that outputs the list using a loop

for ( var i = 0; i < predictions.length; i++) {
  console.log("%c" + predictions[i], "color: purple");
} 

// formatted console statement that outputs a random item from the list

var rand = Math.floor(Math.random() * predictions.length);
console.log("%c"+ predictions[rand], "color: red");

// the random prediction out to the page when it loads

document.getElementById("prediction").innerHTML = predictions[rand];

// Add a button to the page and generate a random prediction when the button is clicked

function getPrediction(){
    var newRand = Math.floor(Math.random() * predictions.length);
    document.getElementById("prediction").innerHTML = predictions[newRand];
}
