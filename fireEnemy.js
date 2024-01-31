console.log("FireEnemy Js is working!")

class Lava {
    constructor() {
        this.lava = document.createElement("div");
        this.lava.classList.add("lava");
        this.width = this.lava.getBoundingClientRect().width;
        this.height = this.lava.getBoundingClientRect().height;
        this.xMax = 7;
        this.yMax = 7;
        this.x = 0;
        this.y = 0;
        this.lavaPosition();
        //Better put it at the end:
        array[this.y][this.x].appendChild(this.lava);
    }
    lavaPosition() {
        let randomPositionX = Math.floor(Math.random() * (this.xMax))
        let randomPositionY = Math.floor(Math.random() * (this.yMax))


        //While loop que funciona con condiciones. Mientras suceda esto, vamos a cambiar random position.
        while (randomPositionX === 0 && randomPositionY === 0 || randomPositionX === 1 && randomPositionY === 0 || randomPositionX === 0 && randomPositionY === 1) {
            randomPositionX = Math.floor(Math.random() * (this.xMax))
            randomPositionY = Math.floor(Math.random() * (this.yMax))
        }

        //Si no tenemos definidas estas propiedades en el constructor, js lo va a crear:
        this.x = randomPositionX
        this.y = randomPositionY

        
    }
}