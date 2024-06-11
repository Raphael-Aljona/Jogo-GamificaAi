import { Actor, Color, Engine, Input, Keys, vec } from "excalibur";

export class Player extends Actor{
    private velocidade:number = 180


    // Configuração do player
    constructor() {
        super({
            pos: vec(500, 500),
            width: 32,
            height: 32,
            name:"Jogador",
            color: Color.Red,
        })
    }
        
    onInitialize(engine: Engine<any>): void {
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

