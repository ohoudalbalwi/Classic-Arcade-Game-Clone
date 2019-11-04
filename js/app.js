

/*
 * Instantiate the objects
 */

let player = new Player(200 , 300);

/* x-position, y-position of the enemies */
let firstEnemy = new Enemy(100 , 55);

let secondEnemy = new Enemy(100 , 138);

let thirdEnemy = new Enemy(100 , 221);


/*  Push enemies into array allEnemies to make them appear on screen  */
let allEnemies = [firstEnemy, secondEnemy, thirdEnemy ];


// This listens for key presses and sends the keys to Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
