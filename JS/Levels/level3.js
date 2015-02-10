var platforms = [];
var boxs = [];
var enemys = [];
var endX = 145;
var endY = 3.0;
var end = [];
level = {
    init: function () {
        // a platform: ax, ay, bx, by --> a ist der erste Punkt und b der zweite von der Gerade.
        platforms[0] = new Platform(0, 3, 5, 3);
        platforms[1] = new Platform(8, 3, 12, 3);
        platforms[2] = new Platform(16, 3, 29, 3);
        platforms[3] = new Platform(30, 3, 38, 3);
        platforms[4] = new Platform(41, 3, 47, 3);
        platforms[5] = new Platform(50, 3, 57, 3);
        platforms[6] = new Platform(60, 4, 70, 4);
        platforms[7] = new Platform(74, 3.5, 90, 3.5);
        platforms[8] = new Platform(94, 4, 105, 4);
        platforms[9] = new Platform(107, 4.5, 115, 4.5);
        platforms[10] = new Platform(119, 5, 128, 5);
        platforms[11] = new Platform(132, 3, endX, endY);

        //width, height, rotation, position_x, position_y, speed
        boxs[0] = new Box(0.5, 1, 0, 6.5, 3, 0.5);
        boxs[1] = new Box(1.1, 3.5, 0, 16, 3, -4);

        //width, height, rotation, position_x, position_y, speed
        enemys[0] = new Enemy(0.3, 0.3, 0.2, 8, 5, 20);
        enemys[1] = new Enemy(0.3, 0.3, 0.2, 7.25, 6, 30);
        enemys[2] = new Enemy(0.3, 0.3, 0.2, 6.5, 7, 40);
        enemys[3] = new Enemy(0.3, 0.3, 0.2, 5.75, 6, 30);
        enemys[4] = new Enemy(0.3, 0.3, 0.2, 5, 5, 20);
        enemys[5] = new Enemy(0.3, 0.3, 0.2, 28.5, 3, 20);
        enemys[6] = new Enemy(0.3, 0.3, 0.2, 29, 3, 20);
        enemys[7] = new Enemy(0.3, 0.3, 0.2, 30, 3, 20);
        enemys[8] = new Enemy(0.3, 0.3, 0.2, 30.5, 3, 20);
        enemys[9] = new Enemy(0.3, 0.3, 0.2, 31, 3, 20);
        enemys[10] = new Enemy(0.3, 0.3, 0.2, 28, 3, 20);
        enemys[11] = new Enemy(0.3, 0.3, 0.2, 41, 3, 20);
        enemys[12] = new Enemy(0.3, 0.3, 0.2, 47, 3, 20);
        enemys[13] = new Enemy(0.3, 0.3, 0.2, 60, 4, 20);
        enemys[14] = new Enemy(0.3, 0.3, 0.2, 107, 4.5, 20);

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
