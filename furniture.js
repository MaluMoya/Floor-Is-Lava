console.log("Furniture Js is working!")

class Furniture {
    constructor() {
        this.furniture = document.createElement("div");
        this.furniture.classList.add("furniture");
        this.width = this.furniture.getBoundingClientRect().width;
        this.height = this.furniture.getBoundingClientRect().height;
        this.xMax = 7;
        this.yMax = 7;
        this.x = 0;
        this.y = 0;
        this.furniturePosition();
        //We append furniture and lava to the array of the grid. Not the board
        array[this.y][this.x].appendChild(this.furniture);
    }
    furniturePosition() {
        let randomPositionX = Math.floor(Math.random() * (this.xMax))
        let randomPositionY = Math.floor(Math.random() * (this.yMax))


        //While loop que funciona con condiciones. Mientras suceda esto, vamos a cambiar random position.
        while (randomPositionX === 0 && randomPositionY === 0 || this.cellFull(randomPositionX, randomPositionY)) {
            randomPositionX = Math.floor(Math.random() * (this.xMax))
            randomPositionY = Math.floor(Math.random() * (this.yMax))
        }
        //Si no tenemos definidas estas propiedades en el constructor, js lo va a crear:
        this.x = randomPositionX
        this.y = randomPositionY


    }
    cellFull(randomPositionX, randomPositionY) {
        console.log(array[randomPositionY][randomPositionX].hasChildNodes());
        return array[randomPositionY][randomPositionX].hasChildNodes();
    }
    

}