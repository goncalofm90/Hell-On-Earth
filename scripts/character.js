class Soldier {
  constructor(x, y, game){
    this.game= game;
    this.x = x;
    this.y = y; 
    this.width = 100;
    this.height = 100;
    this.health = 100;
    this.speed= 30;
    this.direction = 'right';
  }
  moveLeft() {
    if(this.x > 0){
      this.x -= this.speed;
      this.direction = 'left';
 
      
    }
  }

  moveRight() {
    if (this.x + this.width > 250) {
      return;
    }else{
    this.x+= this.speed;
    this.direction = 'right';
    }
  }

  moveUp() {
    if(this.y > 0){
      this.y -= this.speed;
    }else {
      this.direction = 'up';
    }
    
  }p

  moveDown() {
    if (this.y + this.height > this.game.canvas.height) {
      return;
    }else{
    this.y+= this.speed;
    this.direction = 'down';
    }
  }
  
  runLogic(){
    
}
  paint () {
    const context = this.game.context;
    context.save();
    // context.fillStyle = 'midnightblue';
    // context.fillRect(this.x, this.y, this.width, this.height);
    const soldier = new Image();
    soldier.src = 'images/player/soldier.png';
    context.drawImage(soldier, this.x,this.y,this.width,this.height) 
    context.restore();
    }
} 

