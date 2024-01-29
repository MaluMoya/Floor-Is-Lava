console.log ("Index Js is working!")

/*---------------------------------  DOM ---------------------------------*/

let divGameBoard = document.getElementById ("div-board");


/*--------------------------------- FUNCTIONS ---------------------------------*/


function addGrid (){
    for (let i = 0; i < 8; i++){

        //We do a for loop inside of the other to create and 8x8 grid

        for (let j = 0; j < 8; j++){

        //Create div with it's class and apend it
        const divGrid = document.createElement("div")
        divGrid.classList.add("div-grid")
        divGameBoard.appendChild(divGrid)

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



function randomDice (random){
    //Create random Number
    let randomNumber = Math.floor(Math.random()*6) +1;
    //Change image 
    document.querySelector(".dice1").setAttribute("src", "images/dice"+ randomNumber+".png");
}






