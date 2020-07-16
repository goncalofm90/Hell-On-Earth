class Health {
  constructor (game) {
    this.game = game;
    this.health = 100;
    
  }

  paint () {
    const context = this.game.context;

    context.save();

    context.font = '32px Do Hyeon';
    context.fillStyle = 'white';
    context.fillText('Health: ' + this.health, 20, 750);

    context.restore();
  }
}