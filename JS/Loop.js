// game loop
var totalForce = 0;
var v = stickmanBody.GetLinearVelocity();
var worldManifold = new Box2D.Collision.b2WorldManifold();
var normal = worldManifold.m_normal;
var loop = {
    step: function () {
        var stepRate = 1 / 120;
        world.Step(0.02, 10, 10);
        level.update();
    },    
    jumpAllowed: true,
    forceIsApplied: true,
    totalForce: 0,
    hasPositiveForce: false,
    hasNegativeForce: false,
    update: function () {                   //updatevon jedem einzelnen Schritt
        if (gameControls.right == true) {
            v.x = 7;
            if (this.forceIsApplied == true) {
                if (gameControls.right && !this.hasPositiveForce) {
                    this.totalForce += 0.01;
                    this.hasPositiveForce = true;
                }

                if (this.hasPositiveForce && v.x > 8) {
                    this.totalForce -= 0.01;
                    this.hasPositiveForce = false;
                    v.x = 8;
                }
            } 
            stickmanBody.ApplyForce(new Box2D.Common.Math.b2Vec2(this.totalForce, 0), stickmanBody.GetWorldCenter());
        }
        
        var impulse = new Box2D.Common.Math.b2Vec2(0, 0);
        if (gameControls.jump == true) {
            if (this.jumpAllowed == true) {
                    impulse.Set(0, stickmanBody.GetMass() * 5);
                    gameControls.jump = false;
                    stickmanBody.ApplyImpulse(impulse, stickmanBody.GetWorldCenter());
                    this.jumpAllowed = false;
                    console.log("jump");
            } else {
                console.log("jump not allowed");
            }
        }

        if (v.y >= 9 ) v.y = 9;
    },
    isTouching: false,
    normal_x: 0,
    normal_y: 0,
    debug: function () {
        if (this.isTouching == true) {
            var normal_x = (this.normal_x).toString().substr(0, 7);
            var normal_y = (this.normal_y).toString().substr(0, 7);
            var position = stickmanBody.GetPosition().y;
            var el = $("<div class='stickmanNormal'>x:" + normal_x + " y:" + normal_y + "  "+ position+ "<\div>");
            $('#stickmanObject').append(el);
            el.animate({
                opacity: 0,
                bottom: 700,
            }, 10000, function () {
                el.remove();
            });
            this.isTouching = false;
        }
    },
    draw: function () {
        var stickmanX = stickmanBody.GetPosition().x * 100 - 7; // -7 because we want him centered
        stickmanObject.css({
            'bottom': stickmanBody.GetPosition().y * 100 -17,
            'left': stickmanX
        });
        $($('.background')[0]).css({
            'left': Math.min(-stickmanX/3 + 40, 0)
        });

        $($('.level')[0]).css({
            'left': Math.min(-stickmanX + 40, 0)
        });
    },
    gameOver :function () {
        if (stickmanBody.GetPosition().y < 0) {
            gamePaused = true;
        }        
        if (stickmanBody.GetPosition().x >= endX) {
            gamePaused = true;
        }
    },
};
/*level = {
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
    }
}*/