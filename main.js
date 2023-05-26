class Object {
    constructor() {
        this.width = 60;
        this.height = 60;
        this.positionX = Math.random(Math.floor()) * 80;
        this.positionY = Math.random(Math.floor()) * 80;
        // this.positionX = 70;
        // this.positionY = 80;

        this.domElement = null;
        this.createDomElm();
        //create a this. for the parent element ("board")

        this.score = 0;
    }
    createDomElm() {
        // step1: create the element
        this.domElement = document.createElement("button")

        // step2: add content or modify (ex. innerHTML...)
        // this.domELement.id = "object";
        this.domElement.innerHTML = "<button id='button'></div>"
        this.domElement.className = "object-blue";
        this.domElement.style.width = this.width + "px";
        this.domElement.style.height = this.height + "px";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        // console.log(this.domElement);

        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }

}

// TIMER & SCORE //
let timer;
// let score;
let timerHtml = document.getElementById("timer");
let scoreHtml = document.getElementById("score");

function timerFunction() {
    let sec = 59;
    timer = setInterval(() => {
        timerHtml.innerText = '00:'+sec;
        sec--;
    }, 1000)
}
timerFunction();

let points = 0;
function addScore() {
    points++;
    scoreHtml.innerText = `${points}`;
}
// ------------- //

//TimeOut disappearence of the objects //
// setTimeout(function () {
//     removeElm();
// }, 3000)
// ----------------------------------- //

// BUTTON CLICKING SECTION (multiple functions // ------------------- //)
function buttonClicked() {
    let button = document.querySelector('.object-blue')
    button.addEventListener("click", () => {
        console.log('buttonClick function works');
        changeColor();
        removeTimer();

        addScore();
        // this.removeElm()
        // setTimeout(this.removeElm().bind(this), 1000)
    })
}
function changeColor() {

    let button = document.querySelector('.object-blue')
    button.style.backgroundColor = "#ef1414";

    console.log('change color function works');
}
function removeElm() {
    const parentElm = document.getElementById("board");
    const childElm = document.querySelector(".object-blue")
    // const childElm = document.getElementsByClassName("object-blue")
    parentElm.removeChild(childElm);
}
function removeTimer() {
    setTimeout(function () {
        console.log('timeout for onclick remover works');
        removeElm();
    }, 1000)
}
// ----------------------------------------------------------------------- //

// Object class instances creations // --------------------//
let objArray = [];
// const object = new Object();
// const object2 = new Object();
// objArray.push(object, object2);
// console.log(objArray);
// ------------------------------- //

// Interval for objects creation //

let intervalCount = 1;

setInterval(function () {
    const newObject = new Object();
    objArray.push(newObject);
    // console.log(objArray);
    buttonClicked();
    intervalCount++;
    setTimeout(function () {
        removeElm();
    }, 1500)
}, 2000);

objArray.forEach(function () {
    // buttonClicked();
    setTimeout(function () {
        removeElm();
    }, 3000)
    console.log('1');
})
// ------------------------------- //


// GAME OVER // ------------- //
setTimeout(function () {
    location.href = './game-over.html';
    localStorage.setItem('final-score', points);
}, 60_000)
// -------------------------- //

