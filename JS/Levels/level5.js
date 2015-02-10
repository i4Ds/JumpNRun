var platforms = [];
var boxs = [];
var enemys = [];
var endX = 60;
var endY = 3.0;
var end = [];
level = {
    init: function () {
        // a platform: ax, ay, bx, by --> a ist der erste Punkt und b der zweite von der Gerade.
        platforms[0] = new Platform(0, 3, endX, endY);

        //width, height, rotation, position_x, position_y, speed
        boxs[0] = new Box(2, 2, 0, 10, 4, -1);
        boxs[1] = new Box(2.2, 2.5, 0, 15, 5, -1);
        boxs[2] = new Box(2, 2, 0, 20, 4, -1);
        boxs[3] = new Box(2.2, 2.5, 0, 25, 5, -1);
        boxs[4] = new Box(1, 0.5, 0, 34, 3, -1);
        boxs[5] = new Box(0.5, 1, 0, 34.5, 4, -1);
        boxs[6] = new Box(1, 0.5, 0, 35, 5, -1);
        boxs[7] = new Box(0.5, 1, 0, 35.5, 6, -1);
        boxs[8] = new Box(1, 0.5, 0, 36, 7, -1);
        boxs[9] = new Box(0.5, 1, 0, 36.5, 8, -1);
        boxs[10] = new Box(1, 0.5, 0, 37, 9, -1);
        boxs[11] = new Box(0.5, 1, 0, 37.5, 10, -1);
        boxs[12] = new Box(1, 0.5, 0, 38, 10, -1);
        boxs[13] = new Box(0.5, 1, 0, 38.5, 9, -1);
        boxs[14] = new Box(1, 0.5, 0, 39, 8, -1);
        boxs[15] = new Box(0.5, 1, 0, 39.5, 7, -1);
        boxs[16] = new Box(1, 0.5, 0, 40, 6, -1);
        boxs[17] = new Box(0.5, 1, 0, 40.5, 5, -1);
        boxs[18] = new Box(1, 0.5, 0, 41, 4, -1);
        boxs[19] = new Box(0.5, 1, 0, 41.5, 3, -1);
        //width, height, rotation, position_x, position_y, speed
        enemys[0] = new Enemy(0.3, 0.3, 0.2, 12, 4, 0);
        enemys[1] = new Enemy(0.3, 0.3, 0.2, 12.5, 5, 0);
        enemys[2] = new Enemy(0.3, 0.3, 0.2, 12.5, 6, 0);
        enemys[3] = new Enemy(0.3, 0.3, 0.2, 13, 4, 0);
        enemys[4] = new Enemy(0.3, 0.3, 0.2, 17, 4, 0);
        enemys[5] = new Enemy(0.3, 0.3, 0.2, 17.5, 5, 0);
        enemys[6] = new Enemy(0.3, 0.3, 0.2, 17.5, 6, 0);
        enemys[7] = new Enemy(0.3, 0.3, 0.2, 18, 7, 0);
        enemys[8] = new Enemy(0.3, 0.3, 0.2, 22, 7, 0);
        enemys[9] = new Enemy(0.3, 0.3, 0.2, 22.5, 6, 0);
        enemys[10] = new Enemy(0.3, 0.3, 0.2, 23, 5, 0);
        enemys[11] = new Enemy(0.3, 0.3, 0.2, 24, 4.5, 0);
        enemys[12] = new Enemy(0.3, 0.3, 0.2, 27, 6, 0);
        enemys[13] = new Enemy(0.3, 0.3, 0.2, 27.5, 7, 0);
        enemys[14] = new Enemy(0.3, 0.3, 0.2, 27.5, 6.5, 0);
        enemys[15] = new Enemy(0.3, 0.3, 0.2, 28, 8, 0);
        enemys[16] = new Enemy(0.3, 0.3, 0.2, 28, 3.1, -2);
        enemys[17] = new Enemy(0.3, 0.3, 0.2, 29, 3.4, -2);
        enemys[18] = new Enemy(0.3, 0.3, 0.2, 29.5, 3.2, -2);
        enemys[19] = new Enemy(0.3, 0.3, 0.2, 30, 3.5, -2);
        enemys[20] = new Enemy(0.3, 0.3, 0.2, 31, 3.3, -2);

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