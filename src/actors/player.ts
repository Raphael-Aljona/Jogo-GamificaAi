import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Input, Keys, Side, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    private velocidade: number = 180

    private temObjetoProximo: boolean = false
    private ultimoColisor?: Collider

    // Configuração do player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active,


        })
    }

    onInitialize(engine: Engine<any>): void {
        // Ativar o modo de Debug
        // engine.toggleDebug()

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
                originOffset: {
                    y: 0
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
        // this.graphics.use("left-idle")

        // Idle para direita
        const rightIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(0, 1) },
                { graphic: playerSpriteSheet.getSprite(1, 1) },
                { graphic: playerSpriteSheet.getSprite(2, 1) },
                { graphic: playerSpriteSheet.getSprite(3, 1) },
                { graphic: playerSpriteSheet.getSprite(4, 1) },
                { graphic: playerSpriteSheet.getSprite(5, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-idle", rightIdle)
        // this.graphics.use("right-idle")

        // Idle para cima
        const upIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(6, 1) },
                { graphic: playerSpriteSheet.getSprite(7, 1) },
                { graphic: playerSpriteSheet.getSprite(8, 1) },
                { graphic: playerSpriteSheet.getSprite(9, 1) },
                { graphic: playerSpriteSheet.getSprite(10, 1) },
                { graphic: playerSpriteSheet.getSprite(11, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-idle", upIdle)
        // this.graphics.use ("up-idle")

        // Idle para baixo
        const downIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(18, 1) },
                { graphic: playerSpriteSheet.getSprite(19, 1) },
                { graphic: playerSpriteSheet.getSprite(20, 1) },
                { graphic: playerSpriteSheet.getSprite(21, 1) },
                { graphic: playerSpriteSheet.getSprite(22, 1) },
                { graphic: playerSpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle", downIdle)
        // Necessário deixar esse para ja começar com o bonequinho na tela
        this.graphics.use("down-idle")

        engine.input.keyboard.on("press", (event) => {
            if (event.key == Keys.A || event.key == Keys.Left) {
                this.graphics.use("left-idle")
            }
            else if (event.key == Keys.D || event.key == Keys.Right) {
                this.graphics.use("right-idle")
            }
            else if (event.key == Keys.S || event.key == Keys.Down) {
                this.graphics.use("down-idle")
            }
            else if (event.key == Keys.W || event.key == Keys.Up) {
                this.graphics.use("up-idle")
            }
        })

        // Animação andando
        // Andando para a esquerda
        const leftWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(12, 2) },
                { graphic: playerSpriteSheet.getSprite(13, 2) },
                { graphic: playerSpriteSheet.getSprite(14, 2) },
                { graphic: playerSpriteSheet.getSprite(15, 2) },
                { graphic: playerSpriteSheet.getSprite(16, 2) },
                { graphic: playerSpriteSheet.getSprite(17, 2) }
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-walk", leftWalk)
        // this.graphics.use("left-walk")

        // Andando para direita
        const rightWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(0, 2) },
                { graphic: playerSpriteSheet.getSprite(1, 2) },
                { graphic: playerSpriteSheet.getSprite(2, 2) },
                { graphic: playerSpriteSheet.getSprite(3, 2) },
                { graphic: playerSpriteSheet.getSprite(4, 2) },
                { graphic: playerSpriteSheet.getSprite(5, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-walk", rightWalk)
        // this.graphics.use("right-walk")

        // Andando para cima
        const upWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(6, 2) },
                { graphic: playerSpriteSheet.getSprite(7, 2) },
                { graphic: playerSpriteSheet.getSprite(8, 2) },
                { graphic: playerSpriteSheet.getSprite(9, 2) },
                { graphic: playerSpriteSheet.getSprite(10, 2) },
                { graphic: playerSpriteSheet.getSprite(11, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-walk", upWalk)
        // this.graphics.use ("up-walk")

        // Andando para baixo
        const downWalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(18, 2) },
                { graphic: playerSpriteSheet.getSprite(19, 2) },
                { graphic: playerSpriteSheet.getSprite(20, 2) },
                { graphic: playerSpriteSheet.getSprite(21, 2) },
                { graphic: playerSpriteSheet.getSprite(22, 2) },
                { graphic: playerSpriteSheet.getSprite(23, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-walk", downWalk)
        // this.graphics.use ("down-walk")

        // Animação aplicada ao andar para tais direções
        // Poderia ser feito junto abaixo, pois tem a mesma estrutura
        engine.input.keyboard.on("hold", (event) => {
            switch (event.key) {
                case Keys.A:
                case Keys.Left:
                    this.graphics.use("left-walk")
                    break;
                case Keys.D:
                case Keys.Right:
                    this.graphics.use("right-walk")
                    break;
                case Keys.W:
                case Keys.Up:
                    this.graphics.use("up-walk")
                    break;
                case Keys.S:
                case Keys.Down:
                    this.graphics.use("down-walk")
                    break;
            }
        })


        // Configurar player para "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está sendo pressionada
            switch (event.key) {
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
                    this.vel.x = 0
                    this.vel.y = 0
            }

        })
        // Ao ficar parado a animação fica da forma estática (Idle)
        // Poderia ser feito na linhas abaixo, pois tem a mesma estrutura
        engine.input.keyboard.on("release", (event) => {
            switch (event.key) {
                case Keys.A:
                case Keys.Left:
                    this.graphics.use("left-idle")
                    break;
                case Keys.D:
                case Keys.Left:
                    this.graphics.use("right-idle")
                    break;
                case Keys.W:
                case Keys.Up:
                    this.graphics.use("up-idle")
                    break;
                case Keys.S:
                case Keys.Down:
                    this.graphics.use("down-idle")
                    break;
            }
        })

        // Configurar o evento para monitorar o "release" soltar
        engine.input.keyboard.on("release", (event) => {
            // Fazer o player parar ao soltar as teclas de movimentação
            if (
                event.key == Keys.A || Keys.Left || Keys.Right || Keys.D
            ) {
                // Zerar a velocidade horizontal
                this.vel.x = 0
            }

            if (
                event.key == Keys.W || Keys.Up || Keys.S || Keys.Down
            ) {
                // Zerar a velocidade vertical
                this.vel.y = 0
            }
        })

        // Configura o player para monitorar evento "pressionar"
        engine.input.keyboard.on ("press", (event) => {
            if (event.key == Keys.F && this.temObjetoProximo) {
                // Identificar o alvo da interação
                    if (this.ultimoColisor?.owner.name == "mesa_stand_a"){
                        console.log("essa é a mesa A")

                        engine.goToScene("case", {
                            sceneActivationData: {
                                nomeDoActor: this.ultimoColisor?.owner.name
                            }
                        })
                    }
                    if (this.ultimoColisor?.owner.name == "mesa_stand_b"){
                        console.log("essa é a mesa B")

                        engine.goToScene("case", {
                            sceneActivationData: {
                                nomeDoActor: this.ultimoColisor?.owner.name
                            }
                        })
                    }
                    if (this.ultimoColisor?.owner.name == "mesa_stand_c"){
                        console.log("essa é a mesa C")

                        engine.goToScene("case", {
                            sceneActivationData: {
                                nomeDoActor: this.ultimoColisor?.owner.name
                            }
                        })
                    }



            }
        })

    }

    onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        // Indicar que tem um objeto proximo
        this.temObjetoProximo = true

        // Registrar ultimo objeto colidido
        this.ultimoColisor = other


    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        // Detectar se o player distante do ultimo objeto colidido
        if (this.ultimoColisor && this.pos.distance(this.ultimoColisor.worldPos) > 40){
            // Marcar que o objeto não está proximo
            this.temObjetoProximo = false
            
            console.log("Está longe")
        }
    }

}

