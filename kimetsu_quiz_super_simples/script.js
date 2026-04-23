// Classe usada para representar cada personagem do quiz.
class Personagem {
    // O construtor recebe os dados básicos do personagem.
    constructor(nome, descricao, imagem) {
        // Salva o nome do personagem.
        this.nome = nome;
        // Salva a descrição do personagem.
        this.descricao = descricao;
        // Salva o link da imagem do personagem.
        this.imagem = imagem;
    }

    // Método que transforma pontos em porcentagem.
    calcularPorcentagem(pontos, maximo) {
        // Faz a conta da porcentagem.
        let porcentagem = (pontos / maximo) * 100;
        // Arredonda para número inteiro.
        return Math.round(porcentagem);
    }
}

// Array com os personagens do quiz.
let personagens = [
    // Primeiro personagem.
    new Personagem(
        "Tanjiro",
        "Você é gentil, equilibrado e tenta proteger as pessoas ao seu redor.",
        "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/1/1d/Tanjiro_Kamado_Anime.png"
    ),

    // Segundo personagem.
    new Personagem(
        "Zenitsu",
        "Você sente tudo intensamente, fica nervoso às vezes, mas continua tentando.",
        "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/7/7e/Zenitsu_Agatsuma_Anime.png"
    ),

    // Terceiro personagem.
    new Personagem(
        "Inosuke",
        "Você é competitivo, corajoso, impulsivo e cheio de energia.",
        "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/a/a5/Inosuke_Hashibira_Anime.png"
    )
];

