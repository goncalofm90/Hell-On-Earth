class Health {
  constructor (game) {
    this.game = game;
    this.health = 100;
    
  }

  paint () {
    const context = this.game.context;

    context.save();

    context.font = '32px Roboto Mono';
    context.fillStyle = 'white';
    context.fillText('Health: ' + this.health, 20, 650);

    context.restore();
  }
}