// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class GameOver extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("gameOver");
  }

  init(data) {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    this.score = data.score; 
    this.maxScore  = data.maxScore;
  }

  create() {
    // create game objects
    this.add.image(200, 310, "fondo");
    this.gameOverText = this.add.text(50, 85, "PERDISTE", {
      fontSize: "60px",
      fill: "#000",
    });

    this.add.scoreText = this.add.text(90, 215, "Puntuación:"+this.score,{
      fontSize: "30px",
      fill:"#000",
    });

    this.add.maxScoreText = this.add.text(20, 315, "Máxima puntuación:"+this.maxScore,{
      fontSize: "30px",
      fill:"#000",
    });

    //boton de volver a jugar
    const button = this.add.text(20, 550, "VOLVER A JUGAR", {
        fontSize: "40px",
        fill: "#E0CDF8",
      })
      .setInteractive();

    button.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";
    });

    button.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
    });

    button.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      this.scene.start("game");
    });

  }

  update() {
    // update game objects
  }
}
