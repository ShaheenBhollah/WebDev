const defs = {
    am : "To be in first person singular",
    your : "Second person singular or plural possesive adjective",
    page : "Sheet in book or on Web site"
};

//retrieve multiple elements which have both the classes 'elem' and 'active'
var set_to_grey = document.getElementsByClassName("elem active");

//need a loop since multiple elements were retrieved
for (let i = 0; i < set_to_grey.length; i++) {
    set_to_grey[i].style.color = "darkgray";
  }

function processWord(word){
    var info;

    //Set the value of info according to the parameter passed in
    if (word == "am")
        info = defs.am;
    else if (word == "your")
        info = defs.your;
    else if (word == "page")
        info = defs.page;
    else
        info = "";

    //retrieve the value of the input element
    var inputVal = document.getElementById("the-input").value;

    //depending of the value inside the input element format the value of info accordingly
    if(inputVal == "upper")
        info = info.toUpperCase();
    else if(inputVal == "space")
        info = info.replaceAll(' ', '&nbsp;&nbsp;&nbsp;');

    //Set the content of the element with id info to the value of the info variable
    document.getElementById("info").innerHTML = info;
}

// Add event listeners to all relevant elements. Use a loop since multiple elements retrieved earlier.
for (let i = 0; i < set_to_grey.length; i++) {
    set_to_grey[i].addEventListener("click", function() { processWord(set_to_grey[i].innerHTML)} );
  }
