// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Precargas extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("precargas");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    
  }
  preload() { 
    // load assets

    
    this.load.tilemapTiledJSON("mapa2","./public/tilemap/mapa2.json");
    this.load.tilemapTiledJSON("mapa3","./public/tilemap/mapa3.json");
    this.load.tilemapTiledJSON("mapa5","./public/tilemap/mapa5.json");
    this.load.tilemapTiledJSON("mapa6","./public/tilemap/mapa6.json");
    this.load.tilemapTiledJSON("mapa2.1","./public/tilemap/mapa2.1.json");
    
    this.load.image("tile", "./public/images/tile.png");
    this.load.image("fondo", "./public/images/fondo.png");
    this.load.image("nube", "./public/images/nube.png");

    

    this.load.image("menu", "./public/images/menu.png");
    this.load.image("obstaculo","./public/images/obstaculo.png");
    this.load.image("trampolin","./public/images/trampolin.png");
    
    this.load.image("jugar","./public/images/jugar.png");
    this.load.image("menu-boton","./public/images/boton-menu.png");
    this.load.image("reiniciar","./public/images/boton-reiniciar.png");
    this.load.image("saltar","./public/images/flecha.png");
    this.load.image("reiniciar","./public/images/boton-reiniciar.png");
    this.load.image("gameOver","./public/images/gameOver.png");
    this.load.image("gameOver2", "./public/images/gameOver2.png");
    this.load.image("historia", "./public/images/historia.png");  
    this.load.image("winner", "./public/images/winner.png");
    
    
    this.load.image("story1", "./public/images/story-1.png"); 
    this.load.image("story2", "./public/images/story-2.png"); 
    this.load.image("story3", "./public/images/story-3.png");  

    this.load.spritesheet("pj", "./public/images/PJ.png", { frameWidth: 64, frameHeight: 64});
    this.load.spritesheet("pj-c", "./public/images/pj-casco.png", { frameWidth: 55, frameHeight: 64});

    this.load.audio("music", "./public/music/music.wav");
    
   
  }

  create() {

    // create game objects

    this.music = this.sound.add("music", { loop: true});
    this.music.play();

    //animaciones del pj

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("pj", { start:4, end: 4}),
      frameRate: 10, 
      repeat: 1,
    });
  
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("pj", { start: 5, end: 5 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "jump1",
      frames: this.anims.generateFrameNumbers("pj", { start: 2, end: 2 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "jump2",
      frames: this.anims.generateFrameNumbers("pj", { start: 7, end: 7 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "fall1",
      frames: this.anims.generateFrameNumbers("pj", { start: 1, end: 1 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "fall2",
      frames: this.anims.generateFrameNumbers("pj", { start: 8, end: 8 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "muerte",
      frames: this.anims.generateFrameNumbers("muerte", { start: 0, end: 2 }),
      frameRate: 10,
      repeat: 0,
    });

    //animaciónes del pj-c
    this.anims.create({
      key: "izquierda",
      frames: this.anims.generateFrameNumbers("pj-c", { start:2, end: 2}),
      frameRate: 10, 
      repeat: 1,
    });
  
    this.anims.create({
      key: "derecha",
      frames: this.anims.generateFrameNumbers("pj-c", { start: 3, end: 3 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "salto1",
      frames: this.anims.generateFrameNumbers("pj-c", { start: 1, end: 1 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "salto2",
      frames: this.anims.generateFrameNumbers("pj-c", { start: 4, end: 4 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "caida1",
      frames: this.anims.generateFrameNumbers("pj-c", { start: 0, end: 0 }),
      frameRate: 10,
      repeat: 1,
    });

    this.anims.create({
      key: "caida2",
      frames: this.anims.generateFrameNumbers("pj-c", { start: 5, end: 5 }),
      frameRate: 10,
      repeat: 1,
    });

    this.scene.start("menu");

    

    
  }

  update() {
   
  }
}
