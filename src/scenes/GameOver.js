// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class GameOver extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("gameOver");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
  }

  create() {
    // create game objects
    this.add.image(300, 600, "fondo");
    this.gameOverText = this.add.text(265, 300, "PERDISTE", {
      fontSize: "60px",
      fill: "#000",
    });
  }

  update() {
    // update game objects
  }
}
