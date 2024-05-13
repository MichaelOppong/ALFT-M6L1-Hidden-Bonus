//Solve the secret challenges in order!
//Challenge 10: Change the color of all elements in the "moves" class to white. 
//Challenge 11: In the JavaScript section of the code, set the variable "x" equal to zero. 
//Challenge 12: Use innerHTML to set the value of ".counter" every time a button is clicked. If you did it right, your move counter should increase by 1 every time you click a button (including the refresh button). Can you explain how the counter keeps going up?
//Challenge 13: Align the buttons vertically. 
//Challenge 14: Modify the game to make it more fun, or make your own game using what you learned about JS so far!


document.addEventListener("DOMContentLoaded", function() {
    let x;

    function toggleElementVisibility(elementClass) {
        var elements = document.querySelectorAll("." + elementClass);
        elements.forEach(function(element) {
            if (element.style.visibility === "hidden" || element.style.visibility === "") {
                element.style.visibility = "visible";
            } else {
                element.style.visibility = "hidden";
            }
        });
    }

    document.querySelector(".one").addEventListener("click", function() {
        toggleElementVisibility("five");
    });

    document.querySelector(".two").addEventListener("click", function() {
        toggleElementVisibility("four");
    });

    document.querySelector(".three").addEventListener("click", function() {
        toggleElementVisibility("seven");
    });

    document.querySelector(".four").addEventListener("click", function() {
        toggleElementVisibility("eight");
    });

    document.querySelector(".five").addEventListener("click", function() {
        toggleElementVisibility("three");
    });

    document.querySelector(".six").addEventListener("click", function() {
        toggleElementVisibility("two");
    });

    document.querySelector(".seven").addEventListener("click", function() {
        toggleElementVisibility("six");
    });

    document.querySelector(".eight").addEventListener("click", function() {
        toggleElementVisibility("one");
    });

    document.querySelector(".b1").addEventListener("click", function() {
        let elements = document.querySelectorAll(".common");
        elements.forEach(function(element) {
            element.style.visibility = "visible";
        });
        document.querySelector(".one").style.visibility = "visible";
    });
});
