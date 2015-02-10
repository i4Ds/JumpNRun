var platforms = [];
var boxs = [];
var enemys = [];
var endX = 170;
var endY = 4.0;
var end = [];
level = {
    init: function () {
        // a platform: ax, ay, bx, by --> a ist der erste Punkt und b der zweite von der Gerade.
        platforms[0] = new Platform(0, 3, 30, 3);
        platforms[1] = new Platform(35, 3, 50, 3);
        platforms[2] = new Platform(54, 3.25, 64, 3.25);
        platforms[3] = new Platform(70, 3.5, 75, 3.5);
        platforms[4] = new Platform(78, 4, 80, 4);
        platforms[5] = new Platform(81, 5, 82, 5);
        platforms[6] = new Platform(85, 5, 90, 5);
        platforms[7] = new Platform(94, 4, 104, 4);
        platforms[8] = new Platform(107, 3.75, 117, 3.75);
        platforms[9] = new Platform(120, 3.5, 130, 3.5);
        platforms[10] = new Platform(133, 3.25, 140, 3.25);
        platforms[11] = new Platform(144, 3, 150, 3);
        platforms[12] = new Platform(155, 2.75, 160, 2.75);
        platforms[13] = new Platform(163, 3, 164, 3);
        platforms[14] = new Platform(165, 4.0, endX, endY);

        //width, height, rotation, position_x, position_y, speed
        boxs[0] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[1] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[2] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[3] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[4] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[5] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[6] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[7] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        boxs[8] = new Box(0.3, 2.5, 0, 24.5, 1.5);
        

        //width, height, rotation, position_x, position_y, speed
        enemys[0] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[1] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[2] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[3] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[4] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[5] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[6] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[7] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[8] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[9] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[10] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[11] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[12] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[13] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);

        //Ziel: Endpunkt im Koordinaten System
        end[0] = new End(endX, endY);
    },
    update: function () {
        var stickmanX = stickmanBody.GetPosition().x * 100 - 7;
        var screenX1 = (stickmanX - 40) / 100, screenX2 = screenX1 + $(document).width() / 100;
        for (var i = 0; i < platforms.length; i++) {
            if (platforms[i].options.left >= screenX1 && platforms[i].options.left <= screenX2) {
                platforms[i]._update();
            }
        }
        for (var i = 0; i < boxs.length; i++) {
            if (boxs[i].options.left >= screenX1 && boxs[i].options.left <= screenX2) {
                boxs[i]._update();
            }
        }
        for (var i = 0; i < enemys.length; i++) {
            if (enemys[i].options.left >= screenX1 && enemys[i].options.left <= screenX2) {
                enemys[i]._update();
            }
        }
        for (var i = 0; i < end.length; i++) {
            if (end[i].options.left >= screenX1 && end[i].options.left <= screenX2) {
                end[i]._update();
            }
        }
    },
    destroy: function () {
        for (var i = 0; i < platforms.length; i++) {
            platforms[i].destroy();
        }
        for (var i = 0; i < boxs.length; i++) {
            boxs[i].destroy();
        }
        for (var i = 0; i < enemys.length; i++) {
            enemys[i].destroy();
        }
        for (var i = 0; i < end.length; i++) {
            end[i].destroy();
        }
    }
}