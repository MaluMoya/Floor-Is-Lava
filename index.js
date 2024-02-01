console.log ("Index Js is working!")

/*---------------------------------  DOM  and VARIABLES ---------------------------------*/

//DIV BOARD
let divGameBoard = document.getElementById ("div-board");
let gameOverToast = document.getElementById("game-over");
let youWonToast = document.getElementById("you-won");
let refreshButtonLoser = document.querySelector('#restart-game-lose');
let refreshButtonWinner = document.querySelector('#restart-game-won');
//Game variables:

//DICE: 
const dice = new Dice();
dice.clickStart()
dice.clickDice();

//NEW GAME: 
let newGame;

/*--------------------------------- FUNCTIONS ---------------------------------*/

//Leave empty array
let array = [];

function addGrid (){
    for (let i = 0; i < 8; i++){

        //push elements from first loop
        array.push([]);
        //We do a for loop inside of the other to create and 8x8 grid

        for (let j = 0; j < 8; j++){

        //Create div with it's class and apend it
        const divGrid = document.createElement("div")
        divGrid.classList.add("div-grid")
        divGameBoard.appendChild(divGrid)

        //hacemos push a la fila que se creo para crear las columnas
        array[i].push(divGrid);

        //Add style/Column & Rows
        //j+1 es porque array empieza desde 0 pero grid empieza desde 1
        //empieza en columna j y ocupa 1 sola columna, eso es lo que significa `${j+1}/span 1`
        divGrid.style.gridColumn = `${j+1}/span 1`;     
        divGrid.style.gridRow = `${i+1}/span 1`; 

        //Create black and white in the divs
            if ((i + j) % 2 === 0) {
                divGrid.classList.add("white");
            } else {
                divGrid.classList.add("black");
            }      
        }

    }
}

addGrid();

const refreshPageLoser = () => {
    location.reload();
  }
  
refreshButtonLoser.addEventListener('click', refreshPageLoser)

const refreshPageWinner = () => {
    location.reload();
  }
  
refreshButtonWinner.addEventListener('click', refreshPageWinner)


/*--------------------------------- EVENT-LISTENERS ---------------------------------*/




document.addEventListener("keydown", (event) => {
    console.log(event);
    if (!newGame.gameOver) {
        newGame.player.move(event.key);
    }
})

