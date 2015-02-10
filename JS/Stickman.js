//
requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
       window.webkitRequestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       window.oRequestAnimationFrame ||
       window.msRequestAnimationFrame ||
       function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           window.setTimeout(callback, 1000 / 5);
       };
})();

// stickman's sprite animation
var stickmanObject = $('#stickmanObject');
var stickmanSpritePosition = 0;
setInterval(function () {
    stickmanSpritePosition--;
    stickmanSpritePosition += 11;
    stickmanSpritePosition %= 11;
    stickmanObject.css('background-position-x', stickmanSpritePosition * 27.5);
}, 100);

/***********************************PHYSICS*************************************/

// 1 unit = 100 pixels

var world = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, -9.81));

// stickman erstellen
var bodyDef = new Box2D.Dynamics.b2BodyDef();
bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
bodyDef.position = new Box2D.Common.Math.b2Vec2(0.2, 4.0);
var stickmanBody = world.CreateBody(bodyDef);
stickmanBody.SetFixedRotation(true);

var circleShape = new Box2D.Collision.Shapes.b2CircleShape();
var stickmanFixtureDef = new Box2D.Dynamics.b2FixtureDef();
circleShape.SetRadius(0.17);
stickmanFixtureDef.density = 0;
stickmanFixtureDef.friction = 0.0;
stickmanFixtureDef.shape = circleShape;
var stickmanFixture = stickmanBody.CreateFixture(stickmanFixtureDef);
console.log("stickman", stickmanFixture);

// listener
var listener = new Box2D.Dynamics.b2ContactListener();
// Bestimmungen definiert von den Physikobjekten. Definition des Kontaktes von zwei Physikobjekten.
listener.BeginContact = function (contact) {
    var edge = stickmanBody.GetContactList();
    var worldManifold = new Box2D.Collision.b2WorldManifold();
    edge.contact.GetWorldManifold(worldManifold);
    var fixtureA = edge.contact.GetFixtureA();
    var fixtureB = edge.contact.GetFixtureB();
    console.log('A', fixtureA)
    console.log('B', fixtureB)
    var fixtures = stickmanBody.GetFixtureList();
    var normal = worldManifold.m_normal;
    console.log('player', stickmanFixture)
    if (fixtureA == stickmanFixture || fixtureB == stickmanFixture) {
        while (edge) {
            if (edge.contact.IsTouching()) {
                console.log("getuserdata", fixtureA.GetUserData());
                if (fixtureA.GetUserData() == "enemy") {
                    dead = true;
                    console.log("gamePaused", gamePaused);
                } else if (fixtureA.GetUserData() == "end") {
                    console.log("levelEnd");
                    levelEnd = true;                   
                } else {
                    loop.normal_x = normal.x;
                    loop.normal_y = normal.y;
                    if (normal.x > 0) {
                        console.log("vector points right", normal.x);
                    } else if (normal.x < 0) {
                        console.log("vector points left", normal.x);
                    } else {
                        console.log("point.x = 0 and thus, no horizontal collision", normal.x);
                        loop.jumpAllowed = true;
                    }
                    if (normal.y >= 0) {
                        console.log("vector points down", normal.y);
                        loop.jumpAllowed = true;
                    } else if (normal.y < 0) {
                        console.log("vector points up", normal.y);
                    }else {
                        console.log("point.y = 0 and thus, no vertical collision", normal.y);
                    }

                    //andere Möglichkeit zum codieren --> loop.forceIsApplied = normal.x < -0.8 ? false : true; 
                    loop.forceIsApplied = normal.x >= -0.2;
                }
            }
            edge = edge.next;
        }
    }
}

listener.EndContact = function (contact) {
}

listener.PreSolove = function (contact, oldManifold) {

}

listener.PostSolve = function (contact, impulse) {

}

//Ausführen
world.SetContactListener(listener);
