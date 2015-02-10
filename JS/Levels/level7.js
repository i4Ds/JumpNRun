

var platforms = [];
var boxs = [];
var enemys = [];
var endX = 200;
var endY = 3.0;
var end = [];
level = {
    init: function () {
        // a platform: ax, ay, bx, by --> a ist der erste Punkt und b der zweite von der Gerade.
        platforms[0] = new Platform(0, 3, 67, 3);
        platforms[1] = new Platform(71, 3, 79, 3);
        platforms[2] = new Platform(83, 4, 92, 4);
        platforms[3] = new Platform(97, 4, 105, 4);
        platforms[4] = new Platform(109, 3, 178, 3);
        platforms[5] = new Platform(181, 3, endX, endY);

        //width, height, rotation, position_x, position_y, speed
        boxs[0] = new Box(0.4, 2.5, 0, 15, 2.75);
        boxs[1] = new Box(0.4, 2.5, 0, 24.25, 2.75);
        boxs[2] = new Box(0.4, 2.5, 0, 33.5, 2.75);
        boxs[3] = new Box(0.4, 2.5, 0, 42.75, 2.75);
        boxs[4] = new Box(0.4, 2.5, 0, 52, 2.75);
        boxs[5] = new Box(0.4, 2.5, 0, 61.25, 2.75);
        boxs[6] = new Box(0.6, 2.5, 0.8, 81, 3.25, 0.05);
        boxs[7] = new Box(0.5, 2.5, 0, 95, 4);
        boxs[8] = new Box(0.3, 2.5, 0, 111.25, 3.75);
        boxs[9] = new Box(0.4, 2.5, 0, 120.5, 3.75);
        boxs[10] = new Box(0.5, 2.5, 0.1, 129.75, 3.75);
        boxs[11] = new Box(0.4, 2.5, 0, 139, 3.75);
        boxs[12] = new Box(0.4, 2, 0.2, 161.25, 3.25, 0.013);
        boxs[13] = new Box(0.4, 2, -0.2, 177.5, 3.25, -0.008);

        //width, height, rotation, position_x, position_y, speed
        enemys[0] = new Enemy(0.3, 0.3, 0.2, 10, 5, 20);
        enemys[1] = new Enemy(0.3, 0.3, 0.2, 9, 6, 30);
        enemys[2] = new Enemy(0.3, 0.3, 0.2, 8, 7, 40);
        enemys[3] = new Enemy(0.3, 0.3, 0.2, 7, 6, 30);
        enemys[4] = new Enemy(0.3, 0.3, 0.2, 6, 5, 20);
        enemys[5] = new Enemy(0.3, 0.3, 0.2, 15, 4, 50);
        enemys[6] = new Enemy(0.3, 0.3, 0.2, 16, 4.5, 60);

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