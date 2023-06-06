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

  create() {
    // create game objects
    this.add.image(300, 600, "fondo").setScale(5);
    this.add.image(300, 600, "pj").setScale(5);
    this.menuText = this.add.text(155, 100, "HASTA LA LUNA", {
      fontSize: "40PX",
      fill: "#E0CDF8",
      textAlign: "center",
    });

    //boton de jugar
    const button = this.add
      .text(170, 400, "Jugar", {
        fontSize: "40px",
        fill: "0000",
      })
      .setInteractive();

    button.on("pointerover", () => {
      button.setBackgroundColor("#F9EBA");
      this.game.canvas.style.cursor = "pointer";
    });

    button.on("pointerout", () => {
      button.setBackgroundColor("#D9880");
      this.game.canvas.style.cursor = "default";
    });

    button.on("pointerdown", () => {
      button.setBackgroundColor("#C0392B");
      this.game.canvas.style.cursor = "default";
      this.scene.start("game");
    });
  }

  update() {
    // update game objects
  }
}
