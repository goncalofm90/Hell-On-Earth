

window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas');
  const game = new Game(canvas);
  game.setKeyBindings();
  game.drawStartScreen();

  document.getElementById("startGame").addEventListener('click', () =>{
    const mainsongUrl = 'audio/MAINSONG.mp3';
    const mainSong = new Audio(mainsongUrl);
    mainSong.play();
    const guncockUrl = 'audio/GUNCOCK.wav'
    const gunCock = new Audio(guncockUrl);
    gunCock.play();
    game.running = true
    if(game.running){
      game.loop()
    }else {
      game.drawStartScreen();
      }
  
    });
});
  

 

  



// window.addEventListener(‘load’, () => {
//   const canvas = document.querySelector(‘canvas’);
//   const game = new Game(canvas);
//   // game.setKeyBindings();
//   game.drawStartScreen();
// });
// button.addEventListener('click', () =>{
// game.loop() --> here you start the game!
// })






// function setKeyBindings(){
//   document.addEventListener('keydown', event => {
//     // Stop the default behavior (moving the screen to the left/up/right/down)
 
//    switch (event.keyCode) {
//      case 65:
//         event.preventDefault();
//         this.soldier.moveLeft();
//        break;
//      case 87:
//        event.preventDefault();
//        this.soldier.moveUp();
//        break;
//      case 68:
//        event.preventDefault();
//        this.soldier.moveRight();
//        break;
//      case 83:
//        event.preventDefault();
//        this.soldier.moveDown();
//        break;
//      case 32:
//         event.preventDefault();
//         this.projectile.shoot();
//         break;
//     case 13:
//       //  location.reload();
//       if(this.game.running = false){
//         console.log("key fired")
//         this.game.running = true;
//       }
//     }
//   });
// }

