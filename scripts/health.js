class Health {
  constructor (game) {
    this.game = game;
    
  }

  paint () {
    const context = this.game.context;
    const Health = 100;

    context.save();

    context.font = '32px sans-serif';

    context.fillText('Health: ' + Health, 10, 650);

    context.restore();
  }
}