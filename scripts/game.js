

class Game {
  constructor (canvas) {
    this.canvas= canvas;
    this.context = canvas.getContext('2d');
    this.player = new Soldier(100,100,this);
    this.scoreboard = new Scoreboard(this);
    this.health = new Health(this);
    this.setKeyBindings();
    }
    setKeyBindings(){
      this.player.runLogic();
      document.addEventListener('keydown', event => {
        // Stop the default behavior (moving the screen to the left/up/right/down)
     
       switch (event.keyCode) {
         case 37:
           event.preventDefault();
          this.player.moveLeft();
           break;
         case 38:
           event.preventDefault();
           this.player.moveUp();
           break;
         case 39:
           event.preventDefault();
           this.player.moveRight();
           break;
         case 40:
           event.preventDefault();
           this.player.moveDown();
           break;
       }
   });
    }
   
    runLogic(){
      
    }
    clean(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    paint(){
      this.player.paint();
      this.scoreboard.paint();
      this.health.paint();
      
    }
    loop(){
      this.runLogic();
      this.clean();
      this.paint();
    
      // this.clean();

      setTimeout ( () => {
        this.loop();
      },1000/60)
  }
  

}
