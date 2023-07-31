// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Animation extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("animation2");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    
  }
  preload() { 
    
    this.load.image("story4", "./public/images/story-4.png"); 
    this.load.image("story5", "./public/images/story-5.png"); 
   
  }

  create() {

    // create game objects

    //boton de volver a saltar
   /* const button = this.add.image(350, 600, "saltar").setInteractive();

    button.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";
    });

    button.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
    });

    button.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      this.scene.start("story");
    });*/

  
     this.story5 = this.add.image(200, 310, "story5");
    
     // Desvanecer story1 y mostrar story2 después de segundos
     this.tweens.add({
       targets: this.story5,
       alpha: 0,
       duration: 500,
       ease: "Power0",
       delay: 1500,
       onComplete: () => {
         //  mostrar la imagen story2
         this.story5.setVisible(false);
         this.story4 = this.add.image(200, 310, "story4");

         // Iniciar la escena story después de segundos
         setTimeout(() => {
          this.scene.start("winner");
        }, 1500); 
           },
         });
    
  }

  update() {
    // update game objects
  }
}
