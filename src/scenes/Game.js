// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Game extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("game");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    this.isGameOver = true;
    this.score = 0;
  }

  preload() {
    // load assets
  }

  create() {
    // create game objects
    this.add.image(300, 600, "fondo").setScale(5);

    //fisicas pj
    this.player = this.physics.add.sprite(155, 100, "pj");

    //contador
  }

  update() {
    // update game objects
  }
}
