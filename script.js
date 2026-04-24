class Personagem {
    constructor(nome, descricao, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontos = 0;
    }

    adicionarPontos(valor) {
        this.pontos += valor;
    }

    zerarPontos() {
        this.pontos = 0;
    }
}

const tanjiro = new Personagem(
    "Tanjiro Kamado",
    "Você é gentil, empático e tem um forte senso de justiça. Sempre tenta proteger quem ama.",
    "https://4kwallpapers.com/images/walls/thumbs_3t/23649.jpg"
);

const inosuke = new Personagem(
    "Inosuke Hashibira",
    "Você é competitivo, age por instinto e adora um bom desafio físico.",
    "https://4kwallpapers.com/images/walls/thumbs_3t/23650.jpg"
);

const zenitsu = new Personagem(
    "Zenitsu Agatsuma",
    "Você pode ser ansioso e medroso, mas entrega resultados impressionantes quando é necessário.",
    "https://4kwallpapers.com/images/walls/thumbs_3t/23643.jpg"
);

const personagens = [tanjiro, inosuke, zenitsu];

const perguntas = [
    {
        texto: "1. Em um problema difícil, você normalmente...",
        opcoes: [
            { texto: "Tenta manter a calma e pensar no melhor jeito de resolver.", pontos: [1, 0, 0] },
            { texto: "Vai pra cima sem pensar muito.", pontos: [0, 1, 0] },
            { texto: "Fica nervoso no começo, mas ainda tenta continuar.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "2. Seus amigos te descreveriam como...",
        opcoes: [
            { texto: "Gentil e confiável.", pontos: [1, 0, 0] },
            { texto: "Impulsivo e competitivo.", pontos: [0, 1, 0] },
            { texto: "Sensível e emotivo.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "3. Quando alguém que você gosta está em perigo, você...",
        opcoes: [
            { texto: "Protege essa pessoa com tudo o que puder.", pontos: [1, 0, 0] },
            { texto: "Parte para o confronto na mesma hora.", pontos: [0, 1, 0] },
            { texto: "Entra em pânico, mas tenta ajudar.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "4. Em um grupo, você costuma ser quem...",
        opcoes: [
            { texto: "Tenta unir todo mundo.", pontos: [1, 0, 0] },
            { texto: "Quer liderar do seu próprio jeito.", pontos: [0, 1, 0] },
            { texto: "Reclama bastante, mas continua junto.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "5. Qual dessas qualidades combina mais com você?",
        opcoes: [
            { texto: "Empatia.", pontos: [1, 0, 0] },
            { texto: "Coragem.", pontos: [0, 1, 0] },
            { texto: "Lealdade.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "6. Quando alguém te irrita, você...",
        opcoes: [
            { texto: "Tenta se controlar e resolver na conversa.", pontos: [1, 0, 0] },
            { texto: "Responde na hora e sem filtro.", pontos: [0, 1, 0] },
            { texto: "Fica muito abalado e demonstra isso.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "7. Sobre desafios, você prefere...",
        opcoes: [
            { texto: "Evoluir aos poucos, com dedicação.", pontos: [1, 0, 0] },
            { texto: "Procurar os mais difíceis só para provar seu valor.", pontos: [0, 1, 0] },
            { texto: "Evitar, mas enfrentar se for necessário.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "8. Seu jeito de demonstrar carinho é...",
        opcoes: [
            { texto: "Cuidando das pessoas.", pontos: [1, 0, 0] },
            { texto: "Implicando, mas no fundo protegendo.", pontos: [0, 1, 0] },
            { texto: "Falando muito do que sente.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "9. Qual ambiente combina mais com sua energia?",
        opcoes: [
            { texto: "Um lugar tranquilo, com pessoas queridas.", pontos: [1, 0, 0] },
            { texto: "Um lugar agitado, onde sempre acontece algo.", pontos: [0, 1, 0] },
            { texto: "Um lugar seguro e confortável.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "10. Qual frase combina mais com você?",
        opcoes: [
            { texto: "Mesmo sendo difícil, eu vou continuar.", pontos: [1, 0, 0] },
            { texto: "Me coloca no desafio mais insano possível.", pontos: [0, 1, 0] },
            { texto: "Eu estou com medo, mas não quero desistir.", pontos: [0, 0, 1] }
        ]
    }
];

let indicePerguntaAtual = 0;

function iniciarQuiz() {
    document.getElementById("tela-inicial").classList.add("oculta");
    document.getElementById("tela-quiz").classList.remove("oculta");
    carregarPergunta();
}

function carregarPergunta() {
    const pergunta = perguntas[indicePerguntaAtual];
    const divPergunta = document.getElementById("pergunta-atual");

    let htmlOpcoes = "";

    pergunta.opcoes.forEach((opcao) => {
        htmlOpcoes += `
            <label class="opcao">
                <input type="radio" name="opcaoResposta" value="${opcao.pontos.join(',')}">
                ${opcao.texto}
            </label>
        `;
    });

    divPergunta.innerHTML = `
        <div class="pergunta">
            <span class="titulo-pergunta">${pergunta.texto}</span>
            ${htmlOpcoes}
        </div>
    `;

    const porcentagemProgresso = (indicePerguntaAtual / perguntas.length) * 100;
    document.getElementById("barra-progresso").style.width = `${porcentagemProgresso}%`;

    const btnProxima = document.getElementById("btn-proxima");
    if (indicePerguntaAtual === perguntas.length - 1) {
        btnProxima.textContent = "Ver resultado";
    } else {
        btnProxima.textContent = "Próxima pergunta";
    }
}

function proximaPergunta() {
    const selecionada = document.querySelector('input[name="opcaoResposta"]:checked');

    if (!selecionada) {
        alert("Por favor, selecione uma opção antes de continuar.");
        return;
    }

    const pontosMatriz = selecionada.value.split(",").map(Number);

    tanjiro.adicionarPontos(pontosMatriz[0]);
    inosuke.adicionarPontos(pontosMatriz[1]);
    zenitsu.adicionarPontos(pontosMatriz[2]);

    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById("barra-progresso").style.width = "100%";
        exibirResultadoFinal();
    }
}

function exibirResultadoFinal() {
    document.getElementById("tela-quiz").classList.add("oculta");
    document.getElementById("tela-resultado").classList.remove("oculta");

    let vencedor = personagens[0];

    personagens.forEach((personagem) => {
        if (personagem.pontos > vencedor.pontos) {
            vencedor = personagem;
        }
    });

    const porcentagemTanjiro = Math.round((tanjiro.pontos / perguntas.length) * 100);
    const porcentagemInosuke = Math.round((inosuke.pontos / perguntas.length) * 100);
    const porcentagemZenitsu = Math.round((zenitsu.pontos / perguntas.length) * 100);
    const porcentagemFinal = Math.round((vencedor.pontos / perguntas.length) * 100);

    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <h2>${vencedor.nome}</h2>
        <p>Sua compatibilidade com este personagem é de <strong>${porcentagemFinal}%</strong>.</p>
        <img src="${vencedor.imagem}" alt="${vencedor.nome}">
        <p>${vencedor.descricao}</p>
        <h3>Porcentagem de cada personagem:</h3>
        <ul>
            <li>Tanjiro Kamado: ${porcentagemTanjiro}%</li>
            <li>Inosuke Hashibira: ${porcentagemInosuke}%</li>
            <li>Zenitsu Agatsuma: ${porcentagemZenitsu}%</li>
        </ul>
    `;
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;

    personagens.forEach((personagem) => {
        personagem.zerarPontos();
    });

    document.getElementById("barra-progresso").style.width = "0%";
    document.getElementById("tela-resultado").classList.add("oculta");
    document.getElementById("tela-inicial").classList.remove("oculta");
}