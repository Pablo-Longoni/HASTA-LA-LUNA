// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Story extends Phaser.Scene {
  constructor() {
    super("story");
    
  }

  init() {
    this.isGameOver = false;
    
  }

  preload() {
    // cargar los recursos
  }

  create() {
    const map = this.make.tilemap({ key: "mapa2" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const capaFondo = map.addTilesetImage("fondo", "fondo");
    const capaPlataformas = map.addTilesetImage("tile", "tile");
   
    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer("plataformas", capaPlataformas, 0, 0);
    const objectosLayer = map.getObjectLayer("objetos");

    
    plataformaLayer.setCollisionByProperty({ colision: true });
    
  
    console.log("spawn point player", objectosLayer);

    // crear el jugador
    // Find in the Object Layer, the name "jugador" and get position
    let spawnPoint = map.findObject("objetos", (obj) => obj.name === "jugador");
    console.log(spawnPoint);

    // The player and its settings
    this.jugador = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "pj");

    //  Player physics properties. Give the little guy a slight bounce.
    this.jugador.setBounce(0.1);
    this.jugador.setCollideWorldBounds(true);

    spawnPoint = map.findObject("objetos", (obj) => obj.name === "salida");
    console.log("spawn point salida ", spawnPoint);
    this.salida = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "nube").setScale(0.1);

    spawnPoint = map.findObject("objetos", (obj) => obj.name === "trampolin");
    console.log("spawn point trampolin ", spawnPoint);
    this.trampolin = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "trampolin");

    spawnPoint = map.findObject("objetos", (obj) => obj.name === "obstaculo");
    console.log("spawn point obstaculo ", spawnPoint);
    

     // Create empty group of starts
     this.obstaculo = this.physics.add.group();
     // find object layer
     // if type is "stars", add to stars group
     objectosLayer.objects.forEach((objData) => {
       //console.log(objData.name, objData.type, objData.x, objData.y);
       const { x = 0, y = 0, name } = objData;
       switch (name) {
         case "obstaculo": {
           // add star to scene
           // console.log("estrella agregada: ", x, y);
           const obstaculo = this.obstaculo.create(x, y, "obstaculo");
           break;
         }
       }
     });

   
    this.cursors = this.input.keyboard.createCursorKeys();

    //agregado de fisicas      
    this.physics.add.collider(this.jugador, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      plataformaLayer,
      this.eliminarPlataforma,
      null,
      this
    );

    this.physics.add.collider(this.trampolin, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      this.trampolin,
      this.trampolinSalto,
      null,
      this
    );

    this.physics.add.collider(this.obstaculo, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      this.obstaculo,
      this.muerte,
      null,
      this
    );

    

    this.physics.add.collider(this.salida, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      this.salida,
      this.esVencedor,
      null,
      this
    );

    

    //agregar camara sigue pj
    this.cameras.main.startFollow(this.jugador);

    //world bounds
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //camara no sale del mapa
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);



  }

  update() {
   

    if (this.cursors.left.isDown) {
      this.jugador.anims.play("jump_left", true);
      this.jugador.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.jugador.anims.play("jump_right", true);
      this.jugador.setVelocityX(200);
    } else {
      this.jugador.setVelocityX(0);
    }

    if (this.jugador.body.blocked.down) {
      this.jugador.setVelocityY(-300);
    }

  }


    trampolinSalto(jugador, trampolin){
      this.jugador.setVelocityY(-600);
    }
  
    muerte(jugador, obstaculo){
      this.scene.start("gameOverStory", {
        score: this.score,
        maxScore: this.maxScore,
      });
    }
  
    esVencedor(jugador, salida) {
      this.scene.start("story2");
    }

  }
  


