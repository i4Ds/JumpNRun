// START

var timeSinceLastRun = new Date().getTime();
var runInterval = 20;
function run() {
    
    var diff = new Date().getTime() - timeSinceLastRun;
    runInterval = runInterval * 0.8 + diff * 0.2;
    timeSinceLastRun = new Date().getTime();

    loop.step();
    loop.update();
    loop.debug();
    loop.draw();
    loop.gameOver();
    if (!gamePaused && !levelEnd && !dead) requestAnimFrame(run);
}


// continue game

dead = false;
levelEnd = false;
gamePaused = false;
