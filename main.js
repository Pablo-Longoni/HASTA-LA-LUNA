import Menu from "./src/scenes/Menu.js";
import Precarga from "./src/scenes/Precarga.js";
import Game from "./src/scenes/Game.js";
import GameOver from "./src/scenes/GameOver.js";
// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 750,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 600,
      height: 750,
    },
    max: {
      width: 1200,
      height: 1500,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Precarga, Menu, Game, GameOver],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
