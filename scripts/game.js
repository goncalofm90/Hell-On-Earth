

class Game {
  constructor (canvas) {
    this.canvas= canvas;
    this.context = canvas.getContext('2d');
    this.soldier = new Soldier(50,250,this);
    this.obstacle = new Obstacle(280,0,this);
    this.projectile = new Projectile(100,100,this);
    this.enemy = new Enemy(1000 + this.randomWidth()/1000,this.randomHeight(),this);
    this.scoreboard = new Scoreboard(this);
    this.health = new Health(this);
    this.enemies = [];
    this.level =1 
    this.projectiles = [];
    this.generateEnemies();
    this.generateBullets();
    this.setKeyBindings();
    }
    setKeyBindings(){
      document.addEventListener('keydown', event => {
        // Stop the default behavior (moving the screen to the left/up/right/down)
     
       switch (event.keyCode) {
         case 65:
            event.preventDefault();
            this.soldier.moveLeft();
           break;
         case 87:
           event.preventDefault();
           this.soldier.moveUp();
           break;
         case 68:
           event.preventDefault();
           this.soldier.moveRight();
           break;
         case 83:
           event.preventDefault();
           this.soldier.moveDown();
           break;
         case 32:
            event.preventDefault();
            this.projectile.shoot();
           

        }
      });
    }

    randomWidth(){
      return Math.floor(Math.random() * Math.floor(this.canvas.width));
    }
     randomHeight(){
      return Math.floor(Math.random() * Math.floor(this.canvas.height));

    }

    generateEnemies(){
      if(!this.enemies.length){
        for (let i = 0; i < 5*this.level; i++) {  
          const enemy = new Enemy(1000 + this.randomWidth()/1000,this.randomHeight()-10,this);
          this.enemies.push(enemy);          
        } 
        this.level+=1
      }
    
  }
  
  



  
    generateBullets(){
      for (let i = 0; i <  5; i++) {  
        const projectile = new Projectile(this.soldier.x+10,this.soldier.y + 20,this);
        this.projectiles.push(projectile);  
      }
    }


    enemyCollision(){
      for(let projectile of this.projectiles){
        for(let enemy of this.enemies){
          if(projectile.x > enemy.x && projectile.x < enemy.x + enemy.width && projectile.y > enemy.y && projectile.y < enemy.y + enemy.height){
            this.enemy.health -= 1;
            this.projectiles.splice(0,10 );
            if(this.enemy.health === 0 || this.enemy.health %1=== 0 ){
              this.enemies.splice(this.enemies.indexOf(enemy),1);
              this.scoreboard.score += 10 ;
            }
          }
         
        }
      }
      //x and width && y and height
      //enemy hp -- 
      //player hp -- if en emy collides
      //obstacle hp -- if enemy collides
    } 



    obstacleCollision(){ 
       for(let enemy of this.enemies){
        if(enemy.x > this.obstacle.x   && enemy.x + enemy.width < this.obstacle.x   && enemy.y > this.obstacle.y  && enemy.y + enemy.height < this.obstacle.y){
          this.enemy.health -= 1;
          this.obstacle.health -=1;
          this.projectiles.splice(0,10 );
          console.log("collision");
          if(this.enemy.health === 0 || this.enemy.health %1=== 0 ){
            this.enemies.splice(this.enemies.indexOf(enemy),1);
            this.scoreboard.score += 10 ;
          }
          if(this.obstacle.health === 0){
            this.obstacle.clearRect(0, 0, this.canvas.width, this.canvas.height);

          }
        }
       
      }
      //enemy hp -- as soon as bullet touches enemy.x loses 1 point
    }

    
 
    runLogic(){
      for(let enemy of this.enemies){
        enemy.runLogic();
      }
      for(let projectile of this.projectiles){
        projectile.runLogic();
      }
      this.enemyCollision();
      this.obstacleCollision();
    }
   
   
    clean(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    paint(){
      this.soldier.paint();
      this.scoreboard.paint();
      for(let enemy of this.enemies){
        enemy.paint();
      }
      for(let projectile of this.projectiles){
        projectile.paint();
      }
      this.obstacle.paint();
      this.health.paint();
      
    }
    loop(){
      this.clean();
      this.generateEnemies();
      this.runLogic();
      this.paint();

    
      // this.clean();

      setTimeout ( () => {
        this.loop();
      },1000/60);
  };

  

}
