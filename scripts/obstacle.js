class Obstacle {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = this.game.canvas.height;
    this.health = 1000;
  }
    runLogic(){

    }


    // enemy collision with obstacle -= 10 score;
    
    paint () {
      const context = this.game.context;
      context.save();
      // context.fillStyle = '#575757';
      // context.fillRect(this.x, this.y, this.width, this.height)
      const barricade = new Image();
      barricade.src = 'images/zombie/barricade1.png';
      context.drawImage(barricade, this.x,this.y,this.width + 50,this.height)
      if(this.health === 0){
        const deadbarricade = new Image();
      deadbarricade.src = 'images/zombie/barricadedead.png';
      context.drawImage(deadbarricade, this.x + 1300,this.y,this.width + 30,this.height)
      }
      context.fillStyle= 'white';
      context.font = '27px Roboto Mono';
      context.fillText('Barricade: ' + this.health, 20, 600);
      context.restore();
      }
    }

    // paint () {
    //   const context = this.game.context;
    //   context.save();
    //   // context.fillStyle ='darkGreen';
    //   // context.fillRect(this.x, this.y, this.width, this.height);
    //   const zombie = new Image();
    //   zombie.src = 'images/zombie/zombie2.png';
    //   context.drawImage(zombie, this.x,this.y,this.width,this.height) 
    //   context.restore();
    //   }