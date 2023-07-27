// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class GameOver extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("gameOver");
  }

  init(data) {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    this.score = data.score; 
    this.maxScore  = data.maxScore;
  }

  create() {
    // create game objects
    this.add.image(200, 310, "gameOver");
      
    this.add.scoreText = this.add.text(85, 215, "Puntuación:"+this.score,{
      fontSize: "30px",
      fill:"#0000",
    });

    this.add.maxScoreText = this.add.text(15, 315, "Máxima puntuación:"+this.maxScore,{
      fontSize: "30px",
      fill:"#00000",
    });

     //boton de volver a jugar
     const button = this.add.image(250, 400, "reiniciar").setScale(0.8)
     .setInteractive();
 
     button.on("pointerover", () => {
       this.game.canvas.style.cursor = "pointer";
     });
 
     button.on("pointerout", () => {
       this.game.canvas.style.cursor = "default";
     });
 
     button.on("pointerdown", () => {
       this.game.canvas.style.cursor = "default";
       this.scene.start("game");
     });
 
     //boton de volver menu
     const button2 = this.add.image(150, 390, "menu-boton").setScale(0.8)
     .setInteractive();
 
   button2.on("pointerover", () => {
     this.game.canvas.style.cursor = "pointer";
   });
 
   button2.on("pointerout", () => {
     this.game.canvas.style.cursor = "default";
   });
 
   button2.on("pointerdown", () => {
     this.game.canvas.style.cursor = "default";
     this.scene.start("menu");
   });
 
   }


  update() {
    // update game objects
  }
}
