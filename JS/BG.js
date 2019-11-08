class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.gameWidth = width
        this.gameHeight = height

        this.height = this.gameHeight
        this.width = this.gameWidth

        this.posX = 0
        this.posY = 0

        this.velX = 0.3

        this.imgBg = new Image()
       // this.imgBg.src = ('../Images/candyland1pinkfade.png')
       
       this.album = ['../Images/candyland1pinkfade.png', '../Images/candyland1bluecopycopy.png']
       
       this.imgBg.src = this.album[0]

        this.true = true
    }
    draw() {
        this.ctx.drawImage(this.imgBg, this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.imgBg, this.posX + this.width, this.posY, this.width, this.height)
    }
    move() {
        this.posX -= this.velX
        if (this.posX <= -this.width) {
            this.posX = 0
        }
    }
}