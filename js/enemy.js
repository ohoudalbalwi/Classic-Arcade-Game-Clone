// Enemies our player must avoid
class Enemy {

    constructor(x, y, movement) {
        this.x = x;
        this.y = y;
        this.movement = movement;

        this.sprite = 'images/enemy-bug.png';

        this.movement = 100 + (Math.random() * 300);
    }

    update(dt) {
        // To ensure the game runs at the same speed for all computers
        this.x += this.movement * dt;
        live.innerText = lives;

        // If enemies go off the screen, start again
        if (this.x > 505) {
            this.x = -150;
        }

        // Checks collisons and restarts player at the bottom
        if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {

            player.x = 200;
            player.y = 400;

            lives--;
            live.innerText = lives;

            if (lives === 0) {

                //Will replace with modal
                confirm(`Sorry, you don't have more lives! Do you want to play again?`);
                lives = 3;
                scoreOfGame = 0;
                live.innerText = lives;
                score.innerText = '';

            }
        }
    }

    // Draw the enemy on the screen,
    render() {

        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
};

