class Infection {
  constructor (game) {
    this.game = game;
    this.infection = 0;
    
  }

  paint () {
    const context = this.game.context;
  

    context.save();

    context.font = '32px Do Hyeon';
    context.fillStyle = 'white';
    context.fillText('Infection: ' + this.infection, 370, 750);

    context.restore();
  }
}