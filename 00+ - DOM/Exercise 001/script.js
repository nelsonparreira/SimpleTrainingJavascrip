// Javascript Exercise 001

// Change to a string in the box
/*
function changeSomething(){

    var elem = document.getElementById("box");
    elem.innerHTML = "Good You done it!";
}
*/

// Change the paragraph
function changeSomething(){

    var elem = document.getElementById("box");
    elem.childNodes[3].textContent = "Good You done it!";
}
