const Game = {
    title: "Fat Guy Running",
    author: "Rebecca Wood",
    canvasDom: undefined,
    ctx: undefined,
    player: undefined,
    enemy: [],
    points: [],
    background: undefined,
    height: undefined,
    width: undefined,
    fps: 60,
    framesCounter: 0,
    keys: {
        up: 38,
        right: 39,
        left: 37,
        space: 32,
    },
    score: undefined,
    platform: [],

    // ----------------------------- GAME START ------------------------------------ //

    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.start()
        this.setEventListeners()
        this.playMusic()
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvasDom.width = this.width
        this.canvasDom.height = this.height
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {

            this.framesCounter++
            if (this.framesCounter > 1000) this.framesCounter = 0

            this.clear()
            this.drawAll()
            this.moveAll()

            this.generatePlatform()
            this.generatePoints()
            this.generateEnemy()

            this.clearPlatform()
            this.clearEnemy()
            this.clearPoints()

            this.platformCollisions()
            this.enemyCollisions()
            this.pointCollisions()

        }, 1000 / this.fps);
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.width, this.height, this.keys)
        this.enemy = []
        this.platform = []
        this.scoreboard = scoreboard
        this.scoreboard.init(this.ctx)
        this.score = 0
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    drawAll() {
        this.background.draw()
        this.enemy.forEach(enemy => enemy.draw());
        this.platform.forEach(platform => platform.draw());
        this.points.forEach(points => points.draw());
        this.player.draw()
        this.drawScore()
    },

    moveAll() {
        this.background.move()
        this.player.move()
        this.platform.forEach(platform => platform.move());
        this.enemy.forEach(enemy => enemy.move());
    },

    playMusic() {
        document.getElementById('background').play()
    },

    // ------------------------ GENERATE OBSTACLES -------------------------------- //

    generatePlatform() {
        if (this.framesCounter % 420 == 0) {
            this.platform.push(new Platform(this.ctx, this.width, this.height))
        }
    },

    generateEnemy() {
        if (this.framesCounter % 400 == 0) {
            this.enemy.push(new Enemy(this.ctx, this.width, this.height))
        }
    },

    generatePoints() {
        if (this.framesCounter % 580 == 0) {
            this.points.push(new Points(this.ctx, this.width, this.height))
        }
    },

    // ------------------------ CLEAR OBSTACLES -------------------------------- //

    clearPlatform() {
        this.platform.forEach((platform, idx) => {
            if (platform.posX <= 0) {
                this.platform.splice(idx, 1);

            }
        });
    },

    clearEnemy() {
        this.enemy.forEach((enemy, idx) => {
            if (enemy.posX <= 0) {
                this.enemy.splice(idx, 1);

            }
        });
    },

    clearPoints() {
        this.points.forEach((points, idx) => {
            if (points.posX <= 0) {
                this.points.splice(idx, 1);

            }
        });
    },

    // ---------------------------- OBSTACLE COLLSIONS --------------------------- //

    platformCollisions() {
        this.player.posY0 = this.player.floor
        this.player.onPlatform = false

        this.platform.forEach(platform => {
            if (this.player.posY + this.player.playerHeight > platform.posY + 10 &&
                this.player.posX + this.player.playerWidth > platform.posX + 40 &&
                this.player.posX < platform.posX + platform.platformWidth - 40 &&
                this.player.posY < platform.posY + platform.platformHeight - 30) {

                this.player.onPlatform = true
                this.player.posY = platform.posY - this.player.playerHeight + 20
                this.player.posY0 = this.player.posY
                this.player.velJump = -1
            }
        })
    },

    enemyCollisions() {
        this.enemy.forEach(enemy => {
            if (this.player.posY + this.player.playerHeight > enemy.posY + 55 &&
                this.player.posX + this.player.playerWidth > enemy.posX + 50 &&
                this.player.posX < enemy.posX + enemy.enemyWidth - 50 &&
                this.player.posY < enemy.posY + enemy.enemyHeight) {
                this.gameOver()
            }
        })
    },

    pointCollisions() {
        this.points.forEach((elm, idx) => {
            if (this.player.posY + this.player.playerHeight > elm.posY + 5 &&
                this.player.posX + this.player.playerWidth > elm.posX + 5 &&
                this.player.posX < elm.posX + elm.pointsWidth - 5 &&
                this.player.posY < elm.posY + elm.pointsHeight - 5) {
                this.points.splice(idx, 1)
                this.score++
            }
        })
    },

    // -------------------------------- SCORE ------------------------------------- //

    drawScore() {
        this.scoreboard.update(this.score)
    },

    // ----------------------------- KEY FUNCTIONS -------------------------------- //

    setEventListeners() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case this.keys.left:
                    this.player.goLeft()
                    break;
                case this.keys.right:
                    this.player.goRight()
                    break;
                case this.keys.up:
                    this.player.goUp()
                    document.getElementById("yay").play()
                    break;
            }
        }
    },

    // ---------------------------- END GAME ------------------------------------- //

    gameOver() {
        document.getElementById('background').pause()
        document.getElementById("gameover").play()

        clearInterval(this.interval);
        alert("GAME OVER")
    },
}