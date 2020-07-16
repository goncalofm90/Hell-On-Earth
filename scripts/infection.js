class Infection {
  constructor (game) {
    this.game = game;
    this.infection = 0;
    
  }

  paint () {
    const context = this.game.context;
  

    context.save();

    context.font = '32px Roboto Mono';
    context.fillStyle = 'white';
    context.fillText('Infection: ' + this.infection, 370, 650);

    context.restore();
  }
}