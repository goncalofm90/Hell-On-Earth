class Projectile {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 15;
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
      // context.fillStyle ='yellow';
      // context.fillRect(this.x, this.y, this.width, this.height);
      const bullet = new Image();
      bullet.src = 'images/player/bullet.png';
      context.drawImage(bullet, this.x,this.y,this.width,this.height) 
      context.restore();
      }

    }
    
    // // paint () {
    // //   const context = this.game.context;
    // //   context.save();
    // //   // context.fillStyle ='darkGreen';
    // //   // context.fillRect(this.x, this.y, this.width, this.height);
    //   const zombie = new Image();
    //   zombie.src = 'images/zombie/zombie2.png';
    //   context.drawImage(zombie, this.x,this.y,this.width,this.height) 
    // //   context.restore();
    // //   }