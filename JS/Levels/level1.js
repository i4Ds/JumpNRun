var platforms = [];
var boxs = [];
var enemys = [];
var endX = 45;
var endY = 1.0;
var end = [];
level = {
    init: function () {
        // a platform: ax, ay, bx, by --> a ist der erste Punkt und b der zweite von der Gerade.
        platforms[0] = new Platform(0, 3, 6, 3);
        platforms[1] = new Platform(10, 3, 16, 3);
        platforms[2] = new Platform(18, 3.5, 21, 3.5);
        platforms[3] = new Platform(22, 2.5, 28, 2.5);
        platforms[4] = new Platform(32, 2.5, 38, 2.5);
        platforms[5] = new Platform(40, 1.0, endX, endY);

        //width, height, rotation, position_x, position_y, speed
        boxs[0] = new Box(2, 4, 0.9, 8, 1, 2);

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

        //this.entities
    },
    update: function () {
        var stickmanX = stickmanBody.GetPosition().x * 100 - 7;
        var screenX1 = (stickmanX - 40)/ 100, screenX2 = screenX1 + $(document).width() / 100;
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