// Array com todas as perguntas do quiz.
let perguntas = [
    {
        texto: "1. Em um problema difícil, o que você faz?",
        opcoes: [
            { texto: "Tento manter a calma e pensar.", pontos: [1, 0, 0] },
            { texto: "Fico nervoso, mas continuo.", pontos: [0, 1, 0] },
            { texto: "Vou para cima sem pensar muito.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "2. Como seus amigos te descreveriam?",
        opcoes: [
            { texto: "Gentil e confiável.", pontos: [1, 0, 0] },
            { texto: "Sensível e emotivo.", pontos: [0, 1, 0] },
            { texto: "Impulsivo e competitivo.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "3. Quando alguém que você gosta está em perigo, você...",
        opcoes: [
            { texto: "Protege a pessoa com tudo.", pontos: [1, 0, 0] },
            { texto: "Entra em pânico, mas ajuda.", pontos: [0, 1, 0] },
            { texto: "Parte para o confronto.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "4. Em um grupo, você é quem...",
        opcoes: [
            { texto: "Tenta unir todo mundo.", pontos: [1, 0, 0] },
            { texto: "Reclama, mas continua junto.", pontos: [0, 1, 0] },
            { texto: "Quer liderar do seu jeito.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "5. Qual qualidade combina mais com você?",
        opcoes: [
            { texto: "Empatia.", pontos: [1, 0, 0] },
            { texto: "Lealdade.", pontos: [0, 1, 0] },
            { texto: "Coragem.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "6. Quando alguém te irrita, você...",
        opcoes: [
            { texto: "Tenta conversar.", pontos: [1, 0, 0] },
            { texto: "Fica muito abalado.", pontos: [0, 1, 0] },
            { texto: "Responde na hora.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "7. Sobre desafios, você prefere...",
        opcoes: [
            { texto: "Evoluir aos poucos.", pontos: [1, 0, 0] },
            { texto: "Evitar, mas enfrentar se precisar.", pontos: [0, 1, 0] },
            { texto: "Procurar os mais difíceis.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "8. Seu jeito de demonstrar carinho é...",
        opcoes: [
            { texto: "Cuidando das pessoas.", pontos: [1, 0, 0] },
            { texto: "Falando muito do que sente.", pontos: [0, 1, 0] },
            { texto: "Implicando, mas protegendo.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "9. Qual ambiente combina mais com você?",
        opcoes: [
            { texto: "Um lugar tranquilo.", pontos: [1, 0, 0] },
            { texto: "Um lugar seguro e confortável.", pontos: [0, 1, 0] },
            { texto: "Um lugar agitado.", pontos: [0, 0, 1] }
        ]
    },
    {
        texto: "10. Qual frase combina mais com você?",
        opcoes: [
            { texto: "Mesmo sendo difícil, eu continuo.", pontos: [1, 0, 0] },
            { texto: "Estou com medo, mas vou tentar.", pontos: [0, 1, 0] },
            { texto: "Me coloca no desafio mais insano.", pontos: [0, 0, 1] }
        ]
    }
];

// Função que cria as perguntas na tela.
function mostrarPerguntas() {
    // Pega a div principal das perguntas.
    let divPerguntas = document.getElementById("perguntas");

    // Limpa a div antes de montar o conteúdo.
    divPerguntas.innerHTML = "";

    // Laço para percorrer todas as perguntas.
    for (let i = 0; i < perguntas.length; i++) {
        // Cria a caixa da pergunta.
        let blocoPergunta = document.createElement("div");
        // Adiciona a classe CSS na caixa.
        blocoPergunta.className = "pergunta";

        // Cria o título da pergunta.
        let tituloPergunta = document.createElement("p");
        // Adiciona a classe CSS no título.
        tituloPergunta.className = "titulo-pergunta";
        // Coloca o texto da pergunta.
        tituloPergunta.innerText = perguntas[i].texto;
        // Coloca o título dentro da caixa.
        blocoPergunta.appendChild(tituloPergunta);

        // Laço para percorrer as 3 opções da pergunta.
        for (let j = 0; j < perguntas[i].opcoes.length; j++) {
            // Cria o rótulo da opção.
            let labelOpcao = document.createElement("label");
            // Adiciona uma classe para estilizar melhor.
            labelOpcao.className = "opcao";

            // Cria o botão de seleção.
            let radioOpcao = document.createElement("input");
            // Define o tipo do campo.
            radioOpcao.type = "radio";
            // Define o nome para agrupar as opções da mesma pergunta.
            radioOpcao.name = "pergunta" + i;
            // Define o valor da opção.
            radioOpcao.value = j;

            // Coloca o radio dentro do label.
            labelOpcao.appendChild(radioOpcao);
            // Coloca o texto da opção ao lado.
            labelOpcao.appendChild(document.createTextNode(" " + perguntas[i].opcoes[j].texto));

            // Coloca a opção dentro da caixa da pergunta.
            blocoPergunta.appendChild(labelOpcao);
        }

        // Coloca a pergunta pronta dentro da tela.
        divPerguntas.appendChild(blocoPergunta);
    }
}

// Função que calcula o resultado do quiz.
function verResultado() {
    // Array para guardar os pontos de cada personagem.
    let pontosTotais = [0, 0, 0];

    // Cada personagem pode fazer no máximo 10 pontos.
    let maximoPontos = perguntas.length;

    // Laço para analisar cada pergunta.
    for (let i = 0; i < perguntas.length; i++) {
        // Procura qual opção foi marcada na pergunta atual.
        let respostaMarcada = document.querySelector('input[name="pergunta' + i + '"]:checked');

        // Se a pergunta não foi respondida, mostra um aviso.
        if (respostaMarcada == null) {
            // Mostra mensagem para o usuário.
            alert("Responda todas as perguntas antes de ver o resultado.");
            // Para a função aqui.
            return;
        }

        // Converte o valor da opção para número.
        let indiceOpcaoEscolhida = Number(respostaMarcada.value);
        // Pega os pontos da opção escolhida.
        let pontosDaOpcao = perguntas[i].opcoes[indiceOpcaoEscolhida].pontos;

        // Soma os pontos para Tanjiro.
        pontosTotais[0] = pontosTotais[0] + pontosDaOpcao[0];
        // Soma os pontos para Zenitsu.
        pontosTotais[1] = pontosTotais[1] + pontosDaOpcao[1];
        // Soma os pontos para Inosuke.
        pontosTotais[2] = pontosTotais[2] + pontosDaOpcao[2];
    }

    // Começa assumindo que o primeiro personagem é o vencedor.
    let maiorPontuacao = pontosTotais[0];
    // Guarda a posição do vencedor.
    let indiceVencedor = 0;

    // Laço para descobrir quem fez mais pontos.
    for (let i = 1; i < pontosTotais.length; i++) {
        // Se encontrar uma pontuação maior, atualiza o vencedor.
        if (pontosTotais[i] > maiorPontuacao) {
            // Guarda a nova maior pontuação.
            maiorPontuacao = pontosTotais[i];
            // Guarda a posição do personagem vencedor.
            indiceVencedor = i;
        }
    }

    // Pega o personagem vencedor.
    let personagemFinal = personagens[indiceVencedor];

    // Calcula a porcentagem do vencedor.
    let porcentagemFinal = personagemFinal.calcularPorcentagem(maiorPontuacao, maximoPontos);

    // Pega a área de resultado na tela.
    let divResultado = document.getElementById("resultado");

    // Faz um texto com a porcentagem de cada personagem.
    let textoPorcentagens = "<ul class='lista-porcentagens'>";

    // Laço para montar a lista de porcentagens.
    for (let i = 0; i < personagens.length; i++) {
        // Calcula a porcentagem do personagem atual.
        let porcentagemAtual = personagens[i].calcularPorcentagem(pontosTotais[i], maximoPontos);
        // Adiciona a linha na lista.
        textoPorcentagens = textoPorcentagens + "<li>" + personagens[i].nome + ": " + porcentagemAtual + "%</li>";
    }

    // Fecha a lista HTML.
    textoPorcentagens = textoPorcentagens + "</ul>";

    // Mostra o resultado completo na tela.
    divResultado.innerHTML =
        "<h2>Seu resultado foi: " + personagemFinal.nome + "</h2>" +
        "<p><strong>Compatibilidade:</strong> " + porcentagemFinal + "%</p>" +
        "<p>" + personagemFinal.descricao + "</p>" +
        "<h3>Porcentagem de cada personagem:</h3>" +
        textoPorcentagens +
        "<img src='" + personagemFinal.imagem + "' alt='Imagem do personagem'>";

    // Faz a área do resultado aparecer.
    divResultado.style.display = "block";
}

// Função para recomeçar o quiz.
function reiniciarQuiz() {
    // Recarrega a página inteira.
    location.reload();
}

// Chama a função para mostrar as perguntas quando a página abrir.
mostrarPerguntas();