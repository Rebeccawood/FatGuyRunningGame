class Platform {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.gameWidth = width
        this.gameHeight = height

        this.posY = Math.floor(Math.random() * (400 - 100) + 100)
        this.posX = this.gameWidth

        this.velX = 1;

        this.platformHeight = 75
        this.platformWidth = 180

        this.platformImg = new Image()
        this.platformImg.src = ("./Images/Pizza.png")
    }
    draw() {
        this.ctx.drawImage(this.platformImg, this.posX, this.posY, this.platformWidth, this.platformHeight)
    }
    move() {
        this.posX -= this.velX
    }
}