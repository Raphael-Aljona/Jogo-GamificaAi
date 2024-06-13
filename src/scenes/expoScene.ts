import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { Npc } from "../actors/npc";

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
        let tiledMap = Resources.Mapa

        // Definir offset para renderizar certo o mapa
        let offsetX = 138
        let offsetY = 100

        // Adicionar o mapa na cena
        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY)
        })

        // Definir zoom da camera aumentar um pouco a visualização
        this.camera.zoom = 1.2

        // Carregar spawnpoint Player
        let spawnPoint = tiledMap.getObjectsByName("player_spawn")[0]

        // Criação e configuração do player
        let jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        // Funciona como um z-index
        jogador.z = 2,


        // Adicionar o player na cena
        this.add(jogador)

        // Adicionar npc
        let npcSpawnpointA = tiledMap.getObjectsByName("npc_a")[0]
        // Adicionar npcB
        let npcSpawnpointB = tiledMap.getObjectsByName("npc_b")[0]
        // Adicionar npcB
        let npcSpawnpointC = tiledMap.getObjectsByName("npc_c")[0]

        let npcA = new Npc (
            vec(npcSpawnpointA.x + offsetX, npcSpawnpointA.y + offsetY),
            Color.Blue,
            "NpcA"
            )
 
        let npcB = new Npc (
            vec(npcSpawnpointB.x + offsetX, npcSpawnpointB.y + offsetY),
            Color.Green,
            "NpcB"
            )
        
        let npcC = new Npc (
            vec(npcSpawnpointC.x + offsetX, npcSpawnpointC.y + offsetY),
            Color.Yellow,
            "NpcC"
            )

        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        // Focar a camera no player
        this.camera.strategy.lockToActor(jogador)
            
        // Adicionar colisão com cada objeto
        // Pegar a camda de objetos colisores
        let camadaObjetosColisoes = tiledMap.getObjectLayers("ObjetosColisores")[0]

        console.log(camadaObjetosColisoes)
        
        // Percorrer os objetos com foreach e para cada objeto, renderizar um actor
        camadaObjetosColisoes.objects.forEach(objeto => {
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
            })
            this.add(objetoAtual)
        })

    }
}