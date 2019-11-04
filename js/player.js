// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let scoreOfGame = 0,
    lives = 3,
    live = document.querySelector('.lives > span'),
    score = document.querySelector('.score > span');


class Player {
    constructor(x, y) {
        this.sprite = 'images/char-pink-girl.png';
        this.x = x;
        this.y = y;
    }

    update(dt) {

        if (this.y < 0) {

            this.x = 200;
            this.y = 380;

            scoreOfGame++;

            /* 1 points will be added to their game score Once player reaches the water */
            score.innerText = scoreOfGame;
            if (lives > 0 && scoreOfGame === 3) {
                confirm('Congratulations!You made it!');
                lives = 3;
                scoreOfGame = 0;
                live.innerText = lives;
                score.innerText = '';
            }
        }

    }

     /* Draw the player on the screen */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }


    // Moves Player with keyboard arrow keys
    handleInput(arrowKeyPressed) {
        switch (arrowKeyPressed) {

            /* Press the left key to move the player one step left on the x-axis*/
            case "left":
                if (this.x > 0) {
                    this.x -= 101;
                }

                break;

            /*Press the right key to move the player one step right on the x-axis*/
            case "right":
                if (this.x <= 400) {
                    this.x += 101;
                }

                break;

            /* Press the up key to move the player one step up on the y-axis*/
            case "up":
                if (this.y > 0) {
                    this.y -= 83;
                }

                break;

            /* Press the down key to move the player one step down on the y-axis */
            case "down":
                if (this.y < 380) {
                    this.y += 83;
                }

                break;

            default:

                break;
        }

    };


}
