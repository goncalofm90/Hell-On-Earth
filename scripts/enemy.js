class Enemy {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.health = 1;
    this.speed = 20;
  }


    runLogic(){
      this.x -= 2.5;

  
    }

    
    paint () {
      const context = this.game.context;
      context.save();
      // context.fillStyle ='darkGreen';
      // context.fillRect(this.x, this.y, this.width, this.height);
      const zombie = new Image();
      zombie.src = 'images/zombie/zombie2.png';
      context.drawImage(zombie, this.x,this.y,this.width,this.height) 
      context.restore();
      }


     
    }


  
    




