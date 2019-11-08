const scoreboard = {
    ctx: undefined,

    init(ctx) {
        this.ctx = ctx
        this.ctx.font = "50px sans-serif"
    },

    update(score) {
        
        this.ctx.fillStyle = "red";
        this.ctx.fillText('0' + score, 50, 50);
    },
};