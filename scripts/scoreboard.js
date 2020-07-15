class Scoreboard {
  constructor (game) {
    this.game = game;
    this.score = 0;
    
  }

  paint () {
    const context = this.game.context;
  

    context.save();

    context.font = '32px Roboto Mono';
    context.fillStyle = 'white';
    context.fillText('Score: ' + this.score, 800, 650);

    context.restore();
  }
}