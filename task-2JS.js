// VARIABLES
const batu_player = document.getElementById('batu-player');
const kertas_player = document.getElementById('kertas-player');
const gunting_player = document.getElementById('gunting-player');

const batu_bot = document.getElementById('batu-bot');
const kertas_bot = document.getElementById('kertas-bot');
const gunting_bot = document.getElementById('gunting-bot');

const winBox = document.getElementById('box');
const info = document.getElementById('h1');
const refresh = document.getElementById('refresh');

x = document.querySelector(".user_tools");
addElement1 = [...document.getElementsByClassName("diss_tools")];
const button = document.querySelector('button');


//BOT SIDE
function botThink() {
    var choices = ['Batu', 'Kertas', 'Gunting'];
    var randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices]
}

//COLOR CHANGE
function resultObject() {
    winBox.classList.add('winBox'),
        inFo.setAttribute("style", "font-size:36px; color:white;");

}
function resultDraw() {
    winBox.classList.add('drawBox');
        inFo.setAttribute("style", "font-size:36px; color:white;");

}

// WIN-DRAW-LOSE BOX
function win() {
    console.log("Player 1 Win");
    resultObject();
    inFo.innerText = "Player 1 WIN"

}

function draw() {
    console.log("Draw");
    resultDraw();
    inFo.innerText = "Draw"
}

function lose() {
    console.log("COM WIN");
    resultObject();
    inFo.innerText = "COM WIN"
}

//GAME COMPARE
function gameCompare(userChoices) {

    const computerUser = botThink ();
    console.log("User Result => " + userChoices);
    console.log("Result from => " + botThink);

    switch (userChoices + botThink) {
        case "BatuGunting":
        case "GuntingKertas":
        case "KertasBatu":
            win();

            break;
        case "GuntingBatu":
        case "BatuKertas":
        case "KertasGunting":
            lose();

            break;
        case "GuntingGunting":
        case "BatuBatu":
        case "KertasKertas":
            draw();
    }

    switch (botThink) {
        case "Batu":
            batu_bot.classList.add('chosen');

            break;
        case "Gunting":
            gunting_bot.classList.add('chosen');

            break;
        case "Kertas":
            kertas_bot.classList.add('chosen');
    }
}

//PLAYER CHOICE
function play() {
    batu_player.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Batu");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    kertas_player.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Kertas");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    gunting_player.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Gunting");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })
}

play();


//REFRESH LISTENER
refresh.addEventListener('click', function(){
    
    addElement1.forEach(addElement2 => {
        addElement2.removeAttribut("style", "cursor: not-allowed;pointer-events: none;")
    })
    winBox.classList.remove('winBox');
    winBox.classList.remove('drawBox');
    info.removeAttribute("style", "color: ''; font-size:'' ")

    info.style.marginTop = null
    info.style.fontSize = null
    info.innerText = "VS"
    button.disabled = false;
})