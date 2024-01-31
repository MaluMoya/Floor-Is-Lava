class Dice {
    constructor() {
        this.counter = 10;
        this.divTime = document.getElementById("time");
        this.startButton = document.getElementById("start-btn");
        this.diceButton = document.getElementById("throw-dice")
    }

    randomDice (){
        let randomNum = 0;
        //Create random Number:
        let randomNumber = Math.floor(Math.random()*6) +1;
        //Change image:
        randomNum = document.querySelector(".img1").setAttribute("src", "./Assets/images/dice"+ randomNumber +".png");
    } 

    startCountdown() {
        console.log("startCountdown called!");
        const intervalId = setInterval(() => {
            if (this.counter >= 0){
                this.divTime.innerHTML = this.counter;
                this.startButton.style.visibility = "hidden"
                
                //Esto cambia el texto del div del html en cada intervalo
                
            } else {
                clearInterval(intervalId)
                this.startButton.style.visibility = 'visible'
                this.counter = 10;
                this.divTime.innerHTML = this.counter;
            //showToast(divMessage)
          }
          this.counter--;
        }, 1000);
      }

            /*const startButton = document.querySelector("#startButton");
        setTimeout(() => {
            
    
    
        }, 7500)*/


    throwDice() {
        console.log("Dice thrown");
        this.randomDice();
    }
    clickStart() {
        console.log("Start button pressed");
        this.startButton.onclick = () => {
        this.startCountdown();
        };
    }
    
    clickDice() {
        console.log("Dice button pressed");
        this.diceButton.onclick = () => {
        this.randomDice();
        };
    }


                /*const deletePage = document.querySelector("#start-board");
                deletePage.remove()
                const newBoard = document.querySelector("#game-board");
                newBoard.style.visibility = 'visible'
                game = new Game(gameLives);
                const gameOverElement = document.querySelector('#gameOver')
                game.player.element.style.visibility = 'visible'*/
    }  

  







