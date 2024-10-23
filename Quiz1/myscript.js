// Delete variables
var val1 = 3;
var val2 = 8;
var myName = "Semmy Wellem Taju";

// Handle click button
document.getElementById("my-btn").addEventListener("click", function() {
    myName = "Piter Pan";
    //cal function
    myFunction(myName, val1, val2);
});

// Create a function
function myFunction(name, a, b) {
    name = "Putri Seregar";
    var value = a * b;
    var join = "Name: "+name+" ("+value+")";
    document.getElementById("value-demo").innerHTML = join;
}