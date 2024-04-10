function getUserInput(){
    let flag = true;
    let gridSize = "";
    while(flag){
        gridSize = prompt("please enter the grid size you want to create for the canvas.");
        try {
            gridSize = parseInt(gridSize);
            if (gridSize <= 100 && gridSize > 0){
                flag = false;
            } 
        }catch (error) {
            console.log(error)
        }
    };
    return gridSize
};

function generateGrid(size){
    let gridCont = document.querySelector('.gridCont');
    let gridRow = '';
    let gridCell = '';
    for(let i = 1 ; i<=size; i++){
        gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        rowSize = parseInt(800/size);
        gridRow.style.cssText = `border: 1px solid gray;height: ${rowSize}px !important; width:100%;box-sizing:border-box`
        for(let j = 1; j<=size; j++){
            gridCell = document.createElement('div');
            gridCell.classList.add('gridCell');
            cellSize = parseInt(800/size);
            console.log(cellSize)
            gridCell.style.cssText = `border: 1px solid gray; width: ${cellSize}px !important; height: ${cellSize}px !important;box-sizing:border-box`
            eventListener(gridCell);
            gridRow.appendChild(gridCell);
        }
        gridCont.appendChild(gridRow);
    }
};
function createGrid(){
    let userInput = getUserInput();
    let grid = document.querySelector('.gridCont');
    grid.replaceChildren();
    generateGrid(userInput);
    console.log(userInput);
}
function eventListener(ele){
    ele.addEventListener("mouseover", (e)=>{
        console.log('')
        let colorSelected = selectedColor.value;
        if(isRandom && isRandom.checked){
            colorSelected = getRandomColor();
        }
        e.srcElement.style["background-color"] = colorSelected;
        let opacity = e.srcElement.style.opacity;
        if( !isRandom.checked){
            if (opacity !== ""){
                opacity = parseFloat(opacity);
                if(opacity < 1){
                    e.srcElement.style.opacity = (opacity+0.1).toFixed(1);
                }
            }else{
                e.srcElement.style.opacity = "0.1";
            }
        }
    })
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }
function getRandomColor(){
    if(isRandom && isRandom.checked){
        let rgbR=getRandomInt(0,255); 
        let rgbB = getRandomInt(0,255);
        let rgbG = getRandomInt(0,255);
        let colorString = `rgb(${rgbR},${rgbB},${rgbG})`
        return colorString;
    }
}
let selectedColor = document.querySelector("#colorPickerId");
let isRandom = document.querySelector('#rainbowTrail');
let gridBtn = document.querySelector('#createGrid')
gridBtn.addEventListener('click',(data)=>{
    console.log(data)
    createGrid();
})