console.log ("GameBoard Js is working!")

class Game {
    constructor (){
        this.enemies = [];
        this.player = new Player(100, 100);
        this.gameOver = false;
        this.lives = lives;
        this.updateLives();
    }
    updateLives() {
        document.querySelector("#lives").innerText = this.lives;
        if (this.lives <= 0) {
            this.gameOver = true;
        }

    }



}