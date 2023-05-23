class Object {
    constructor(){
        this.width = 100;
        this.height = 100;
        this.positionX = Math.random(Math.floor()) * 80;
        this.positionY = Math.random(Math.floor()) * 80;
        // this.positionX = 70;
        // this.positionY = 80;

        this.domELement = null;
        this.createDomElm();

        this.score = 0;
    }
    createDomElm(){
        // step1: create the element
        this.domElement = document.createElement("button")

        // step2: add content or modify (ex. innerHTML...)
        // this.domELement.id = "object";
        this.domElement.className = "object-blue";
        this.domElement.style.width = this.width + "px";
        this.domElement.style.height = this.height + "px";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        
        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);

    }
    buttonClicked(){
        let button = document.querySelector('.object-blue')
        button.addEventListener("click", () => {
            console.log('works1');
            changeColor();
        })
    }


}

let objArray = [];
const object = new Object();
const object2 = new Object();
objArray.push(object, object2);
// console.log(objArray);


function changeColor(){
    
    let button = document.querySelector('.object-blue')
    button.style.backgroundColor = "#ef1414";

    
    console.log('works2');
}
object.buttonClicked();
// object2.buttonClicked();
// objArray.forEach(function(objInstance){
//     objInstance.buttonClicked();
// }) no funciona porque al pulsar uno se activan los dos

setTimeout(function(){
    location.href = './game-over.html';
}, 60_000)