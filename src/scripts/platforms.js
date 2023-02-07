class Platform{
    constructor({x, y}, ctx){
        this.ctx = ctx
        this.plateformImage = new Image()
        this.plateformImage.onload = () => {
            // const img = await loadImage('../images/background.png')
            this.ctx.drawImage(this.plateformImage, this.position.x, this.position.y, this.width, this.height)
            console.log(this.plateformImage)
        }
        this.position = {
            x,
            y
        }
        this.width = 250
        this.height = 150
        this.plateformImage.src = '../images/background.png'
    }
    draw(){
        this.ctx.drawImage(this.plateformImage, this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.ctx.draw()
        this.ctx.update()
    }
}

export default Platform;
