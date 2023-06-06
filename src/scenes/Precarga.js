// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Precarga extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("precarga");
  }

  preload() {
    // load assets

    this.load.image("fondo", "./public/images/fondo.png");
    this.load.image("tile", ":/public/images/tile.png");
    this.load.image("obst", ":/public/images/obst.png");
    this.load.image("pj", "./public/image/pj.png");
  }

  create() {
    // create game objects
  }

  update() {
    // update game objects
  }
  init() {
    //init scene menu
    this.scene.start("menu");
  }
}
