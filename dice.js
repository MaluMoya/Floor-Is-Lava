class Dice {
    constructor() {
        this.counter = 10;

        //Esto solo se ejecuta cuando empieza el juego:
        this.counterDice = this.randomDice();
        this.divTime = document.getElementById("time");
        this.startButton = document.getElementById("start-btn");
        this.diceButton = document.getElementById("throw-dice");
        this.divTitle = document.getElementById("div-title");
        this.movesLeftElement = document.querySelector("#remaining-moves");



    }

    randomDice() {
        let randomNum = 0;

        //Create random Number:
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        //Change image:

        randomNum = document.querySelector(".img1").setAttribute("src", "./Assets/images/dice" + randomNumber + ".png");
        return randomNumber;
    }
    clickStart() {
        console.log("Start button pressed");
        this.startButton.onclick = () => {
            this.startCountdown();
            newGame = new Game(3);
        };
    }

    startCountdown() {
        console.log("startCountdown called!");
        const intervalId = setInterval(() => {
            if (this.counter >= 0) {
                this.divTime.innerHTML = this.counter;
                this.startButton.style.visibility = "hidden";

                //Esto cambia el texto del div del html en cada intervalo

            } else {
                newGame.gameOver = true
                divToast.style.visibility = "visible";
                clearInterval(intervalId)
                this.startButton.style.visibility = "visible";
                this.counter = 10;
                this.divTime.innerHTML = this.counter;
                //showToast(divMessage)
            }
            this.counter--;
        }, 1000);
    }




    clickDice() {
        console.log("Dice button pressed");
        this.diceButton.onclick = () => {
            const number = this.randomDice();
            this.counterDice = number

            this.remainingMoves()
            //this.movesLeft(); 

        };
    }

    remainingMoves() {

        //Create a counter from the random number to 0. 
        console.log("Moves Left called!");

        newGame.player.movesLeft = this.counterDice;
        if (this.counterDice >= 0) {
            this.movesLeftElement.innerHTML = this.counterDice;
            this.diceButton.style.visibility = "hidden";

            //Esto cambia el texto del div del html en cada intervalo

        } else {

            this.diceButton.style.visibility = "visible";
      
            this.movesLeftElement.innerHTML = this.counterDice;
            //showToast(divMessage)
        }
        //this.counterDice--; We'll do this in tge movement

    }
}




/*
movesLeft() {
    let movesLeft = 0;
    const createMovesLeft = document.createElement("p");
    console.log ("moves");
        createMovesLeft.classList.add("moves-left");
        createMovesLeft.appendChild(this.divTitle);

    createMovesLeft.innerHTML = movesLeft + randomNumber;
}

 
updateMoves() {
    this.movesLeft.innerText = this.movesLeft;
}*/










