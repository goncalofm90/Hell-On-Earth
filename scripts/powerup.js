class Powerup {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 20;
    this.health = 1;
    this.speed = 20;
  }

 
  
    runLogic(){
      this.x -= 5;

  
    }

    randomHeight(){
      return 

    }
    
    paint () {
      const context = this.game.context;
      context.save();
      context.fillStyle ='cyan';
      context.fillRect(this.x, this.y, this.width, this.height);
      context.restore();
      }
    
      
    }
