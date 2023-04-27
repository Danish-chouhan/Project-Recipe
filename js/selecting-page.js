var breakfast = document.getElementById("Breakfast")
var lunch = document.getElementById("Lunch")
var snack = document.getElementById("Snack")
var dinner = document.getElementById("Dinner")

// slecting buttons

// breakfast

function breakfastFunction() {
    if (breakfast.textContent == "Breakfast") {
        document.getElementById("Recipe").innerHTML = "Breakfast-Recipe"
        document.getElementById("Recipe-tourtorial").innerHTML = "Breakfast Recipe-tourtorial"
        document.getElementById("Products").innerHTML = "Breakfast Products"
    }
}

// lunch

function lunchFunction() {
    if (lunch.textContent == "Lunch") {
        document.getElementById("Recipe").innerHTML = "Lunch-Recipe"
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

let centerItems1 = document.getElementById("Recipe")
let centerItems2 = document.getElementById("Recipe-tourtorial")
let centerItems3 = document.getElementById("Product").addEventListener("click", Selecting3())


function Selecting1() {
    if (centerItems1.textContent == "Breakfast-Recipe") {
        document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img1.jpg'>"   
        document.getElementById("block2").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img2.jpg'>"
        document.getElementById("block4").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img3.jpg'>"
        document.getElementById("block6").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img4.jpg'>"
        document.getElementById("block8").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img5.jpg'>"
        document.getElementById("block10").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img6.jpeg'>"
        document.getElementById("block12").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img7.jpg'>"
        document.getElementById("block14").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img8.jpg'>"
        document.getElementById("block16").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img9.jpg'>"
        document.getElementById("block18").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img10.webp'>"
        document.getElementById("block20").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img11.jpg'>"
        document.getElementById("block22").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img12.jpg'>"
        document.getElementById("block24").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img13.jpg'>"
        document.getElementById("block26").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img14.jpg'>"
        document.getElementById("block28").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
        document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img15.png'>"
        document.getElementById("block30").innerHTML = "<h1>hlw </h1> <p>nskjnxjnskn</p>"
    }
}
function Selecting2(){
    if(centerItems2.innerText == "Breakfast Recipe-tourtorial"){
        document.getElementById("block1").innerHTML = 'HLwknskn'
    }
}

// function Selecting11() {
//     if (centerItems1.textContent == "Lunch-Recipe") {
//         document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/lunch-img/img15.jpg'>"
//     }
// }


// function Selecting2() {
//     if (centerItems2.textContent == "") {
//         document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img1.jpg'>"
//         document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img2.jpg'>"
//         document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img3.jpg'>"
//         document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img4.jpg'>"
//         document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img5.jpg'>"
//         document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img6.jpeg'>"
//         document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img7.jpg'>"
//         document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img8.jpg'>"
//         document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img9.jpg'>"
//         document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img10.webp'>"
//         document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img11.jpg'>"
//         document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img12.jpg'>"
//         document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img13.jpg'>"
//         document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img14.jpg'>"
//         document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img15.png'>"
//     }
// }function Selecting2() {
//     if (centerItems2.textContent == "Breakfast-Recipe") {
//         document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img1.jpg'>"
//         document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img2.jpg'>"
//         document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img3.jpg'>"
//         document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img4.jpg'>"
//         document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img5.jpg'>"
//         document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img6.jpeg'>"
//         document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img7.jpg'>"
//         document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img8.jpg'>"
//         document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img9.jpg'>"
//         document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img10.webp'>"
//         document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img11.jpg'>"
//         document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img12.jpg'>"
//         document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img13.jpg'>"
//         document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img14.jpg'>"
//         document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img15.png'>"
//     }
// }

// function Selecting3() {
//     if (centerItems3.textContent == "e") {
//         document.getElementById("block1").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img1.jpg'>"
//         document.getElementById("block3").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img2.jpg'>"
//         document.getElementById("block5").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img3.jpg'>"
//         document.getElementById("block7").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img4.jpg'>"
//         document.getElementById("block9").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img5.jpg'>"
//         document.getElementById("block11").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img6.jpeg'>"
//         document.getElementById("block13").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img7.jpg'>"
//         document.getElementById("block15").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img8.jpg'>"
//         document.getElementById("block17").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img9.jpg'>"
//         document.getElementById("block19").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img10.webp'>"
//         document.getElementById("block21").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img11.jpg'>"
//         document.getElementById("block23").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img12.jpg'>"
//         document.getElementById("block25").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img13.jpg'>"
//         document.getElementById("block27").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img14.jpg'>"
//         document.getElementById("block29").innerHTML = "<img src='../img/Selecting-page/breakfast-img/img15.png'>"
//     }
// }