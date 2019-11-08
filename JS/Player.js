class Player {
  constructor(ctx, width, height, keys) {
    this.ctx = ctx
    this.gameWidth = width
    this.gameHeight = height

    this.img = new Image()
    this.img.src = ("./Images/fat-png.png")

    this.playerWidth = 80
    this.playerHeight = 110

    this.onPlatform = false

    this.vel = 15
    this.velJump = 0
    this.velY = 1
    this.velX = 8
    this.horizontalPush = 0

    this.posX = 40
    this.posY = this.gameHeight * 0.98 - (this.playerHeight + 80)
    this.posY0 = this.gameHeight * 0.98 - (this.playerHeight + 80)
    this.floor = this.gameHeight * 0.98 - (this.playerHeight + 80)

    this.keys = keys

  }
  draw() {
    this.ctx.drawImage(this.img, this.posX, this.posY, this.playerWidth, this.playerHeight)
  }

  goLeft() {
    this.posX -= this.vel
  }

  goRight() {
    this.posX += this.vel
  }

  goUp() {
    if (this.posY >= this.posY0) {
      this.posY -= 150;
      this.velY -= 6;
      this.velJump = 5
    }
  }

  move() {
    this.onPlatform ? this.velY = 1 : null

    let gravity = 0.5
    if (this.posY <= this.posY0) {

      this.posX += this.velJump
      this.posY += this.velY;
      this.velY += gravity;

    } else {
      this.velY = 1;
      this.posY = this.posY0;
      this.velJump = 0

    }

  }

}