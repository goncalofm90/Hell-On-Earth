class Soldier {
  constructor(x, y, game){
    this.game= game;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.health = 100;
    this.speed= 20;
  }
  moveLeft() {
    this.x-= this.speed;
    this.direction = 'left';
  }

  moveRight() {
    this.x+= this.speed;
    this.direction = 'right';
  }

  moveUp() {
    this.y-= this.speed;
    this.direction = 'up';
  }

  moveDown() {
    this.y+= this.speed;
    this.direction = 'down';
  }
  runLogic(){

}
  paint () {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.restore();
    }
} 

