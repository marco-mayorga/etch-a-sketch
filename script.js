// Selects the slider and makes the div above display grid size
let sliderValue = document.querySelector(".slider");
let sliderValueDiv = document.querySelector(".sliderText");
sliderValueDiv.innerHTML = `${sliderValue.value}X${sliderValue.value}`;
let gridArea = sliderValue.value**2;
sliderValue.oninput = function() {
    sliderValueDiv.innerHTML = `${this.value}X${this.value}`;
}


// Creates a 16 by 16 grid adds the gridItem class and appends it to gridContainer
for(let i = 1; i <= gridArea; i++){
    let gridItems = document.createElement("div");
    let gridContainer = document.getElementById("gridContainer");
    gridItems.className = "gridItem";
    gridContainer.appendChild(gridItems);
}



const buttons = document.querySelectorAll("button");
const colorMode = buttons[0];
const randomColorMode = buttons[1];
const eraser  = buttons[2];
const clearSketch = buttons[3];
let gridItems = document.querySelectorAll(".gridItem");
for (const gridItem of gridItems){
    gridItem.addEventListener("mouseover", colorGridItems);
}
colorMode.addEventListener("click", () => {
    colorMode.classList.toggle("clickedButton");
    randomColorMode.classList = "button";
    eraser.classList = "button";
    for (const gridItem of gridItems){
        gridItem.removeEventListener("mouseover", randomColorModeFunc);
        gridItem.removeEventListener("mouseover", eraserFunc);
        gridItem.addEventListener("mouseover", colorGridItems);
    }
})
randomColorMode.addEventListener("click", () => {
    randomColorMode.classList.toggle("clickedButton");
    colorMode.classList = "button";
    eraser.classList = "button";
    for (gridItem of gridItems){
        gridItem.removeEventListener("mouseover", colorGridItems);
        gridItem.removeEventListener("mouseover", eraserFunc);
        gridItem.addEventListener("mouseover", randomColorModeFunc);
    }
})
eraser.addEventListener("click", () => {
    eraser.classList.toggle("clickedButton");
    colorMode.classList = "button";
    randomColorMode.classList = "button";
    for (const gridItem of gridItems){
        gridItem.removeEventListener("mouseover", colorGridItems);
        gridItem.removeEventListener("mouseover", randomColorModeFunc);
        gridItem.addEventListener("mouseover", eraserFunc);
    }
    
})

clearSketch.addEventListener("click", () => {
    for (const gridItem of gridItems){
        gridItem.style.backgroundColor = "#000000";
    }
})

// Change etch a sketch color
function colorGridItems() {
    let colorPickerValue = document.querySelector("#colorPicker");
    this.style.backgroundColor = `${colorPickerValue.value}`;
}

// etch a sketch eraser

function eraserFunc(){
    for (const gridItem of gridItems){
        this.style.backgroundColor = "black"
    }
}

// random etch a sketch color
function randomColorModeFunc() {
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    this.style.backgroundColor =`rgb(${randomR}, ${randomG}, ${randomB})`;
    console.log(gridItems.style.backgroundColor);
}