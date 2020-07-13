class Scoreboard {
  constructor (game) {
    this.game = game;
    
  }

  paint () {
    const context = this.game.context;
    const score = 0;

    context.save();

    context.font = '32px sans-serif';

    context.fillText('Score: ' + score, 850, 650);

    context.restore();
  }
}