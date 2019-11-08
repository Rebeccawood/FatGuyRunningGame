class Points {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.gameWidth = width
        this.gameHeight = height

        this.posX = Math.floor(Math.random() * (this.gameWidth - 0) + 0)
        this.posY = Math.floor(Math.random() * (50 - 350) + 350)
        this.velX = 1;

        this.pointsHeight = 50
        this.pointsWidth = 60

    
        this.album = ["../Images/beer.png", "../Images/hamburger.png","../Images/fries.png" ]
        let imageRandom = Math.floor(Math.random() * (3 - 0) - 0)
        
        this.pointsImg = new Image()
        this.pointsImg.src = this.album[imageRandom]
    }
    draw() {
        this.ctx.drawImage(this.pointsImg, this.posX, this.posY, this.pointsWidth, this.pointsHeight)
    }

}