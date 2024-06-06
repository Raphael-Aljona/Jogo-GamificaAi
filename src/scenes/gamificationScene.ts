import { Actor, Color, Engine, Scene, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {

    textoGamificacao?:HTMLElement

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("403f4c")

        // Criar elemento com a descrição da empresa
        this.textoGamificacao = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1
        this.textoGamificacao.style.opacity = "1"

        // Inserir elementoTexto no containerGame
        let containerGamificacao = document.querySelector(".container-game") as HTMLElement
        containerGamificacao?.appendChild(this.textoGamificacao)
        
        // Adicionar elementoTexto no containerGame
        this.textoGamificacao.classList.add("texto-gamificacao")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.textoGamificacao.innerHTML = `<h2>O que é gamificação</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`
        
            // Imagem

        let actorGamificacao = new Actor ({
            pos: vec(300, engine.drawHeight / 2)
        })

        let imgGamificacao = Resources.bgGamificacao.toSprite()

        imgGamificacao.scale = vec(1.2, 1.2)

        actorGamificacao.graphics.add(imgGamificacao)

        this.add(actorGamificacao)


    }
}