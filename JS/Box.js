﻿var Box = function (width, height, rotation, position_x, position_y, speed) {

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
    
    var boxBodyDef = new Box2D.Dynamics.b2BodyDef();
    boxBodyDef.position = new Box2D.Common.Math.b2Vec2(position_x, position_y);

    boxBodyDef.type = Box2D.b2_kinematicBody;

    this.groundBody = world.CreateBody(boxBodyDef);

    this.edgeShape2 = new Box2D.Collision.Shapes.b2PolygonShape();
    this.edgeShape2.SetAsBox(width/2, height/2);
    var fixtureDef2 = new Box2D.Dynamics.b2FixtureDef();
    fixtureDef2.friction = 0.0;
    fixtureDef2.shape = this.edgeShape2;
    console.log(this.groundBody)

    this.fixture = this.groundBody.CreateFixture(fixtureDef2);

    this.groundBody.SetAngularVelocity(speed);

    this.options.width = width * 100;
    this.options.height = height * 100;

    this.options.bottom = position_y * 100;
    this.options.left = position_x  * 100;

    this.draw();
};



Box.prototype.draw = function () {

    if (this.options.element == undefined) {
        this.options.element = $("<div/>");
        this.options.element.addClass("box");
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

Box.prototype.debug = function () {
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
Box.prototype._update = function () {
    //get Position
    var x = this.groundBody.GetPosition().x;
    var y = this.groundBody.GetPosition().y;

    var bottom = (this.options.position_y + y) * 100;
    var left = (this.options.position_x + x) * 100;

    var width = this.options.width;
    var height = this.options.height;

    this.options.rotation = -this.groundBody.GetTransform().GetAngle();
    this.draw();
};

Box.prototype.destroy = function () {
    world.DestroyBody(this.groundBody);
};