// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Animation extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("animation");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    
  }
  preload() { 
    
    this.load.image("story1", "./public/images/story1.png"); 
    this.load.image("story2", "./public/images/story2.png"); 
    this.load.image("story3", "./public/images/story3.png"); 
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

  
     this.story1 = this.add.image(200, 310, "story1");
    
     // Desvanecer story1 y mostrar story2 después de segundos
     this.tweens.add({
       targets: this.story1,
       alpha: 0,
       duration: 500,
       ease: "Power0",
       delay: 1500,
       onComplete: () => {
         //  mostrar la imagen story2
         this.story1.setVisible(false);
         this.story2 = this.add.image(200, 310, "story2");
         
         // Desvanecer story2 y mostrar story3 después de  segundos
         this.tweens.add({
           targets: this.story2,
           alpha: 0,
           duration: 500,
           ease: "Power0",
           delay: 1500,
           onComplete: () => {
             //  mostrar la imagen story3
             this.story2.setVisible(false);
             this.story3 = this.add.image(200, 310, "story3");
 
             // Iniciar la escena story después de segundos
             setTimeout(() => {
               this.scene.start("story");
             }, 1500);
           },
         });
       },
     });
    
  }

  update() {
    // update game objects
  }
}
