import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Npc } from "../actors/npc";
import { Resources } from "../resources";


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

    fadeOutElement(elemento: HTMLElement) {
        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opacidade
        setInterval(() =>{
            // Se elemento ainda está visivel (opacidade > 0)
            if (opacidade > 0){
                // Diminuir opacidade
                opacidade -= 0.03
    
                // Atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()
            }

        }, 20)
    }
    

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        this.input.keyboard.on("press", (event) => {
            // Caso a tecla pressionada for Enter, deve ir para a próxima cena
            if (event.key == Keys.Esc) {
                this.fadeOutElement(this.elementoTexto!)

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

           
                this.elementoTexto.innerHTML = `<h2>Transformando a Experiência com Gamificação!</h2>
                <p>Imagine um cenário onde engajamento e aprendizado se entrelaçam de forma envolvente e dinâmica. Através da gamificação, redefinimos a interação com nossos usuários, transformando desafios em conquistas e objetivos em jornadas emocionantes. Cada passo dado é uma oportunidade para aprender de maneira prática e estimulante, onde o progresso é recompensado e o conhecimento se torna uma conquista pessoal. Nossos cases mostram como essa abordagem inovadora não apenas motiva, mas também potencializa resultados tangíveis, criando experiências memoráveis e eficazes. Junte-se a nós nessa jornada onde o jogo se transforma em aprendizado e o aprendizado se transforma em sucesso!</p>`
            
                // Inserindo Imagem
            let actorAprenderImage = new Actor ({
                pos: vec(this.engine.drawWidth - 270, this.engine.drawHeight / 2)
            })

            let aprenderImage = Resources.Aprender.toSprite()

            aprenderImage.scale = vec (0.1, 0.1)

            actorAprenderImage.graphics.add(aprenderImage)

            this.add(actorAprenderImage)

        }


        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"

            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)

            this.elementoTexto.classList.add("sobre-gamifica")


            this.elementoTexto.innerHTML = `<h2>Revolucionando a Reciclagem com Gamificação!</h2>
            <p>Em nosso compromisso com um futuro sustentável, introduzimos uma abordagem inovadora para transformar a reciclagem em uma experiência emocionante e gratificante. Através da gamificação, incentivamos e educamos nossa comunidade sobre a importância da reciclagem, transformando cada contribuição em um passo significativo para um ambiente mais limpo e saudável. Cada embalagem reciclada se torna não apenas um gesto consciente, mas uma conquista pessoal em nosso jogo de sustentabilidade. Nossos cases demonstram como essa abordagem não só aumenta a participação, mas também fortalece o vínculo comunitário e promove uma mudança real para um futuro mais verde. Junte-se a nós nessa missão onde cada ação conta, cada jogo faz a diferença, e cada reciclagem é uma vitória para o planeta!</p>`

            let actorReciclagem = new Actor({
                pos: vec(this.engine.drawWidth - 270, this.engine.drawHeight / 2)
            })

            let reciclagem = Resources.Reciclagem.toSprite()

            reciclagem.scale = vec (0.1, 0.1)

            actorReciclagem.graphics.add (reciclagem)

            this.add(actorReciclagem)




        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"

            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)
            this.elementoTexto.classList.add("sobre-gamifica")


            this.elementoTexto.innerHTML = `<h2>Reduzindo o Desperdício de Alimentos com Gamificação:</h2>
                <p>Em nossa busca por um mundo mais sustentável, estamos transformando o combate ao desperdício de alimentos em uma jornada interativa e recompensadora. Através da gamificação, incentivamos práticas conscientes desde a compra até o consumo, transformando cada ação em uma oportunidade para reduzir o desperdício. Cada refeição salva se torna uma conquista, onde o jogo educa e motiva para mudanças de hábitos positivas. Nossos cases mostram como essa abordagem não apenas envolve e engaja, mas também promove um impacto real na preservação de recursos e na promoção de uma alimentação mais sustentável. Junte-se a nós nessa missão onde cada jogada conta, cada ação faz a diferença, e cada desperdício evitado é uma vitória para o futuro do nosso planeta!</p>`

            let actorComida = new Actor ({
                pos: vec(this.engine.drawWidth - 270, this.engine.drawHeight / 2)
            })

            let comida = Resources.Comida.toSprite()

            comida.scale = vec (0.15, 0.15)

            actorComida.graphics.add(comida)

            this.add(actorComida)




        }

    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoTexto?.remove()

        this.clear()
    }




}