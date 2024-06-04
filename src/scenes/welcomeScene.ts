import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, Text, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black

        // Configura o objeto para ser a frase de bem-vindo
        let fraseBemVindo = new Label({
            text: "Bem vindo ao portfólio",

            width: 400,
            height: 50,

            pos: vec(engine.drawWidth / 2, 300),

            font: new Font ({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta", 
            })
        })

        // Adiciona a frase na cena
        this.add(fraseBemVindo)

        // Configurar Actor do logo
        let actorLogo = new Actor({
            pos: vec(engine.drawWidth /2, 430),
    
        })

        // Utilizar imagem do logo
        let imagemLogo = Resources.Logo.toSprite()
        
        // Aplicar zoom na imagem
        imagemLogo.scale = vec(0.4, 0.4)
        
        // Configurar o Actor para usar a imagem
        actorLogo.graphics.add(imagemLogo)
        
        // Adicionando o logo na tela
        this.add(actorLogo)

        // Frase em baixo do logo

        let fraseIniciar = new Label({
            text: 'Pressione "Enter" para iniciar...',

            width: 50,
            height: 200,

            pos: vec(engine.drawWidth / 2, 630),

            font: new Font ({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta",
                
            })
            
        })

        fraseIniciar.actions.repeatForever (context => {
            context.fade (0, 1000)
            context.fade (1, 1000)
        })

        this.add(fraseIniciar)

        // Monitora o evento de tecla pressionada
        this.input.keyboard.on("press", (event) =>{
            // Caso a tecla pressionada for Enter, deve ir para a próxima cena
            if (event.key == Keys.Enter) {
                // Direciona a próxima cena
                engine.goToScene("historia")
            }
        })

    }
}

