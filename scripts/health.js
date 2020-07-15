class Health {
  constructor (game) {
    this.game = game;
    
  }

  paint () {
    const context = this.game.context;
    const Health = 100;

    context.save();

    context.font = '32px Roboto Mono';
    context.fillStyle = 'white';
    context.fillText('Health: ' + Health, 20, 650);

    context.restore();
  }
}