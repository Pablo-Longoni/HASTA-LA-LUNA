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
  }

  preload(){
  }

  create() {
    // create game objects
    this.add.image(200, 310, "gameOver2");
      
    this.add.scoreText = this.add.text(175, 415, ""+this.score, { fontSize: "30px", fill: "#ffffff" });
  


     //boton de volver a jugar
     const button = this.add.image(270, 545, "reiniciar").setScale(0.5)
     .setInteractive();
 
     button.on("pointerover", () => {
       this.game.canvas.style.cursor = "pointer";
       button.setScale(0.6);
     });
 
     button.on("pointerout", () => {
       this.game.canvas.style.cursor = "default";
       button.setScale(0.5);
     });
 
     button.on("pointerdown", () => {
       this.game.canvas.style.cursor = "default";
       this.scene.start("game");
     });
 
     //boton de volver menu
     const button2 = this.add.image(150, 540, "menu-boton").setScale(0.5)
     .setInteractive();
 
   button2.on("pointerover", () => {
     this.game.canvas.style.cursor = "pointer";
     button2.setScale(0.6);
   });
 
   button2.on("pointerout", () => {
     this.game.canvas.style.cursor = "default";
     button2.setScale(0.5);
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
