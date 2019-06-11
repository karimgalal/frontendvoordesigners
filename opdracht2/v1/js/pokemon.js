/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

// index
var i = 0;
// Array leven: [0] is speler, [1] is computer
var leven = [100, 100];
var buttons = document.querySelectorAll('input[type="button"]');


function updateLeven() {
    document.querySelectorAll('p')[1].textContent = "HP: " + leven[0] + "/100";
    document.querySelectorAll('p')[3].textContent = "HP: " + leven[1] + "/100";
    document.querySelectorAll("progress")[0].value = leven[0];
    document.querySelectorAll("progress")[1].value = leven[1];
}

updateLeven();

/*Suggestie van docent Fons van Kesteren om een parameter en return te gebruiken omdat ik dat eerst niet had.
  Genereert getal tussen 1 en 25. Code wel zelf bedacht en geschreven.*/
function randomNumber(min, max) {
    var damage = Math.floor((Math.random() * max) + min);
    return damage;
}

function computerAanval() {
    //Roept functie randomNumber aan en geeft het twee parameters mee. Vervolgens genereert getal tussen 1 en 25.
    var damage = randomNumber(1,25);

    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (damage >= leven[0]) {
        leven[0] = 0;
        document.querySelector('#charizard-image').hidden = true;
        document.querySelectorAll('h1')[2].textContent = "You lost.. Better luck next time!";
    } else {
        leven[0] -= damage;

        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    }

    updateLeven();
}

function spelerAanval() {
    //Roept functie randomNumber aan en geeft het twee parameters mee. Vervolgens genereert getal tussen 1 en 25.
    var damage = randomNumber(1,25);

    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (damage >= leven[1]) {
        leven[1] = 0;
        document.querySelector('#blastoise-image').hidden = true;
        document.querySelectorAll('h1')[2].textContent = "Great job, you won!";
    } else {
        leven[1] -= damage;
        setTimeout(computerAanval, 800);
    }

    updateLeven();
}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", spelerAanval);
}

/* Keypress eventlistener:  http://blogs.microsoft.co.il/gilf/2012/09/11/back-to-basics-using-keyboard-events-in-javascript/
Waarom Key inplaats van Keycode: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent*/
// Functie die het spel restart:
function restart(e){
    if (e.key == 'r') {
        location.reload();
    }
}

window.addEventListener('keypress', restart);