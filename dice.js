class Dice {
    constructor() {
        this.counter = 10;
        this.divTime = document.getElementById("time");
        this.startButton = document.getElementById("start-btn");
        this.diceButton = document.getElementById("throw-dice");
        this.movesLeft = document.getElementById ("moves-left");

    }

    randomDice (){
        let randomNum = 0;
        //Create random Number:
        let randomNumber = Math.floor(Math.random()*6) +1;
        //Change image:
        randomNum = document.querySelector(".img1").setAttribute("src", "./Assets/images/dice"+ randomNumber +".png");
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
            if (this.counter >= 0){
                this.divTime.innerHTML = this.counter;
                this.startButton.style.visibility = "hidden";
                
                //Esto cambia el texto del div del html en cada intervalo
                
            } else {

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
        this.randomDice();
        
        };
    }
    updateMoves() {
        this.movesLeft.innerText = this.movesLeft;
    }

    }  

  







