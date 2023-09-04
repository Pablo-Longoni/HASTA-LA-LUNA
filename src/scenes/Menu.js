// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Menu extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("menu");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
  }

  preload() { 

    this.load.image("menu", "./public/images/menu.png");
    this.load.image("normal","./public/images/normal.png");
    this.load.image("historia","./public/images/historia.png");
    
  }


  create() {
    // create game objects
    this.add.image(200, 310, "menu");
  

    //boton de jugar historia
    const button = this.add.image(304, 450, "historia")
      .setInteractive();

    button.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";
      button.setScale(1.1);
    });

    button.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
      button.setScale(1);
    });

    button.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      this.scene.start("animation");
    });

    //boton de jugar modo infinito
    const button2 = this.add.image(301, 550, "normal")
      .setInteractive();

    button2.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";
      button2.setScale(1.1);
    });

    button2.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
      button2.setScale(1);
    });

    button2.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      this.scene.start("game");
    });

  }

  update() {
    // update game objects
  }
}
