console.log ("Solo Player Js is working!")

class Player {
    constructor() {
        this.x = 0; 
        this.y = 0;
        this.updatePlayerPosition()
        this.xMax = 7;
        this.yMax = 7;
    }

    updatePlayerPosition(){
        const playerElement =  document.getElementById("player")
        //We delete the element and create a new one. 
        //Kill it and create a clone:
        if(playerElement){
            playerElement.remove();
        }
        let player = document.createElement("div");
        player.id = "player";
        array[this.y][this.x].appendChild(player);
        //create enemy with array [random]
        //if enemey position === furnitur

    }
    move(direction) {
        
        console.log (direction)
        switch (direction) {
            case "ArrowUp":
                this.y -= 1
                break;
            case "ArrowDown": 
                this.y += 1
                break;
            case "ArrowLeft":
                this.x -= 1
                break;
            case "ArrowRight":
                this.x += 1
                break;
        };

        
        this.checkForBoundaries()
        this.updatePlayerPosition();
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
    

}