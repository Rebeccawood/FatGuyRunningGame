class Enemy {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.gameWidth = width
        this.gameHeight = height

        this.posX = 40
        this.posY = this.gameHeight * 0.65

        this.velX = 1;

        this.enemyHeight = 120
        this.enemyWidth = 140

        this.album = ["../Images/enemy1.png", "../Images/enemy2.png", "../Images/enemy3.png"]
        let imageRandom = Math.floor(Math.random() * (3 - 0) - 0)

        this.image = new Image()
        this.image.src = this.album[imageRandom]

    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.enemyWidth, this.enemyHeight)
    }
    move() {
        this.posX += this.velX
    }
}