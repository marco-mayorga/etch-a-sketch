for(let i = 1; i < 16*16; i++){
    let gridItem = document.createElement("div");
    gridItem.className = "gridItem";
    document.getElementById("gridContainer").appendChild(gridItem);
    gridItem.textContent = i;
};
