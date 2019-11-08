class Bullets {
    constructor(ctx, posY, posY0, posX, playerHeight) {
        this.ctx = ctx

        this.posX = posX
        this.posYO = posY0
        this.posY = posY

        this.playerHeight = playerHeight

        this.radius = 6;
        this.velX = 8;
        this.velY = 1;

        this.gravity = 0.25;
    }
    draw() {

        this.ctx.beginPath()
        this.ctx.fillStyle = "black";
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.posX += this.velX
        this.posY += this.velY
        this.velY += this.gravity

        if (this.posY >= this.playerHeight + this.posY0) {
            this.velY *= -1 //Si llegan al suelo invertimos su velocidad para que "reboten"
        }
    }
}