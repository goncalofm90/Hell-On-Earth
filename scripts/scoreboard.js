class Scoreboard {
  constructor (game) {
    this.game = game;
    this.score = 0;
    
  }

  paint () {
    const context = this.game.context;
  

    context.save();

    context.font = '32px Do Hyeon';
    context.fillStyle = 'rgba(255, 255, 255, 0.6)';
    context.fillText('SCORE: ' + this.score, 750, 750);

    context.restore();
  }
}