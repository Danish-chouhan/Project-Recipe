var breakfast = document.getElementById("Breakfast")
var lunch = document.getElementById("Lunch")
var snack = document.getElementById("Snack")
var dinner = document.getElementById("Dinner")

// slecting buttons

// breakfast

function breakfastFunction() {
    if (breakfast.textContent == "Breakfast") {
        document.getElementById("Recipe").innerHTML = "Breakfast Recipe"
        document.getElementById("Recipe-tourtorial").innerHTML = "Breakfast Recipe-tourtorial"
        document.getElementById("Products").innerHTML = "Breakfast Products"
    }
}

// lunch

function lunchFunction() {
    if (lunch.textContent == "Lunch") {
        document.getElementById("Recipe").innerHTML = "Lunch Recipe"
        document.getElementById("Recipe-tourtorial").innerHTML = "Lunch Recipe-tourtorial"
        document.getElementById("Products").innerHTML = "Lunch Products"
    }
}

// snack

function snackFunction() {
    if (snack.textContent == "Snack") {
        document.getElementById("Recipe").innerHTML = "Snack Recipe"
        document.getElementById("Recipe-tourtorial").innerHTML = "Snack Recipe-tourtorial"
        document.getElementById("Products").innerHTML = "Snack Products"
    }
}

// dinner

function dinnerFunction() {
    if (dinner.textContent == "Dinner") {
        document.getElementById("Recipe").innerHTML = "Dinner Recipe"
        document.getElementById("Recipe-tourtorial").innerHTML = "Dinner Recipe-tourtorial"
        document.getElementById("Products").innerHTML = "Dinner Products"
    }
}

// -----------------


