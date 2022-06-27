// Creates a 16 by 16 grid adds the gridItem class and appends it to gridContainer
for(let i = 1; i <= 16*16; i++){
    let gridItem = document.createElement("div");
    gridItem.className = "gridItem";
    document.getElementById("gridContainer").appendChild(gridItem);
};


