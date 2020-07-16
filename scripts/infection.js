class Infection {
  constructor (game) {
    this.game = game;
    this.infection = 0;
    
  }

  paint () {
    const context = this.game.context;
  

    context.save();

    context.font = '32px Do Hyeon';
    context.fillStyle = 'rgba(255, 255, 255, 0.6)';
    context.fillText('INFECTION: ' + this.infection, 370, 750);

    context.restore();
  }
}