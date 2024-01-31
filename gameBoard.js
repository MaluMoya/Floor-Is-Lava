console.log ("GameBoard Js is working!")

class Game {
    constructor (difficulty){
        //We create 2 empty arrays for the lava and furniture to appear.
        this.lavaArray = [];
        this.furnitureArray = [];
        //We create new player when game starts:
        this.player = new Player();  
        //start the game with gameover false    
        this.gameOver = false;
        //set lives and difficulty:
        this.lives = 3;
        this.difficulty = difficulty;
        //set number of lavas and furniture: 
        this.lavaEnemies = 3;
        this.furniturePieces = 5;
        //Spawn (Poner huevos) lava and furniture 
        this.spawnLava();
        this.spawnFurniture();

    }
    updateLives() {
        document.querySelector("#lives").innerText = this.lives;
        if (this.lives <= 0) {
            this.gameOver = true;
        }
    }
    spawnLava(){
        //Create for loop to create as many lavas as the lavaenemies number per difficulty is set:
        for (let i = 1; i <= this.lavaEnemies; i++){
            
            this.lavaArray.push(new Lava ());
        }
    }

    spawnFurniture (){
        for (let i = 1; i <= this.furniturePieces; i++){
            this.furnitureArray.push(new Furniture ());
        }
    }

}