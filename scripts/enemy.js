class Enemy {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.health = 1;
    this.speed = 20;
  }


    runLogic(){
      this.x -= 2;

  
    }
    
    paint () {
      const context = this.game.context;
      context.save();
      context.fillStyle ='darkGreen';
      context.fillRect(this.x, this.y, this.width, this.height);
      context.restore();
      }
    
      
    }

  
    




