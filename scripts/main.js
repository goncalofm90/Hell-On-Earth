

window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas');
  const game = new Game(canvas);
  game.setKeyBindings();
  game.drawStartScreen();

  document.getElementById("startGame").addEventListener('click', () =>{
    const mainsongUrl = 'audio/MAINSONG.mp3';
    const mainSong = new Audio(mainsongUrl);
    mainSong.play();
    mainSong.volume = 0.5;
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
  

 