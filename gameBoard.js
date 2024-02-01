console.log ("GameBoard Js is working!")

class Game {
    constructor (lives){
        //We create 2 empty arrays for the lava and furniture to appear.
        this.lavaArray = [];
        this.furnitureArray = [];
        this.player = new Player();          //We create new player when game starts         
        this.gameOver = false;  //start the game with gameover false 
        this.lives = lives;        //set lives and difficulty
        this.difficulty = 1;
        this.lavaEnemies = 3;        //set number of lavas and furniture
        this.furniturePieces = 3;
        this.spawnLava();         //Spawn (Poner huevos) lava and furniture 
        this.spawnFurniture();


    }
    updateLives() {
        document.getElementById("lives").innerText = this.lives;
        if (this.lives <= 0) {
            this.gameOver = true;
            divToast.style.visibility = "visible";
        }
    }
    spawnLava(){
        //Create for loop to create as many lavas as the lavaenemies number per difficulty is set:
        for (let i = 1; i <= this.lavaEnemies; i++){
            //furniture.cellFull(randomPositionX, randomPositionY);
            this.lavaArray.push(new Lava ());
        }
    }

    spawnFurniture (){
        for (let i = 1; i <= this.furniturePieces; i++){
            this.furnitureArray.push(new Furniture ());
        }
    }


}
