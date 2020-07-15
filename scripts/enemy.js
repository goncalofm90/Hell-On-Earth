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

  // removeEnemies(){
  //   if(this.health === 0){
  //     const index = this.game.enemies.splice(index,1)
  //   }
  // }
  
    runLogic(){
      this.x --;

  
    }
    
    paint () {
      const context = this.game.context;
      context.save();
      context.fillStyle ='darkGreen';
      context.fillRect(this.x, this.y, this.width, this.height);
      context.restore();
      }
    
      
    }

  
    




