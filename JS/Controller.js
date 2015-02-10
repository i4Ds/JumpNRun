var gameControls = {
    right: false,
    left: false,
    jump: false,
};

var activLevel = 1;

$(document).keydown(function (event) {
    console.log('What is the key id of the key we are pressing? ', event.which);

    switch (event.which) {
        case 13:
            gameControls.right = true;
            stickmanBody.m_force = new Box2D.Common.Math.b2Vec2(3.9, 0);                     
            break;
        case 27:
            gamePaused = true;
            break;
        case 32:
            if (gameControls.right == true) {
                gameControls.jump = true;

                break;
            }
            break;
    }

});

$(document).keyup(function (event) {
    switch (event.which) {
        case 65:
            if (gamePaused) {
                gamePaused = false;
                run();
            }
        case 13:
            gameControls.right = true;
            stickmanBody.m_force = new Box2D.Common.Math.b2Vec2(3.9, 0);
            break;

        case 27:
            gamePaused = true;
            break;
        case 32:
            gameControls.jump = false;
            break;
        case 78:
            if (levelEnd == true) {
                activLevel = activLevel + 1;
                console.log("activLevel", activLevel);
                level.destroy();
                $('.platform').remove();
                $('.platform2').remove();
                $('.box').remove();
                $('.enemy').remove();
                $('.end').remove();
                $('#levels').empty();
                $('.levels').remove();
                var url = "JS/Levels/level" + activLevel + ".js";
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "script"
                }).done(function () {
                    $('#levels').load(url, function () {
                        $('#stickmanObject').css({
                            'left': 13 + "px",
                            'bottom': 300 + "px",
                        });
                        $('#stickmanRun').load();
                        stickmanBody.SetPosition(new Box2D.Common.Math.b2Vec2(0.2, 4.0));
                        stickmanBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(0, 0));
                        stickmanBody.m_force = new Box2D.Common.Math.b2Vec2(0, 0);
                        levelEnd = false;
                        gameControls.jump = false;
                        gameControls.right = false;
                        level.init();
                        run();
                    });
                });
            }
            break;
        case 82:
            if (gamePaused == true || dead == true) {
                activLevel = activLevel;
                console.log("activLevel", activLevel);
                level.destroy();
                $('.platform').remove();
                $('.platform2').remove();
                $('.box').remove();
                $('.enemy').remove();
                $('.end').remove();
                $('#levels').empty();
                $('.levels').remove();
                var url = "JS/Levels/level" + activLevel + ".js";
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "script"
                }).done(function () {
                    $('#levels').load(url, function () {
                        $('#stickmanObject').css({
                            'left': 13 + "px",
                            'bottom': 300 + "px",
                        });
                        $('#stickmanRun').load();
                        stickmanBody.SetPosition(new Box2D.Common.Math.b2Vec2(0.2, 4.0));
                        stickmanBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(0, 0));
                        stickmanBody.m_force = new Box2D.Common.Math.b2Vec2(0, 0);
                        gamePaused = false;
                        dead = false;
                        gameControls.jump = false;
                        gameControls.right = false;
                        level.init();
                        run();
                    });
                });
            }
            break;
    }
});