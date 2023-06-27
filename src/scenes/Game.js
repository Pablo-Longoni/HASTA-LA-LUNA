// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
    this.resumeButton = null;
    this.isPaused = false;
  }

  init() {
    this.isGameOver = false;
    this.score = 0;
    this.maxScore = 0;
   
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
    this.salida = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "nube").setScale(0.1);

    spawnPoint = map.findObject("objetos", (obj) => obj.name === "trampolin");
    console.log("spawn point trampolin ", spawnPoint);
    this.trampolin = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "trampolin");

    spawnPoint = map.findObject("objetos", (obj) => obj.name === "obstaculo");
    console.log("spawn point obstaculo ", spawnPoint);
    this.obstaculo = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "obstaculo");


    this.cursors = this.input.keyboard.createCursorKeys();

    //agregado de fisicas
    

  
   
    this.physics.add.collider(this.jugador, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      plataformaLayer,
      (jugador, plataforma) => {
        if (jugador.body.velocity.y > 0) {
          this.eliminarPlataforma(jugador, plataforma);
        }
      },
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

    //agregar texto
    this.scoreText = this.add.text(15, 15, "0", { fontSize: "15px", fill: "#FFFFFF" });

    //agregar camara sigue pj
    this.cameras.main.startFollow(this.jugador);

    //world bounds
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //camara no sale del mapa
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //fijar texto
    this.scoreText.setScrollFactor(0);

    // Crea el botón de pausa
    this.pauseButton = this.add.text(300, 15, "Pausa", { fontSize: "20px", fill: "#FFFFFF" })
      .setInteractive()
      .on("pointerdown", this.pausarJuego, this);

    // Fija el botón de pausa en la cámara
    this.pauseButton.setScrollFactor(0);

    // Crea la imagen de pausa con el botón de reanudar
    this.pausa = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "public/images/pausa.png").setInteractive();
    this.resumeButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "REANUDAR", {
      fontSize: "40px",
      fill: "#E0CDF8",
    }).setOrigin(0.5).setInteractive();

    // Oculta la imagen de pausa y el botón de reanudar inicialmente
    this.pausa.setVisible(false);
    this.resumeButton.setVisible(false);

    // Configura el evento de clic para el botón de reanudar
    this.resumeButton.on("pointerdown", this.reanudarJuego, this);


  }

  update() {
    if (this.jugador.y > 10000 ) {
      this.scene.start("gameOver");
    }

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

    //Puntuación 

    if (this.jugador.body.velocity.y > 0) {
      this.score++;
      this.scoreText.setText(this.score.toString());
    }

    // Actualizar la puntuación máxima si se supera
    if (this.score > this.maxScore) {
      this.maxScore = this.score;
    }

  }

  
  pausarJuego() {
    if (this.isPaused) return;

    // Pausa la escena actual
    this.scene.pause();

    // Muestra la imagen de pausa y el botón de reanudar
    this.pausa.setVisible(true);
    this.resumeButton.setVisible(true);

    // Desactiva el botón de pausa para evitar que se haga clic mientras el juego está pausado
    this.pauseButton.disableInteractive();

    // Actualiza el estado de pausa
    this.isPaused = true;

    console.log("Juego pausado");
  }

  reanudarJuego() {
    if (!this.isPaused) return;

    // Reanuda la escena pausada
    this.scene.resume();

    // Oculta la imagen de pausa y el botón de reanudar
    this.pausa.setVisible(false);
    this.resumeButton.setVisible(false);

    // Activa el botón de pausa nuevamente
    this.pauseButton.setInteractive();

    // Actualiza el estado de pausa
    this.isPaused = false;

    console.log("Juego reanudado");
  }

  trampolinSalto(jugador, trampolin){
    this.jugador.setVelocityY(-600);
  }

  muerte(jugador, obstaculo){
    this.scene.start("gameOver", {
      score: this.score,
      maxScore: this.maxScore,
    });
  }

  eliminarPlataforma(jugador, plataforma) {
    if (jugador.body.velocity.y <= 0) {
      return;
    }
  }

  esVencedor(jugador, salida) {
    console.log("", this.score);

    const escenasDisponibles = [ "game2", "game3", "game4"];
    const indiceAleatorio = Phaser.Math.Between(0, 2);
    const escenaAleatoria = escenasDisponibles[indiceAleatorio];
  
    this.scene.start(escenaAleatoria, {
      score: this.score,
      maxScore: this.maxScore,
    });
  }
}
