import { Engine, FadeInOut } from "excalibur";
import { welcomeScene } from "./scenes/welcomeScene";
import { loader } from "./resources";
import { historyScene } from "./scenes/historyScene";
import { gamificationScene } from "./scenes/gamificationScene";
import { expoScene } from "./scenes/expoScene";

const game = new Engine({
    height: 800,
    width: 1200,
    canvasElementId: "jogo"
})

game.addScene("bemvindo", new welcomeScene())

game.addScene("historia", new historyScene())

game.addScene("gamificacao", new gamificationScene())

game.addScene("exposicao", new expoScene)

game.start(loader).then(() => {
    game.goToScene("gamificacao", {
        sourceOut: new FadeInOut ({duration: 1000})
    })
})