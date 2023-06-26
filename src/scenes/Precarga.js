// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Precarga extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("precarga");
  }

  preload() {
    // load assets

    this.load.tilemapTiledJSON("mapa1", "public/tilemap/mapa1.json");
    this.load.image("tile", "public/images/tile.png");
    this.load.image("fondo", "public/images/fondo.png");
    this.load.image("obstaculo", "./public/images/obstaculo.png");
    this.load.spritesheet("pj", "public/images/pj.png", { frameWidth: 64, frameHeight: 64});
    this.load.image("menu", "public/images/menu.png");
  }

  create() {
    // create game objects
     //  Our player animations, turning, walking left and walking right.
    // se crea una sola vez, para que no de error en el restart de la escena
    this.anims.create({
      key: "jump_left",
      frames: this.anims.generateFrameNumbers("pj", { frames: [ 0, 1, 2, 3, 4 ] }),
      frameRate: 10, 
      repeat: -1,
    });
  
    this.anims.create({
      key: "jump_right",
      frames: this.anims.generateFrameNumbers("pj", { start: 5, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    // update game objects
  }
  init() {
    //init scene menu
    this.scene.start("menu");
  }
}



