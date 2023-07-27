// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Precarga extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("precarga");
  }

  preload() {
    // load assets

    
    this.load.tilemapTiledJSON("mapa2","./public/tilemap/mapa2.json");
    this.load.tilemapTiledJSON("mapa3","./public/tilemap/mapa3.json");
    this.load.tilemapTiledJSON("mapa4","./public/tilemap/mapa4.json");
    this.load.tilemapTiledJSON("mapa5","./public/tilemap/mapa5.json");
    this.load.tilemapTiledJSON("mapa6","./public/tilemap/mapa6.json");
    this.load.tilemapTiledJSON("mapa2.1","./public/tilemap/mapa2.1.json");
    
    this.load.image("tile", "./public/images/tile.png");
    this.load.image("fondo", "./public/images/fondo.png");
    this.load.image("nube", "./public/images/nube.png");

    this.load.spritesheet("pj", "./public/images/pj.png", { frameWidth: 64, frameHeight: 64});

    this.load.image("menu", "./public/images/menu.png");
    this.load.image("obstaculo","./public/images/obstaculo.png");
    this.load.image("trampolin","./public/images/trampolin.png");
    this.load.image("pausa","./public/images/pausa.png");
    this.load.image("jugar","./public/images/jugar.png");
    this.load.image("menu-boton","./public/images/boton-menu.png");
    this.load.image("reiniciar","./public/images/boton-reiniciar.png");
    this.load.image("saltar","./public/images/flecha.png");
    this.load.image("reiniciar","./public/images/boton-reiniciar.png");
    this.load.image("gameOver","./public/images/gameOver.png");
    this.load.video("story1", "./public/images/story1.gif"); 

   // this.load.audio("music", "./public/music/music.wav");

  }

  create() {
    // create game objects
     //  Our player animations, turning, walking left and walking right.
    // se crea una sola vez, para que no de error en el restart de la escena
   /* this.anims.create({
      key: "jump_left",
      frames: this.anims.generateFrameNumbers("pj", { start:4, end: 0}),
      frameRate: 10, 
      repeat: 1,
    });*/
  
    /*this.anims.create({
      key: "jump_right",
      frames: this.anims.generateFrameNumbers("pj", { start: 5, end: 9 }),
      frameRate: 10,
      repeat: 1,
    });*/

    this.music = this.sound.add("music", { loop: true});
    this.music.play();
  }

  update() {
    // update game objects
  }
  init() {
    //init scene menu
    this.scene.start("menu");
  }
}



