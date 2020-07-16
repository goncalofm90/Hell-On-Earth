class Obstacle {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = this.game.canvas.height;
    this.health = 1000;
  }
    runLogic(){

    }


    // enemy collision with obstacle -= 10 score;
    
    paint () {
      const context = this.game.context;
      context.save();
      context.fillStyle = '#575757';
      context.fillRect(this.x, this.y, this.width, this.height)
      context.fillStyle= 'white';
      context.font = '27px Roboto Mono';
      context.fillText('Barricade: ' + this.health, 20, 600);
      context.restore();
      }
    }