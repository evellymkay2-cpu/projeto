const simBtn = document.getElementById("simBtn");
const naoBtn = document.getElementById("naoBtn");

const mensagemNao =
    document.getElementById("mensagemNao");

const telaInicial =
    document.getElementById("telaInicial");

const telaEncontro =
    document.getElementById("telaEncontro");

const telaConfirmacao =
    document.getElementById("telaConfirmacao");

const confirmarBtn =
    document.getElementById("confirmarBtn");

const resumoEncontro =
    document.getElementById("resumoEncontro");


/* =================================
   FRASES DO BOTÃO NÃO
================================= */

const frases = [

    "Tem certeza? 🥺💕",

    "Pensa direitinho... 😭💗",

    "Tem certeza mesmo? 👀💔",

    "Não faz isso comigo 🥹❤️",

    "Olha o botão SIM ali... 😏💕",

    "Você sabe que quer clicar no SIM 😌💖",

    "Ainda dá tempo de mudar de ideia! 🥰",

    "Meu coração vai ficar triste... 🥺💔",

    "Última chance! 😳💕",

    "Eu sabia que você ia pensar melhor! 😂❤️"

];


let tentativas = 0;


/* =================================
   FUNÇÃO PARA FAZER O NÃO FUGIR
================================= */

function fugirDoNao() {

    tentativas++;

    /*
    Aumenta o botão SIM
    cada vez que tenta passar
    no botão NÃO.
    */

    let tamanho =
        18 + (tentativas * 4);

    let padding =
        15 + (tentativas * 2);

    simBtn.style.fontSize =
        tamanho + "px";

    simBtn.style.padding =
        padding + "px " +
        (45 + tentativas * 3) + "px";


    /* Escolher frase */

    let indice =
        (tentativas - 1) %
        frases.length;

    mensagemNao.textContent =
        frases[indice];


    /*
    Coloca o botão NÃO
    em uma posição aleatória.
    */

    const largura =
        window.innerWidth;

    const altura =
        window.innerHeight;


    const larguraBotao =
        naoBtn.offsetWidth;

    const alturaBotao =
        naoBtn.offsetHeight;


    const novaPosicaoX =
        Math.random() *
        (largura - larguraBotao - 30) + 15;


    const novaPosicaoY =
        Math.random() *
        (altura - alturaBotao - 30) + 15;


    naoBtn.style.position =
        "fixed";

    naoBtn.style.left =
        novaPosicaoX + "px";

    naoBtn.style.top =
        novaPosicaoY + "px";


    /*
    Depois de muitas tentativas,
    o botão NÃO fica ainda menor.
    */

    if (tentativas >= 5) {

        naoBtn.style.transform =
            "scale(0.8)";

    }

}


/* =================================
   MOUSE SOBRE O NÃO
================================= */

naoBtn.addEventListener(
    "mouseenter",
    fugirDoNao
);


/*
   Também funciona no celular:
   quando a pessoa toca no NÃO,
   ele foge.
*/

naoBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        fugirDoNao();

    }
);


/*
   Segurança:
   mesmo que tentem clicar,
   o NÃO não faz nada.
*/

naoBtn.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        fugirDoNao();

    }
);


/* =================================
   CLICOU NO SIM
================================= */

simBtn.addEventListener(
    "click",
    function() {

        telaInicial.classList.add(
            "escondido"
        );

        telaEncontro.classList.remove(
            "escondido"
        );

        criarMuitosCoracoes();

    }
);


/* =================================
   CONFIRMAR ENCONTRO
================================= */

confirmarBtn.addEventListener(
    "click",
    function() {

        const data =
            document.getElementById("data").value;

        const hora =
            document.getElementById("hora").value;

        const local =
            document.getElementById("local").value;


        /* Verificar preenchimento */

        if (
            data === "" ||
            hora === "" ||
            local.trim() === ""
        ) {

            alert(
                "Preencha a data, o horário e o local 🥰💕"
            );

            return;

        }


        /*
        Transformar a data
        para formato brasileiro.
        */

        const dataObj =
            new Date(data + "T00:00:00");


        const dataFormatada =
            dataObj.toLocaleDateString(
                "pt-BR"
            );


        /* Mostrar resumo */

        resumoEncontro.innerHTML = `

            Eu sabia que você ia aceitar! 😍💕
            <br><br>

            Nosso encontro está marcado para:
            <br><br>

            📅 <strong>${dataFormatada}</strong>
            <br>

            ⏰ <strong>${hora}</strong>
            <br>

            📍 <strong>${local}</strong>

        `;


        telaEncontro.classList.add(
            "escondido"
        );

        telaConfirmacao.classList.remove(
            "escondido"
        );


        criarMuitosCoracoes();

    }
);


/* =================================
   CORAÇÕES DO FUNDO
================================= */

function criarCoracao() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const emojis = [
        "♥",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    const tamanho =
        Math.random() * 20 + 15;

    heart.style.fontSize =
        tamanho + "px";


    const duracao =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duracao + "s";


    document
        .querySelector(".hearts")
        .appendChild(heart);


    setTimeout(
        () => heart.remove(),
        duracao * 1000
    );

}


/* Criar corações continuamente */

setInterval(
    criarCoracao,
    500
);


/* Corações iniciais */

for (
    let i = 0;
    i < 15;
    i++
) {

    setTimeout(
        criarCoracao,
        i * 200
    );

}


/* =================================
   EXPLOSÃO DE CORAÇÕES
================================= */

function criarMuitosCoracoes() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(
            criarCoracao,
            i * 50
        );

    }

}