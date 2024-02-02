console.log("Solo Player Js is working!")

class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.updatePlayerPosition()
        this.xMax = 7;
        this.yMax = 7;
        this.movesLeft = 0;
        this.element = document.querySelector("#player");


    }

    updatePlayerPosition() {
        const playerElement = document.getElementById("player")

        //We delete the element and create a new one. 
        //Kill it and create a clone:
        if (playerElement) {
            playerElement.remove();

        }

        let player = document.createElement("div");
        player.id = "player";
        array[this.y][this.x].appendChild(player);

        
        //create enemy with array [random]
        //if enemey position === furnitur

    }
    /*
    updatePlayerBoiling() {
        const playerBoilingElement = document.getElementById("playerBoiling");
        
        // Remove existing playerBoiling element
        if (playerBoilingElement) {
            playerBoilingElement.remove();
        }
    
        let playerBoiling = document.createElement("div");
        playerBoiling.id = "playerBoiling";
        array[this.y][this.x].appendChild(playerBoiling);

        if (playerBoiling) {
            playerBoiling.remove();
        }



        
        //create enemy with array [random]
        //if enemey position === furnitur

    }*/
    move(direction) {

        if (this.movesLeft > 0) {
            console.log(direction)
            switch (direction) {
                case "ArrowUp":
                    this.y -= 1
                    this.movesLeft--;
                    dice.movesLeftElement.innerHTML = this.movesLeft;
                    break;
                case "ArrowDown":
                    this.y += 1
                    this.movesLeft--;
                    dice.movesLeftElement.innerHTML = this.movesLeft;
                    break;
                case "ArrowLeft":
                    this.x -= 1
                    this.movesLeft--;
                    dice.movesLeftElement.innerHTML = this.movesLeft;
                    break;
                case "ArrowRight":
                    this.x += 1
                    this.movesLeft--;
                    dice.movesLeftElement.innerHTML = this.movesLeft;
                    break;
            }

            if (this.movesLeft === 1 || this.movesLeft === 0) {
                dice.diceButton.style.visibility = "visible";

            }
        }
        /*
        dice.randomNum--;
        console.log(`Moves left: ${this.movesLeft}`);
        } else {
            console.log("No more moves left!");
        }*/
        this.checkForBoundaries()
        this.burntTest()
        this.updatePlayerPosition();
        this.collectFurniture();
    }




    checkForBoundaries() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.x >= this.xMax) {
            this.x = this.xMax;
        }
        if (this.y >= this.yMax) {
            this.y = this.yMax;
        }
    }
    burntTest() {
        newGame.lavaArray.forEach((lava) => {

            if (this.x === lava.x && this.y === lava.y) {
                console.log("BUUUUUUUUUURN")
                // Increase the count of collected furniture pieces
                newGame.lavaEnemies++;

            // Remove the collected furniture from the game
                lava.lava.remove();

            // Find the index of the collected furniture in the furnitureArray
                const Index = newGame.lavaArray.indexOf(lava);

            // Remove the collected furniture from the furnitureArray
                newGame.lavaArray.splice(Index, 1);

                
                //this.updatePlayerBoiling()
                let lavaSound = new Audio('./Assets/sounds/flame.ogg');

                lavaSound.play();
                newGame.lives -= 1;
                newGame.updateLives();
            }



        });
    }
    collectFurniture() {
        newGame.furnitureArray.forEach((furniture) => {

            if (this.x === furniture.x && this.y === furniture.y) {
                console.log("SAVED!!")
                newGame.furniturePieces++
                furniture.furniture.remove();
                const Index = newGame.furnitureArray.indexOf(furniture);

                newGame.furnitureArray.splice(Index, 1);
            }
            if (newGame.furnitureArray.length === 0) {
                let winningSound = new Audio('./Assets/sounds/winningSong.mp3');
                winningSound.play();
                youWonToast.style.visibility = "visible";

            }


        });
    }


}