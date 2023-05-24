class Object {
    constructor(){
        this.width = 100;
        this.height = 100;
        this.positionX = Math.random(Math.floor()) * 80;
        this.positionY = Math.random(Math.floor()) * 80;
        // this.positionX = 70;
        // this.positionY = 80;

        this.domElement = null;
        this.createDomElm();
        //create a this. for the parent element ("board")

        this.score = 0;
    }
    createDomElm(){
        // step1: create the element
        this.domElement = document.createElement("button")

        // step2: add content or modify (ex. innerHTML...)
        // this.domELement.id = "object";
        this.domElement.innerHTML = "<button id='button'>zzz</div>"
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



//TimeOut disappearence of the objects //
setTimeout(function(){
    removeElm();
}, 3000)
// ----------------------------------- //

// BUTTON CLICKING SECTION (multiple functions // ------------------- //)
function buttonClicked(){
    let button = document.querySelector('.object-blue')
    button.addEventListener("click", () => {
        console.log('buttonClick function works');
        changeColor();
        removeTimer();
        // this.removeElm()
        // setTimeout(this.removeElm().bind(this), 1000)
    })
}
function changeColor(){
    
    let button = document.querySelector('.object-blue')
    button.style.backgroundColor = "#ef1414";
    
    console.log('change color function works');
}
function removeElm(){
    const parentElm = document.getElementById("board");
    const childElm = document.querySelector(".object-blue")
    // const childElm = document.getElementsByClassName("object-blue")
    parentElm.removeChild(childElm);
}
function removeTimer(){
    setTimeout(function(){
        console.log('timeout for onclick remover works');
        removeElm();
    }, 1000)
}
// ----------------------------------------------------------------------- //

// Object class instances creations // --------------------//
let objArray = [];
const object = new Object();
// const object2 = new Object();
// objArray.push(object, object2);
// console.log(objArray);
// ------------------------------- //

// Interval for objects creation //
let intervalCount = 1;
setInterval(function(){
    // object.createDomElm();
    const object = new Object();
    // objArray.push(object);
    // console.log(objArray);
    console.log(intervalCount);
    intervalCount++;
}, 3500)
// ------------------------------- //


// buttonClicked function calling // --------------------//
buttonClicked()
// object.buttonClicked();
// object2.buttonClicked();
// objArray.forEach(function(objInstance){
//     objInstance.buttonClicked();
// }) no funciona porque al pulsar uno se activan los dos
//  ------------------------------//




// GAME OVER // ------------- //
setTimeout(function(){
    location.href = './game-over.html';
}, 60_000)
// -------------------------- //