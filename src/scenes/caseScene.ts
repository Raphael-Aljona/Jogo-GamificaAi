import { Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition } from "excalibur";
import { Npc } from "../actors/npc";


export class caseScene extends Scene {
    elementoTexto?: HTMLElement

    private objetoInteracao: any

    private textoDaCena?: string

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })

        
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray
        
        this.input.keyboard.on("press", (event) =>{
            // Caso a tecla pressionada for Enter, deve ir para a próxima cena
            if (event.key == Keys.Esc) {

                engine.goToScene("exposicao")
            }
        })
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);
        // Se for a mesa A
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"

            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)

            this.elementoTexto.classList.add("sobre-gamifica")

            if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
                this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
                <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
               usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
               experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
               equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
               desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`
            }


        }
        

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"

            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)

            this.elementoTexto.classList.add("sobre-gamifica")

            if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
                this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
                <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
               usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
               experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
               equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
               desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`
            }



        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"

            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")

            if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
                this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
                <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
               usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
               experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
               equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
               desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`
            }

           

        }

    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        

        this.elementoTexto?.remove()
        
    }

    

    
}