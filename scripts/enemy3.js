class Enemy3 {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.health = 1;
    this.speed = 20;
  }

 
  
    runLogic(){
      if(this.x > 500 && this.game.canvas.height > 0){
        this.x -= 4;
        this.y -= 1;
      }else{
        this.x -= 4;
        this.y += 1;
      }
     
      
      
    }
    paint () {
      const context = this.game.context;
      context.save();
      context.fillStyle ='pink';
      context.fillRect(this.x, this.y, this.width, this.height);
      context.restore();
      }
    
      
    }