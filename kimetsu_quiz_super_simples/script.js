class Personagem {
    constructor(nome, descricao, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontos = 0; // todos comecam com zero pontos
    }
    adicionarPontos(valor) {
        this.pontos += valor;
    }

    zerarPontos() {
        this.pontos = 0;
    }
}

const tanjiro = new Personagem("Tanjiro Kamado", "Você é gentil, empático e tem um forte senso de justiça. Sempre tenta proteger quem ama.", "https://4kwallpapers.com/images/walls/thumbs_3t/23649.jpg");
const inosuke = new Personagem("Inosuke Hashibira", "Você é competitivo, age por instinto e adora um bom desafio físico.", "https://4kwallpapers.com/images/walls/thumbs_3t/23650.jpg");
const zenitsu = new Personagem("Zenitsu Agatsuma", "Você pode ser ansioso e medroso, mas entrega resultados impressionantes quando é necessário.", "https://4kwallpapers.com/images/walls/thumbs_3t/23643.jpg");

const personagens = [tanjiro, inosuke, zenitsu];

const perguntas = [
    {
        texto: "1. Em um problema difícil, você normalmente...",
        opcoes: [
            { texto: "Tenta manter a calma e pensar no melhor jeito de resolver.", pontos: [3, 0, 1] },
            { texto: "Vai pra cima sem pensar muito.", pontos: [0, 3, 0] },
            { texto: "Fica nervoso no começo, mas ainda tenta continuar.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "2. Seus amigos te descreveriam como...",
        opcoes: [
            { texto: "Gentil e confiável.", pontos: [3, 0, 1] },
            { texto: "Impulsivo e competitivo.", pontos: [0, 3, 0] },
            { texto: "Sensível e emotivo.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "3. Quando alguém que você gosta está em perigo, você...",
        opcoes: [
            { texto: "Protege essa pessoa com tudo o que puder.", pontos: [3, 0, 1] },
            { texto: "Parte para o confronto na mesma hora.", pontos: [0, 3, 0] },
            { texto: "Entra em pânico, mas tenta ajudar.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "4. Em um grupo, você costuma ser quem...",
        opcoes: [
            { texto: "Tenta unir todo mundo.", pontos: [3, 0, 1] },
            { texto: "Quer liderar do seu próprio jeito.", pontos: [0, 3, 0] },
            { texto: "Reclama bastante, mas continua junto.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "5. Qual dessas qualidades combina mais com você?",
        opcoes: [
            { texto: "Empatia.", pontos: [3, 0, 1] },
            { texto: "Coragem.", pontos: [0, 3, 0] },
            { texto: "Lealdade.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "6. Quando alguém te irrita, você...",
        opcoes: [
            { texto: "Tenta se controlar e resolver na conversa.", pontos: [3, 0, 1] },
            { texto: "Responde na hora e sem filtro.", pontos: [0, 3, 0] },
            { texto: "Fica muito abalado e demonstra isso.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "7. Sobre desafios, você prefere...",
        opcoes: [
            { texto: "Evoluir aos poucos, com dedicação.", pontos: [3, 0, 1] },
            { texto: "Procurar os mais difíceis só para provar seu valor.", pontos: [0, 3, 0] },
            { texto: "Evitar, mas enfrentar se for necessário.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "8. Seu jeito de demonstrar carinho é...",
        opcoes: [
            { texto: "Cuidando das pessoas.", pontos: [3, 0, 1] },
            { texto: "Implicando, mas no fundo protegendo.", pontos: [0, 3, 0] },
            { texto: "Falando muito do que sente.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "9. Qual ambiente combina mais com sua energia?",
        opcoes: [
            { texto: "Um lugar tranquilo, com pessoas queridas.", pontos: [3, 0, 1] },
            { texto: "Um lugar agitado, onde sempre acontece algo.", pontos: [0, 3, 0] },
            { texto: "Um lugar seguro e confortável.", pontos: [1, 0, 3] }
        ]
    },
    {
        texto: "10. Qual frase combina mais com você?",
        opcoes: [
            { texto: "Mesmo sendo difícil, eu vou continuar.", pontos: [3, 0, 1] },
            { texto: "Me coloca no desafio mais insano possível.", pontos: [0, 3, 0] },
            { texto: "Eu estou com medo, mas não quero desistir.", pontos: [1, 0, 3] }
        ]
    }
];

let indicePerguntaAtual = 0;

function iniciarQuiz() {
    document.getElementById("tela-inicial").classList.add("oculta"); // esconde as boas-vindas
    document.getElementById("tela-quiz").classList.remove("oculta"); // mostra a area do quiz
    carregarPergunta(); // injeta a primeira pergunta
}

function carregarPergunta() {
    const pergunta = perguntas[indicePerguntaAtual]; // isola os dados da pergunta atual
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
        btnProxima.textContent = "Ver Resultado";
    } else {
        btnProxima.textContent = "Próxima Pergunta";
    }
}

function proximaPergunta() {
    // captura a opcao que o utilizador selecionou
    const selecionada = document.querySelector('input[name="opcaoResposta"]:checked');
    
    // validacao de seguranca caso o utilizador tente avancar sem responder
    if (!selecionada) {
        alert("Por favor, selecione uma opção antes de prosseguir.");
        return;
    }

    const pontosMatriz = selecionada.value.split(',').map(Number);
    
    // acessa os metodos dos objetos para registar os pontos
    tanjiro.adicionarPontos(pontosMatriz[0]);
    inosuke.adicionarPontos(pontosMatriz[1]);
    zenitsu.adicionarPontos(pontosMatriz[2]);

    indicePerguntaAtual++; // sobe o contador de rodadas

    if (indicePerguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById("barra-progresso").style.width = "100%"; // enche a barra no fim
        exibirResultadoFinal();
    }
}

function exibirResultadoFinal() {
    document.getElementById("tela-quiz").classList.add("oculta"); // esconde as perguntas
    document.getElementById("tela-resultado").classList.remove("oculta"); // mostra o fim

    let vencedor = personagens[0]; // assume o primeiro como vencedor temporario

    personagens.forEach(personagem => {
        if (personagem.pontos > vencedor.pontos) {
            vencedor = personagem;
        }
    });

    const porcentagemFinal = Math.round((vencedor.pontos / 30) * 100);

    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <h2>${vencedor.nome}</h2>
        <p>A tua compatibilidade com este caçador é de <strong>${porcentagemFinal}%</strong>.</p>
        <img src="${vencedor.imagem}" alt="${vencedor.nome}">
        <p>${vencedor.descricao}</p>
    `;
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0; // zera o contador de rodadas
    
    personagens.forEach(personagem => {
        personagem.zerarPontos();
    });
    
    document.getElementById("barra-progresso").style.width = "0%";
    
    document.getElementById("tela-resultado").classList.add("oculta");
    document.getElementById("tela-inicial").classList.remove("oculta");
}