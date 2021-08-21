function get_shuffled_indices(n) { 
    const a = Array(n).fill().map((e, i) => i); 
    for (let l = n; l > 0; --l) { a.push(a.splice(Math.floor(Math.random() * l), 1)[0]); }
    return a;
}
let contents = ["Hello", "I", "am", "your", "friendly", "Web", "page"];
let vals = ["1px", "3px", "5px", "7px", "9px", "11px", "13px"];

var x = get_shuffled_indices(7);  // Generate 7 random values. The number 7 corresponds to the number of elements that are to be clicked

var my_elements = document.getElementsByClassName("elem"); // Retrieve all relevant elements of the page

//Set the borderWidth of relevant elements to random values
for(let i = 0; i < x.length; i++){
    my_elements[i].style.borderWidth = vals[x[i]];
}

//Variable to keep track of the current stage in the game
var curr_value = 0;

//Set click event listeners for each relevant element
for(let i = 0; i < my_elements.length; i++){
    my_elements[i].addEventListener("click", function() { tracking(this)} );
}

// If the user hasn't made a mistake or finished the game, check the clicked element's border against the current stage in the game to see if the user chose correctly.
function tracking(elem){
    if (curr_value != "stop"){
        //If there is a mistake
        if(elem.style.borderWidth != vals[curr_value]){
            document.getElementById("info").innerHTML = "You have made a mistake. Reload the page to play again.";
            curr_value = "stop";    // When a mistake is made set this to stop so the function won't work anymore unless the page is reset
        }
        else
            curr_value = curr_value + 1;    // Move on to the next stage of the game
        
        // If the end is reached successfully
        if (curr_value == 7){
            document.getElementById("info").innerHTML = "Well done! Reload the page to play again.";
            curr_value = "stop"; // When a mistake is made set this to stop so the function won't work anymore unless the page is reset
        }

    }
}