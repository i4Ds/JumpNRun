var platforms = [];
var boxs = [];
var enemys = [];
var endX = 180;
var endY = 3.0;
var end = [];
level = {
    init: function () {
        // a platform: ax, ay, bx, by --> a ist der erste Punkt und b der zweite von der Gerade.
        platforms[0] = new Platform(0, 3, 7, 3);
        platforms[1] = new Platform(12, 3.5, 19, 3.5);
        platforms[2] = new Platform(23, 3, 27, 3);
        platforms[3] = new Platform(30, 3, 40, 3);
        platforms[4] = new Platform(44, 4, 50, 4);
        platforms[5] = new Platform(54, 5, 65, 5);
        platforms[6] = new Platform(70, 3.5, 80, 3.5);
        platforms[7] = new Platform(85, 4, 92, 4);
        platforms[8] = new Platform(95, 4.5, 110, 4.5);
        platforms[9] = new Platform(115, 3, 120, 3);
        platforms[10] = new Platform(125, 3.5, 135, 3.5);
        platforms[11] = new Platform(140, 2.5, 155, 2.5);
        platforms[12] = new Platform(160, 2, 166, 2);
        platforms[13] = new Platform(170, 3, endX, endY);

        //width, height, rotation, position_x, position_y, speed
        boxs[0] = new Box(0.3, 2.5, 0, 9.5, 3, 1);
        boxs[1] = new Box(0.5, 3, 0, 21, 2, 1);
        boxs[2] = new Box(0.5, 2, 0, 28.5, 2, 1);
        boxs[3] = new Box(0.3, 2, 0, 42, 2, 1);
        boxs[4] = new Box(0.8, 2.5, 0, 52, 3, 1);
        boxs[5] = new Box(0.5, 2, 0, 67.5, 4, 1);
        boxs[6] = new Box(0.5, 2, 0, 82.5, 3, 1);
        boxs[7] = new Box(0.3, 2, 0, 112.5, 4, 1);
        boxs[8] = new Box(0.3, 2, 0, 122.5, 2, 1);
        boxs[9] = new Box(1, 2, 0, 137.5, 3, 1);
        boxs[10] = new Box(0.3, 2, 0, 157.5, 2, 1);
        boxs[11] = new Box(0.5, 1.6, 0, 168, 2, 1);

        //width, height, rotation, position_x, position_y, speed
        enemys[0] = new Enemy(0.3, 0.3, 0.2, 7, 3.3, 20);

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