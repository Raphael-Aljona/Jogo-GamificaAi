import { Engine } from "excalibur";
import { welcomeScene } from "./scenes/welcomeScene";

const game = new Engine({
    height: 800,
    width: 1200,
    canvasElementId: "jogo"
})

game.addScene("bemvindo", new welcomeScene())

game.start().then(() => {
    game.goToScene("bemvindo")
})