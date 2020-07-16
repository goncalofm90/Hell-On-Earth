
class Game {
  constructor (canvas) {
    this.canvas= canvas;
    this.context = canvas.getContext('2d');
    this.soldier = new Soldier(50,250,this);
    this.obstacle = new Obstacle(280,0,this);
    this.projectile = new Projectile(100,100,this);
    this.enemy = new Enemy(1000 + this.randomWidth()/1000,this.randomHeight(),this);
    this.enemy2 = new Enemy2(1000 + this.randomWidth()/1000,this.randomHeight(),this);
    this.enemy3 = new Enemy3(1000 + this.randomWidth()/1000,this.randomHeight(),this);
    this.scoreboard = new Scoreboard(this);
    this.infection = new Infection(this);
    this.health = new Health(this);
    this.enemies = [];
    this.level =1 
    this.running = false;
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
            break;
        case 13:
           location.reload();
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
          let enemy = new Enemy(1000 + this.randomWidth()/1000 + i * 30,this.randomHeight()-10,this);
          this.enemies.push(enemy);          
        } 
        this.level+=1
        let enemy2 = new Enemy2(1000 + this.randomWidth()/1000 + 1,this.randomHeight()-10,this)
        let enemy3 = new Enemy2(1000 + this.randomWidth()/1000 + 1,this.randomHeight()-10,this)
        let enemy4 = new Enemy2(1000 + this.randomWidth()/1000 + 1,this.randomHeight()-10,this)
        let enemy5 = new Enemy2(1000 + this.randomWidth()/1000 + 1,this.randomHeight()-10,this)
        let enemy6 = new Enemy3(1000 + this.randomWidth()/1000 + 1,500,this)
        let enemy7 = new Enemy3(1000 + this.randomWidth()/1000 + 1,400,this)
        let enemy8 = new Enemy3(1000 + this.randomWidth()/1000 + 1,300,this)
        let enemy9 = new Enemy3(1000 + this.randomWidth()/1000 + 1,200,this)
        if(this.scoreboard.score >=500 && this.scoreboard.score % 50 === 0){
            this.enemies.push(enemy2);
            this.enemies.push(enemy3);
            this.enemies.push(enemy4);
            this.enemies.push(enemy5);
       

      }
      if(this.scoreboard.score >= 700 && this.scoreboard.score % 70=== 0){
        this.enemies.push(enemy6);
        this.enemies.push(enemy7);
        this.enemies.push(enemy8);
        this.enemies.push(enemy9);
    }
  }
}

 
    

  //setInterval(function(){ alert("Hello"); }, 3000);

    generateBullets(){
      for (let i = 0; i <  5; i++) {  
        const projectile = new Projectile(this.soldier.x + 10,this.soldier.y + 20,this);
        this.projectiles.push(projectile);  
      }
    }


    enemyCollision(){
      for(let projectile of this.projectiles){
        for(let enemy of this.enemies){
          if(projectile.x > enemy.x && projectile.x < enemy.x + enemy.width && projectile.y > enemy.y && projectile.y < enemy.y + enemy.height){
            enemy.health -= 1;
            this.projectiles.splice(this.projectiles.indexOf(projectile),10);
            if(enemy.health === 0 || enemy.health % 1=== 0){
              this.enemies.splice(this.enemies.indexOf(enemy),1);
              this.scoreboard.score += 10 ;
              console.log(enemy.health);
            }
          }
         
        }
      }
    } 


    playerCollision(){
      for(let enemy of this.enemies){
        if(this.soldier.x > enemy.x && this.soldier.x < enemy.x + enemy.width && this.soldier.y > enemy.y && this.soldier.y < enemy.y + enemy.height){
          this.soldier.health -= 10;
          this.health.health -= 10;
          this.enemy.health -=1;
          this.infection.infection += 10 ;
        if(this.enemy.health === 0 || this.enemy.health %1=== 0 ){
            this.enemies.splice(this.enemies.indexOf(enemy),1);
          }
        }
       
      }
    }


    obstacleCollision(){ 
      for(let enemy of this.enemies){
       if(enemy.x <= this.obstacle.x + this.obstacle.width){
         this.obstacle.health -=1;
         enemy.x += 5;

         if(this.obstacle.health === 0){
           this.obstacle.x = -10000;
           enemy.x += 1;
         }
       }
     }
   }
    //new game screen- (press enter to play / is running = true)
    //power up gives barricade extra health
   
    gameOver(){
      if(this.soldier.health <= 0 & this.health.health <= 0){
        for(let enemy of this.enemies){
          this.enemies.splice(this.enemies.indexOf(enemy),1);
        }
        this.soldier.width = 0;
        this.context.font = '134px Roboto Mono';
        this.context.fillStyle = 'white';
        this.context.fillText('GAME OVER', 150, 320);
        this.context.font = '60px Roboto Mono';
        this.context.fillText('Score:' + this.scoreboard.score, 370,400);
        this.context.font = '30px Roboto Mono';
        this.context.fillText('Press enter to play again.', 290,460);
        this.health.health === 0;
        this.running = false;     
    }
  }



    raiseLevel(){
      if (this.infection.infection % 10 === 0){
        this.level += 1;
      }
    }

      //REMOVE PLAYERS FROM MEMORY AFTER THEY LEAVE CANVAS




    removeEnemy(){
      //REMOVE ENEMY FROM MEMORY AND REMOVE HEALTH FROM PLAYER
      for(let enemy of this.enemies){
        if(enemy.x < 0){
          this.soldier.health -= 10;
          this.health.health -= 10;
          this.enemies.splice(this.enemies.indexOf(enemy),1);

        }
      }
    }

    removeProjectile(){
      //REMOVE PROJECTILE FROM MEMORY
      for(let projectile of this.projectiles){
        if(projectile.x > 1000){  
          this.projectiles.splice(this.projectiles.indexOf(projectile),1);
        }
      }
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
      this.playerCollision();
     
    }
   
   
    clean(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    paint(){
      this.soldier.paint();
      this.scoreboard.paint();
      this.infection.paint();
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
      this.removeEnemy();
      this.gameOver();
      this.removeProjectile();
      this.runLogic();
      this.paint();

    
     
      
      setTimeout ( () => {
        this.loop();
      },1000/60);
    
  }
 }

