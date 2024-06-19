import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector,} from "excalibur";
import { Resources } from "../resources";

export class Npc extends Actor {
    constructor (posicao: Vector, cor: Color, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed,
        })
    }

    onInitialize(engine: Engine<any>): void {
        const npcASpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0,
                }
            }
        })
        const npcBSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcBSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0,
                }
            }
        })
        const npcCSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcCSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0,
                }
            }
        })

        let duracao = 70
        const npcAIdleDown = new Animation({
            frames: [
                {graphic: npcASpriteSheet.getSprite(18, 1)},
                {graphic: npcASpriteSheet.getSprite(19, 1)},
                {graphic: npcASpriteSheet.getSprite(20, 1)},
                {graphic: npcASpriteSheet.getSprite(21, 1)},
                {graphic: npcASpriteSheet.getSprite(22, 1)},
                {graphic: npcASpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracao
        })
        const npcBIdleDown = new Animation({
            frames: [
                {graphic: npcBSpriteSheet.getSprite(18, 1)},
                {graphic: npcBSpriteSheet.getSprite(19, 1)},
                {graphic: npcBSpriteSheet.getSprite(20, 1)},
                {graphic: npcBSpriteSheet.getSprite(21, 1)},
                {graphic: npcBSpriteSheet.getSprite(22, 1)},
                {graphic: npcBSpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracao
        })
        const npcCIdleDown = new Animation({
            frames: [
                {graphic: npcCSpriteSheet.getSprite(18, 1)},
                {graphic: npcCSpriteSheet.getSprite(19, 1)},
                {graphic: npcCSpriteSheet.getSprite(20, 1)},
                {graphic: npcCSpriteSheet.getSprite(21, 1)},
                {graphic: npcCSpriteSheet.getSprite(22, 1)},
                {graphic: npcCSpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracao
        })
        this.graphics.add("npcA", npcAIdleDown)
        this.graphics.add("npcB", npcBIdleDown)
        this.graphics.add("npcC", npcCIdleDown)
    
        let spriteNPC = this.name
    
        this.graphics.use(spriteNPC)
    }
}