var platforms = [];
var boxs = [];
var enemys = [];
var endX = 94; //200
var endY = 4.0;
var end = [];
level = {
    init: function () {
        // a platform: ax, ay, bx, by --> a ist der erste Punkt und b der zweite von der Gerade.
        platforms[0] = new Platform(0, 3, 30, 3);
        platforms[1] = new Platform(33, 3, 69, 3);
        platforms[2] = new Platform(72, 3.5, 84, 3.5);
        platforms[3] = new Platform(88, 4, endX, endY);

        //width, height, rotation, position_x, position_y, speed
        boxs[0] = new Box(0.4, 2.5, 0, 15, 2.75, 0.5);
        boxs[1] = new Box(0.4, 2.5, 0, 21, 2.75, 0.05);
        boxs[2] = new Box(0.4, 2.5, 0, 46.5, 2.75);
        boxs[3] = new Box(0.4, 2.5, 0, 55.75, 2.75);
        boxs[4] = new Box(0.4, 2.5, 0, 65, 2.75);
        boxs[5] = new Box(0.4, 3, 0, 84, 3.25);
        boxs[6] = new Box(0.4, 2, 0, 104.75, 2);
        boxs[7] = new Box(0.4, 2, 0, 113, 2.5);
        boxs[8] = new Box(0.4, 2, 0, 121.5, 3);

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