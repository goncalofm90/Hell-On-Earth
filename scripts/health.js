class Health {
  constructor (game) {
    this.game = game;
    this.health = 100;
    
  }

  paint () {
    const context = this.game.context;

    context.save();

    context.font = '32px Do Hyeon';
    context.fillStyle = 'rgba(255, 255, 255, 0.6)';
    context.fillText('HEALTH: ' + this.health, 20, 750);

    context.restore();
  }
}