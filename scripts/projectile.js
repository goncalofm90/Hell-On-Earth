class Projectile {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 5;
    this.speed = 15;
  }
  
    runLogic(){
      this.x += this.speed;
       
      //generateArray
    }
    shoot(){
      this.game.generateBullets(); 
    }
  
    paint () {
      const context = this.game.context;
      context.save();
      context.fillStyle ='white';
      context.fillRect(this.x, this.y, this.width, this.height);
      context.restore();
      }

    }
    