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
let gridBtn = document.querySelector('#createGrid')
gridBtn.addEventListener('click',(e)=>{
    console.log(e)
    createGrid();
})