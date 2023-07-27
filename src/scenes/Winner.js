// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Winner extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("winner");
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
    this.add.image(200, 310, "fondo");
    this.gameOverText = this.add.text(60, 85, "Ganaste", {
      fontSize: "60px",
      fill: "#000",
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
      this.scene.start("story");
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
