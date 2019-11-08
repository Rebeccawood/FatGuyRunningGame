window.onload = () => {

    document.getElementById("start-button").onclick = function () {
        Game.init("myCanvas")
    }

    window.addEventListener("keydown", function (e) {
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false)
}