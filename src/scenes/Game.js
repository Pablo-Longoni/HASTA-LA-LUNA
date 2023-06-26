// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  init() {
    this.isGameOver = false;
    this.score = 0;
    
  }

  preload() {
    // cargar los recursos
    
  }

  create() {
    const map = this.make.tilemap({ key: "mapa1" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const capaFondo = map.addTilesetImage("fondo", "fondo");
    const capaPlataformas = map.addTilesetImage("tile", "tile");
    const capaObstaculo = map.addTilesetImage("obstaculo", "obstaculo");
  
    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer("plataformas", capaPlataformas, 0, 0);
    const obstaculoLayer = map.createLayer("obstaculo", capaObstaculo, 0, 0);

    const objectosLayer = map.getObjectLayer("objetos");

    plataformaLayer.setCollisionByProperty({ colision: true });
    obstaculoLayer.setCollisionByProperty({colision:true});
    console.log("spawn point player", objectosLayer);

    // crear el jugador
    // Find in the Object Layer, the name "dude" and get position
    let spawnPoint = map.findObject("objetos", (obj) => obj.name === "jugador");
    console.log(spawnPoint);

    // The player and its settings
    this.jugador = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "pj");

    //  Player physics properties. Give the little guy a slight bounce.
    this.jugador.setBounce(0.1);
    this.jugador.setCollideWorldBounds(true);

    spawnPoint = map.findObject("objetos", (obj) => obj.name === "salida");
    console.log("spawn point salida ", spawnPoint);
    this.salida = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "salida").setScale(0.2);

    this.cursors = this.input.keyboard.createCursorKeys();


    //agregado de fisicas
    this.physics.add.collider(this.jugador, plataformaLayer);
    this.physics.add.collider(this.jugador, obstaculoLayer);
  

    this.physics.add.overlap(
      this.jugador,
      plataformaLayer,
      this.eliminarPlataforma,
      null,
      this
    );

    this.physics.add.collider(this.salida, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      this.salida,
      this.esVencedor,
      //() => this.cantidadEstrellas >= 1, // condicion de ejecucion
      this
    );

    this.physics.world.on("collide", this.handleCollision, this);

    //agragar texto 
    this.scoreText = this.add.text(15, 15, "0", { fontSize: "15px", fill: "#FFFFFF" });

    //agregar camara sigue pj
    this.cameras.main.startFollow(this.jugador);

    //world bounds
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //camara no sale del mapa
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //fijar texto 
    this.scoreText.setScrollFactor(0);
  }

  update() {
    if (this.isGameOver) {
      this.scene.start("gameOver");
    }

    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(200);
    } else {
      this.jugador.setVelocityX(0);
    }

    if (this.jugador.body.blocked.down) {
      this.jugador.setVelocityY(-300);
    }
  }


 // tocarObstaculo (jugador, obstaculoLayer){

  //  this.isGameOver = true; 
 // }


  handleCollision(jugador, plataformaLayer) {
    if (jugador.body.touching.down && plataformaLayer.y < jugador.y) {
      this.eliminarPlataforma(jugador, plataformaLayer.gameObject);
    }
  }

  eliminarPlataforma(jugador, plataforma) {
    plataforma.destroy();
    console.log("plataforma eliminada", plataforma);
  

    if (jugador.body.velocity.y > 0) {
      this.score++;
      this.scoreText.setText(this.score.toString());
    }
  }

  esVencedor(jugador, salida) {
    // if (this.cantidadEstrellas >= 5)
    // sacamos la condicion porque esta puesta como 4to parametro en el overlap
    console.log("", this.score);
    this.scene.start("GameOver", {
      score: this.score,
      y: "este es un dato de muestra",
      z: "este es otro atributo enviado a otro escena",
    });
  }
}  


