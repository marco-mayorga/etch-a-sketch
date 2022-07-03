let color = "white"

// Selects the slider
let sliderValue = document.querySelector(".slider");
let sliderValueDiv = document.querySelector(".sliderText");

// Changes div above slider depending on value
sliderValue.oninput = function() {
    sliderValueDiv.innerHTML = `${this.value}X${this.value}`;
}

function makeBoard(size){
    let gridContainer = document.querySelector(".gridContainer");
    let gridItems = gridContainer.querySelectorAll("div");
    gridItems.forEach((div) => (div.remove()));
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Creates a default 16 by 16 grid adds the gridItem class and appends it to gridContainer
    let amount = size*size
    for(let i = 0; i <= amount; i++){
        let gridItems = document.createElement("div");
        gridItems.style.background = "black"
        gridContainer.insertAdjacentElement("beforeend",gridItems);
        gridItems.addEventListener("mouseover", colorOfGrid);
}}

makeBoard(16);

function chooseSize(input){
    makeBoard(input);
} 

function colorOfGrid(){
    if (color === 'random'){
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }else if (color === 'customColor') {
        let colorPickerValue = document.querySelector("#colorPicker");
        this.style.backgroundColor = `${colorPickerValue.value}`;
    }else{
        this.style.backgroundColor = color;
    }
}

function chooseColor(userChoice){
    color = userChoice;
}

function resetSketchBoard(){
    let gridContainer = document.querySelector(".gridContainer");
    let gridItems = gridContainer.querySelectorAll("div");
    gridItems.forEach((div) => div.style.backgroundColor = "black");
}