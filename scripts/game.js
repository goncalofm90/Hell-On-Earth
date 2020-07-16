
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
          let enemy = new Enemy(1000 + this.randomWidth()/1000 + i * 30,this.randomHeight()-40,this);
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
        if(this.scoreboard.score >= 1000 && this.scoreboard.score % 40 === 0){
            this.enemies.push(enemy2);
            this.enemies.push(enemy3);
            this.enemies.push(enemy4);
            this.enemies.push(enemy5);
            const lickerUrl = 'audio/LICKER.mp3';
            const licker = new Audio(lickerUrl);
            licker.play();
       

      }
      if(this.scoreboard.score >= 700 && this.scoreboard.score % 20 === 10){
        this.enemies.push(enemy6);
        this.enemies.push(enemy7);
        this.enemies.push(enemy8);
        this.enemies.push(enemy9);
        const spiderUrl = 'audio/SPIDER.mp3';
        const spider = new Audio(spiderUrl);
        spider.play();
    }
  }
}

    generateBullets(){
      for (let i = 0; i <  5; i++) {  
        const projectile = new Projectile(this.soldier.x + 80,this.soldier.y + 70,this);
        this.projectiles.push(projectile);  
        const gunshotUrl = 'audio/GUNSHOT.mp3';
          const gunshot = new Audio(gunshotUrl);
          gunshot.play();
          gunshot.volume = 0.18;
        if(this.projectiles.length > 10){
          return;
        }
      }
    }


    enemyCollision(){
      for(let projectile of this.projectiles){
        for(let enemy of this.enemies){
          if(projectile.x > enemy.x && projectile.x < enemy.x + enemy.width && projectile.y > enemy.y && projectile.y < enemy.y + enemy.height){
            enemy.health -= 1;
          if(this.enemies.length < 5){
            const zombieUrl = 'audio/ZOMBIE.mp3';
            const zombie = new Audio(zombieUrl);
            zombie.play();  
          }
            this.projectiles.splice(this.projectiles.indexOf(projectile),10);
            if(enemy.health === 0 || enemy.health % 1=== 0){
              this.enemies.splice(this.enemies.indexOf(enemy),1);
              this.scoreboard.score += 10 ;
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
          const soldierUrl = 'audio/SOLDIERHIT.mp3';          
          const soldier = new Audio(soldierUrl);
          soldier.play();
          this.infection.infection += 10 ;
        if(this.enemy.health === 0 || this.enemy.health %1=== 0 ){
            this.enemies.splice(this.enemies.indexOf(enemy),1);
          }
        }
       
      }
    }

    obstacleCollision(){ 
      if(
        this.obstacle.health === 990 || 
        this.obstacle.health === 890 ||
        this.obstacle.health === 790 ||
        this.obstacle.health === 690 ||
        this.obstacle.health === 590 ||
        this.obstacle.health === 490 ||
        this.obstacle.health === 390 ||
        this.obstacle.health === 290 ||
        this.obstacle.health === 190 ||
        this.obstacle.health === 90){
        const barricadeUrl= 'audio/BARRICADEHIT.mp3';
        const barricade = new Audio(barricadeUrl);
        barricade.play();
      }
      for(let enemy of this.enemies){
       if(enemy.x <= this.obstacle.x + this.obstacle.width){
         this.obstacle.health -=1;
         enemy.x += 5;
         if(this.obstacle.health === 0){
           this.obstacle.x = -1000;
           enemy.x += 1;
           const barricadebreakUrl= 'audio/BARRICADEBREAK.wav';
           const barricadebreak = new Audio(barricadebreakUrl);     
           barricadebreak.play();
         }
       }
     }
   }
   
    gameOver(){
      if(this.soldier.health <= 0 & this.health.health <= 0){
        for(let enemy of this.enemies){
          this.enemies.splice(this.enemies.indexOf(enemy),1);
        }
        this.soldier.width = 0;
        this.context.font = '55px Do Hyeon';
        this.context.fillStyle = 'rgba(255, 0, 12, 0.8)';
        this.context.fillText('YOU\'RE DEMON FOOD', 500, 320);
        this.context.font = '30px Do Hyeon';
        this.context.fillText('Score:' + this.scoreboard.score, 670,370);
        this.context.font = '15px Do Hyeon';
        this.context.fillText('PRESS ENTER TO PLAY AGAIN.', 640,420);
        this.health.health === 0;
        this.running = false;     
    }
  }

    raiseLevel(){
      if (this.infection.infection % 10 === 0){
        this.level += 1;
      }
    }

    removeEnemy(){
      //REMOVE ENEMY FROM MEMORY AND REMOVE HEALTH FROM PLAYER
      for(let enemy of this.enemies){
        if(enemy.x < 0){
          this.soldier.health -= 10;
          this.health.health -= 10;
          this.enemy.health -= 1;
          const soldierUrl = 'audio/SOLDIERHIT.mp3';          
          const soldier = new Audio(soldierUrl);
          soldier.play();
          this.enemies.splice(this.enemies.indexOf(enemy),1);
        if(enemy.x < 0 || enemy.y > 600 || enemy.x > 1000 || enemy.y < 100){
          this.enemy.health -= 1;
          this.enemies.splice(this.enemies.indexOf(enemy),1);   
          this.scoreboard.score += 10;
        }
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

    drawStartScreen(){
      const context = this.context;
      context.save();
      context.restore();
    }
    loop(){
      this.clean();
      this.generateEnemies();
      this.removeEnemy();
      this.gameOver();
      this.removeProjectile();
      this.runLogic();
      this.paint();
    
        setTimeout(() => {
          this.loop();
        }, 1000/60);

     
  }
 }

