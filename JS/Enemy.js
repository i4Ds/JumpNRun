var Enemy = function (width, height, rotation, position_x, position_y, speed) {

    this.options = {
        element: undefined,
        width: 0,
        height: 0,
        rotation: 0,
        bottom: 0,
        left: 0,
        position_x: 0,
        position_y: 0
    }

    var enemyBodyDef = new Box2D.Dynamics.b2BodyDef();
    enemyBodyDef.position = new Box2D.Common.Math.b2Vec2(position_x, position_y);
    enemyBodyDef.type = Box2D.b2_kinematicBody;

    this.groundBody = world.CreateBody(enemyBodyDef);

    this.edgeShape3 = new Box2D.Collision.Shapes.b2PolygonShape();
    this.edgeShape3.SetAsBox(width / 2, height / 2);
    var fixtureDef3 = new Box2D.Dynamics.b2FixtureDef();
    fixtureDef3.friction = 0.0;
    fixtureDef3.shape = this.edgeShape3;
    fixtureDef3.userData = "enemy";

    this.fixture = this.groundBody.CreateFixture(fixtureDef3);
    this.groundBody.SetAngularVelocity(speed);
    this.options.width = width * 100;
    this.options.height = height * 100;
    this.options.bottom = position_y * 100;
    this.options.left = position_x * 100;
    this.draw();
};

//move
//1. move the box
//2. draw it
Enemy.prototype.draw = function () {

    if (this.options.element == undefined) {
        this.options.element = $("<div/>");
        this.options.element.addClass("enemy");
        $('.level').append(this.options.element);
    }
    var styles = {
        'width': this.options.width + "px",
        'height': this.options.height + "px",
        '-webkit-transform': "rotate(" + this.options.rotation + "rad)",
        '-moz-transform': "rotate(" + this.options.rotation + "rad)",
        '-o-transform': "rotate(" + this.options.rotation + "rad)",
        '-ms-transform': "rotate(" + this.options.rotation + "rad)",
        'transform': "rotate(" + this.options.rotation + "rad)",
        'bottom': (this.options.bottom - this.options.height / 2) + "px",
        'left': (this.options.left - this.options.width / 2) + "px"
    };
    this.options.element.css(styles);
};

Enemy.prototype.debug = function () {
    var vertices = this.groundBody.GetFixtureList().GetShape().GetVertices();

    $('.boxdebug').remove();

    for (var x = 0; x < vertices.length; x++) {
        var v = this.groundBody.GetWorldPoint(vertices[x]);

        var el = $("<div class=\"boxdebug\" />");
        el.css({
            'position': 'absolute',
            'background-color': 'green',
            'width': '8px',
            'height': '8px',
            'bottom': (v.y * 100) + 'px',
            'left': (v.x * 100) + 'px',
        });
        $('.level').append(el);
    }

}



/**
 * Updates the box with the box2d positions
 */
Enemy.prototype._update = function () {
    //get Position
    this.options.rotation = -this.groundBody.GetTransform().GetAngle();
    this.draw();
};

Enemy.prototype.destroy = function () {
    world.DestroyBody(this.groundBody);
};