import { Actor, Animation, CollisionType, Color, Engine, Input, Keys, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor{
    private velocidade:number = 180


    // Configuração do player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name:"Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active,
            

        })
    }
        
    onInitialize(engine: Engine<any>): void {
        // Ativar o modo de Debug
        engine.toggleDebug()

        // Configurar Sprite do Player
        const playerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
            grid: {
                spriteHeight: 64,
                spriteWidth: 32,
                columns: 56,
                rows: 20,
            },
            spacing: {
                originOffset:{
                    y: 8
                } 
            }

        })

        // Criar as animações
        const duracaoFrameAnimacao = 70
        // Animações idle(Estático)
        // Idle esquerda
        const leftIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(12, 1) },
                { graphic: playerSpriteSheet.getSprite(13, 1) },
                { graphic: playerSpriteSheet.getSprite(14, 1) },
                { graphic: playerSpriteSheet.getSprite(15, 1) },
                { graphic: playerSpriteSheet.getSprite(16, 1) },
                { graphic: playerSpriteSheet.getSprite(17, 1) }
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-idle", leftIdle)
        this.graphics.use("left-idle")

        const rightIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(1, 1) },
                { graphic: playerSpriteSheet.getSprite(2, 1) },
                { graphic: playerSpriteSheet.getSprite(3, 1) },
                { graphic: playerSpriteSheet.getSprite(4, 1) },
                { graphic: playerSpriteSheet.getSprite(5, 1) },
                { graphic: playerSpriteSheet.getSprite(6, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-idle", rightIdle)
        this.graphics.use("right-idle")



        // Configurar player para "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event)=>{
            // Detectar qual tecla está sendo pressionada
            switch (event.key){
                case Keys.Left:
                case Keys.A:
                    // Anda pra esquerda
                    this.vel.x = - this.velocidade
                    break;
                case Keys.Right:
                case Keys.D:
                    // Anda pra direita
                    this.vel.x = + this.velocidade
                    break;
                case Keys.Up:
                case Keys.W: 
                    // Anda para cima
                    this.vel.y = - this.velocidade
                    break;
                case Keys.Down:
                case Keys.S:
                    // Anda para baixo
                    this.vel.y = + this.velocidade
                    break;
                default:
                    // Zera a velocidade do player
                    this.vel.x =0
                    this.vel.y =0
            }
        
        })

        // Configurar o evento para monitorar o "release" soltar
        engine.input.keyboard.on("release", (event)=>{
            // Fazer o player parar ao soltar as teclas de movimentação
            if (
                event.key == Keys.A||Keys.Left||Keys.Right||Keys.D
            ) {
                // Zerar a velocidade horizontal
                this.vel.x = 0
            }

            if (
                event.key == Keys.W || Keys.Up || Keys.S|| Keys.Down
            ){
                // Zerar a velocidade vertical
                this.vel.y = 0
            }
        })

    }
    
}

