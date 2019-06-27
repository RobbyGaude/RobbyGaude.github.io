var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:500,y:250},
                {type: 'sawblade',x:450,y:225},
                {type: 'sawblade',x:400,y:200},
                {type: 'box', x:500,y:200}
            ]
        };

        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE

function createEnemy(x,y) {
var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);

enemy.velocityX = -2;
enemy.rotationVelocity = 50;

enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
    game.changeIntegrity(25);
    enemy.fadeOut();
};

enemy.onProjectileCollision = function() {
    console.log('Halle has hit the enemy');
    game.increaseScore(100);
    enemy.fadeOut();
};
}

createEnemy(400,groundY-10);
createEnemy(500,groundY-75);
createEnemy(600,groundY-50);

function createGoldFish(x,y) {
    var hitZoneSize = 30;
    var damageFromObstacle = 0;
    var myReward = game.createObstacle(hitZoneSize,damageFromObstacle);
    myReward.x = x;
    myReward.y = y;
    game.addGameItem(myReward);
    var rewardImage = draw.bitmap('img/Goldfish.png');
    myReward.addChild(rewardImage);
    rewardImage.x = x;
    rewardImage.y = y;
    myReward.onPlayerCollision = function() {
        game.increaseScore(74);
        myReward.fadeOut();
    };
    }  




createGoldFish(650,groundY-150);

function createSawBlade(x,y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 50;
    var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
    myObstacle.x = x;
    myObstacle.y = y;
    game.addGameItem(myObstacle);
    var obstacleImage = draw.bitmap('img/winlogo2.1.jpg');
    myObstacle.addChild(obstacleImage);
    obstacleImage.x = x;
    obstacleImage.y = y;
    myObstacle.onPlayerCollision = function() {
        myObstacle.fadeOut();
    };
    myObstacle.onProjectileCollision = function() {
    console.log('Halle has hit the enemy');
    game.increaseScore(100);
    myObstacle.fadeOut();
};
    }  
 
levelData.gameItems.push({type: 'sawblade', x:250, y:225});

for (var count = 0; count < levelData.gameItems.length; count++) {
    createSawBlade(levelData.gameItems[count].x, levelData.gameItems[count].y);
}

function createBox(x,y) {
    var hitZoneSize = 10;
    var damageFromObstacle = 10;
    var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
    myObstacle.x = x;
    myObstacle.y = y;
    game.addGameItem(myObstacle);
    var obstacleImage = draw.bitmap('img/chrome.png');
    myObstacle.addChild(obstacleImage);
    obstacleImage.x = x;
    obstacleImage.y = y;
      
};

    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}