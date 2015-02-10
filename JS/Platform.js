var Platform = function (ax, ay, bx, by) {

    this.options = {
        element: undefined,
        element2: undefined,
        width: 0,
        rotation: 0,
        bottom: 0,
        left: 0,
        ax: 0,
        ay: 0
    }

    var x = Math.min(ax, bx);
    ax -= x;
    bx -= x;

    var y = Math.min(ay, by);
    ay -= y;
    by -= y;

    var platformBodyDef = new Box2D.Dynamics.b2BodyDef();
    platformBodyDef.position = new Box2D.Common.Math.b2Vec2(x, y);

    platformBodyDef.type = Box2D.b2_kinematicBody;

    this.groundBody = world.CreateBody(platformBodyDef);

    var edgeShape = new Box2D.Collision.Shapes.b2PolygonShape();
    edgeShape.SetAsEdge(new Box2D.Common.Math.b2Vec2(ax, ay), new Box2D.Common.Math.b2Vec2(bx, by))

    var fixtureDef = new Box2D.Dynamics.b2FixtureDef();
    fixtureDef.friction = 0.5;
    fixtureDef.shape = edgeShape;

    this.groundBody.CreateFixture(fixtureDef);

    this.options.rotation = -1 * (Math.atan((by - ay) / (bx - ax)) * 100);

    this.options.width = Math.sqrt((bx - ax) * (bx - ax) + (by - ay) * (by - ay)) * 100;

    this.options.bottom = (ay + y) * 100;
    this.options.left = (ax + x) * 100;

    this.draw();
};

//move
//1. move the platform
//2. draw it
Platform.prototype.draw = function () {

    if (this.options.element2 == undefined) {
        this.options.element2 = $("<div/>");
        this.options.element2.addClass("platform2");
        $('.level').append(this.options.element2);
    }
    var styles2 = {
        'width': this.options.width + "px",
        '-webkit-transform': "rotate(" + this.options.rotation + "deg)",
        '-moz-transform': "rotate(" + this.options.rotation + "deg)",
        '-o-transform': "rotate(" + this.options.rotation + "deg)",
        '-ms-transform': "rotate(" + this.options.rotation + "deg)",
        'transform': "rotate(" + this.options.rotation + "deg)",
        'bottom': "0px",
        'height': this.options.bottom + "px",
        'left': this.options.left + "px"
    };
    this.options.element2.css(styles2);

    if (this.options.element == undefined) {
        this.options.element = $("<div/>");
        this.options.element.addClass("platform");
        $('.level').append(this.options.element);
    }
    var styles = {
        'width': this.options.width + "px",
        '-webkit-transform': "rotate(" + this.options.rotation + "deg)",
        '-moz-transform': "rotate(" + this.options.rotation + "deg)",
        '-o-transform': "rotate(" + this.options.rotation + "deg)",
        '-ms-transform': "rotate(" + this.options.rotation + "deg)",
        'transform': "rotate(" + this.options.rotation + "deg)",
        'bottom': this.options.bottom - 49 + "px",
        'left': this.options.left + "px"
    };
    this.options.element.css(styles);
};

/**
 * Updates the platform with the box2d positions
 */
Platform.prototype._update = function () {
    //get Position
    var x = this.groundBody.GetPosition().x;
    var y = this.groundBody.GetPosition().y;

    var bottom = (this.options.ay + y) * 100;
    var left = (this.options.ax + x) * 100;

    this.options.left = left;
    this.options.bottom = bottom;

    this.draw()
};


Platform.prototype.destroy = function () {
    world.DestroyBody(this.groundBody);
};
