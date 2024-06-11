import { Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        //Carregar o mapa
        let tileMap = Resources.Mapa

        // Definir offset para renderizar certo o mapa
        let offsetX = 138
        let offsetY = 100

        // Adicionar o mapa na cena
        tileMap.addToScene(this, {
            pos: vec(offsetX, offsetY)
        })

        // Definir zoom da camera aumentar um pouco a visualização
        this.camera.zoom = 1.2

        // Criação e configuração do player
        let jogador = new Player()

        // Funciona como um z-index
        jogador.z = 2,


        // Adicionar o player na cena
        this.add(jogador)



    }
}