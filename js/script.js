// Dados das frutas
const frutas = {
    'caja': {
        nome: 'Cajá',
        imagem: 'https://files.agro20.com.br/uploads/2019/11/Umbu-caj%C3%A1-1.jpg',
        descricao: 'O cajá é uma fruta tropical nativa da América, muito apreciada por seu sabor ácido e refrescante. A árvore, conhecida como cajazeira, pode atingir até 20 metros de altura e é bastante resistente.',
        beneficios: 'Rico em vitamina C, antioxidantes e minerais, o cajá ajuda no fortalecimento do sistema imunológico, na saúde da pele e na digestão. Sua polpa é utilizada em sucos, sorvetes e doces.',
        curiosidades: 'A cajazeira floresce entre agosto e outubro, e seus frutos amadurecem de outubro a janeiro. Cada árvore pode produzir até 300 kg de frutos por ano.'
    },
    'manga': {
        nome: 'Manga',
        imagem: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716',
        descricao: 'A manga é uma das frutas tropicais mais populares no mundo, originária do sul da Ásia. A mangueira é uma árvore de grande porte que pode viver mais de 100 anos.',
        beneficios: 'Excelente fonte de vitaminas A e C, a manga auxilia na saúde dos olhos, na imunidade e na digestão. Também contém enzimas que ajudam a quebrar proteínas.',
        curiosidades: 'Existem mais de 1.000 variedades de manga no mundo. A mangueira pode levar de 4 a 6 anos para começar a dar frutos após o plantio.'
    },
    'laranja': {
        nome: 'Laranja',
        imagem: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b',
        descricao: 'A laranja é uma das frutas cítricas mais consumidas no mundo, conhecida por seu alto teor de vitamina C. A laranjeira é uma árvore de médio porte com folhas perenes.',
        beneficios: 'Além da vitamina C, a laranja fornece fibras, potássio e antioxidantes. Seu consumo regular ajuda a prevenir resfriados e a melhorar a saúde cardiovascular.',
        curiosidades: 'Uma única laranjeira pode produzir cerca de 500 laranjas por ano. O Brasil é o maior produtor mundial de laranjas.'
    },
    'abacate': {
        nome: 'Abacate',
        imagem: 'https://s2-oglobo.glbimg.com/xcsshmTRiuJ7jQ0xlEEMbnnmVMI=/0x0:1170x767/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/k/o/uTK3ELRbAheXCBUVKbEw/whatsapp-image-2022-10-19-at-17.51.47.jpeg',
        descricao: 'O abacate é uma fruta rica em gorduras saudáveis, originária do México e América Central. O abacateiro é uma árvore que pode atingir até 20 metros de altura.',
        beneficios: 'Rico em gorduras monoinsaturadas, o abacate ajuda a reduzir o colesterol ruim e a melhorar a saúde do coração. Também é fonte de vitamina E e potássio.',
        curiosidades: 'O abacate era considerado um afrodisíaco pelos astecas. Diferente da maioria das frutas, o abacate amadurece depois de colhido.'
    },
    'goiaba': {
        nome: 'Goiaba',
        imagem: 'https://jpimg.com.br/uploads/2025/03/7-beneficios-da-goiaba-para-a-saude.jpg',
        descricao: 'A goiaba é uma fruta tropical de sabor doce e aroma marcante. A goiabeira é uma árvore de pequeno a médio porte, muito comum em quintais brasileiros.',
        beneficios: 'Extremamente rica em vitamina C (mais que a laranja), a goiaba também é fonte de licopeno e fibras. Ajuda no sistema imunológico e na saúde intestinal.',
        curiosidades: 'Existem variedades de goiaba com polpa branca, rosada ou vermelha. A goiabeira pode começar a produzir frutos em apenas 2 anos após o plantio.'
    },
    'maça': {
        nome: 'Maçã',
        imagem: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
        descricao: 'A maçã é uma fruta popular no mundo todo, cultivada em climas temperados. Ela é produzida por uma árvore chamada macieira.',
        beneficios: 'Rica em fibras, antioxidantes e vitamina C, a maçã auxilia na digestão, fortalece o sistema imunológico e ajuda no controle do colesterol.',
        curiosidades: 'Existem mais de 7.500 variedades de maçã cultivadas em todo o mundo. A China é o maior produtor global.'
    },
    'ameixa': {
        nome: 'Ameixa',
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/89/2020/06/09/ameixas-1-1591731080979_v2_4x3.jpg',
        descricao: 'A ameixa é uma fruta pequena, suculenta e doce, com variedades que vão do roxo ao amarelo. Ela cresce em árvores chamadas ameixeiras.',
        beneficios: 'Boa fonte de fibras, vitamina C e antioxidantes, a ameixa ajuda na digestão e na regulação intestinal.',
        curiosidades: 'A versão seca da ameixa é chamada de ameixa seca e é muito utilizada como laxante natural.'
    },
    'pera': {
        nome: 'Pera',
        imagem: 'https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/08/pera.png',
        descricao: 'A pera é uma fruta leve e refrescante, cultivada em climas temperados. Seu formato característico é alongado e arredondado na base.',
        beneficios: 'Rica em fibras e com baixo índice glicêmico, a pera é ótima para a digestão e para dietas de controle de açúcar no sangue.',
        curiosidades: 'A pera é uma das frutas mais antigas cultivadas pelo homem. Existem mais de 3.000 variedades ao redor do mundo.'
    },
    'pessego': {
        nome: 'Pêssego',
        imagem: 'https://cptstatic.s3.amazonaws.com/imagens/blogs/portal-agropecuario/materias/2015/04/pragas-do-pessegueiro-portal-agropecuario.jpg',
        descricao: 'O pêssego é uma fruta suculenta com casca aveludada e polpa doce, originária da China e muito cultivada no Brasil.',
        beneficios: 'Contém vitaminas A, C e E, além de fibras. Auxilia na hidratação da pele, na digestão e na prevenção do envelhecimento precoce.',
        curiosidades: 'Apesar de parecer tropical, o pêssego prefere clima subtropical e temperado, e a China é o maior produtor mundial.'
    }
};


const somAcerto = new Audio('assets/audios/goodresult-82807.mp3');
const somErro = new Audio('assets/audios/windows-error-sound-effect-35894.mp3');
const somVitoria = new Audio('assets/audios/level-win-6416.mp3');

// Sistema de Jogos
const jogos = {
    iniciarQuiz: function(fruta) {
        // Verifica se já existe um quiz aberto
        if(document.querySelector('.quiz-container')) {
            return;
        }

        const quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';
        quizContainer.innerHTML = `
            <div class="quiz-modal">
                <h3>Quiz: ${frutas[fruta].nome}</h3>
                <div id="quiz-pergunta">Carregando...</div>
                <div id="quiz-opcoes"></div>
                <div id="quiz-resultado"></div>
                <div class="quiz-botoes">
                    <button id="quiz-proximo" style="display:none;">Próxima</button>
                    <button id="quiz-fechar">Fechar</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(quizContainer);
        
        // Adiciona evento para fechar o quiz
        document.getElementById('quiz-fechar').addEventListener('click', function() {
            document.body.removeChild(quizContainer);
        });
        
        // Lógica do quiz
        const perguntas = this.gerarPerguntas(fruta);
        let perguntaAtual = 0;
        let pontuacao = 0;
        
        this.carregarPerguntaQuiz(perguntas, perguntaAtual, pontuacao);
    },
    
    gerarPerguntas: function(fruta) {
        // Banco de perguntas para cada fruta
const bancoPerguntas = {
    caja: [
        {
            pergunta: "Qual o nome científico do cajá?",
            opcoes: ["Malpighia emarginata", "Mangifera indica", "Citrus sinensis", "Psidium guajava"],
            resposta: 0,
            explicacao: "O nome científico do cajá é Malpighia emarginata."
        },
        {
            pergunta: "Em que período a cajazeira produz frutos?",
            opcoes: ["Janeiro a Março", "Abril a Junho", "Outubro a Janeiro", "Julho a Setembro"],
            resposta: 2,
            explicacao: "A cajazeira produz frutos normalmente entre outubro e janeiro."
        },
        {
            pergunta: "Qual é um dos principais benefícios do cajá?",
            opcoes: ["Ajuda na visão", "Aumenta colesterol", "Fortalece o sistema imunológico", "É fonte de gordura boa"],
            resposta: 2,
            explicacao: "O cajá é rico em vitamina C e fortalece o sistema imunológico."
        }
    ],
    manga: [
        {
            pergunta: "Qual a origem da mangueira?",
            opcoes: ["Brasil", "Índia", "África", "México"],
            resposta: 1,
            explicacao: "A mangueira é originária do sul da Ásia, especialmente da Índia."
        },
        {
            pergunta: "Quantas variedades de manga existem aproximadamente?",
            opcoes: ["100", "500", "1000", "2000"],
            resposta: 2,
            explicacao: "Existem mais de 1.000 variedades de manga no mundo."
        },
        {
            pergunta: "Qual nutriente a manga possui em grande quantidade?",
            opcoes: ["Vitamina C e A", "Cálcio", "Zinco", "Ferro"],
            resposta: 0,
            explicacao: "A manga é rica em vitaminas A e C."
        }
    ],
    laranja: [
        {
            pergunta: "Qual o principal nutriente da laranja?",
            opcoes: ["Vitamina A", "Vitamina C", "Cálcio", "Ferro"],
            resposta: 1,
            explicacao: "A laranja é famosa por seu alto teor de vitamina C."
        },
        {
            pergunta: "O Brasil é o maior produtor mundial de laranjas?",
            opcoes: ["Sim", "Não"],
            resposta: 0,
            explicacao: "Sim, o Brasil é o maior produtor de laranjas no mundo."
        }
    ],
    abacate: [
        {
            pergunta: "De onde é originário o abacate?",
            opcoes: ["Brasil", "México", "África", "Austrália"],
            resposta: 1,
            explicacao: "O abacate é originário do México e América Central."
        },
        {
            pergunta: "O que o abacate ajuda a controlar?",
            opcoes: ["Colesterol ruim", "Visão", "Glicose", "Pressão arterial"],
            resposta: 0,
            explicacao: "O abacate contém gorduras boas que ajudam a reduzir o colesterol ruim."
        }
    ],
    goiaba: [
        {
            pergunta: "A goiaba tem mais vitamina C que a laranja?",
            opcoes: ["Verdadeiro", "Falso"],
            resposta: 0,
            explicacao: "Sim, a goiaba contém cerca de 4 vezes mais vitamina C que a laranja."
        },
        {
            pergunta: "Quais cores de polpa são comuns na goiaba?",
            opcoes: ["Apenas branca", "Apenas vermelha", "Branca, rosada ou vermelha", "Roxa e azul"],
            resposta: 2,
            explicacao: "A goiaba pode ter polpa branca, rosada ou vermelha."
        }
    ],
    maca: [
        {
            pergunta: "Qual o nome da árvore que produz maçã?",
            opcoes: ["Macieira", "Pereira", "Laranjeira", "Mangueira"],
            resposta: 0,
            explicacao: "A maçã é produzida pela macieira."
        },
        {
            pergunta: "Qual o principal benefício da maçã?",
            opcoes: ["Ajuda na digestão", "É rica em gordura", "Causa sono", "Aumenta colesterol"],
            resposta: 0,
            explicacao: "A maçã é rica em fibras e ajuda na digestão."
        }
    ],
    ameixa: [
        {
            pergunta: "A ameixa é boa para qual função do corpo?",
            opcoes: ["Memória", "Visão", "Regulação intestinal", "Audição"],
            resposta: 2,
            explicacao: "A ameixa é rica em fibras e ajuda na regulação intestinal."
        },
        {
            pergunta: "Qual é o nome da versão seca da ameixa?",
            opcoes: ["Passa", "Seca", "Ameixão", "Ameixa seca"],
            resposta: 3,
            explicacao: "A ameixa seca é a versão desidratada da ameixa fresca."
        }
    ],
    pera: [
        {
            pergunta: "Qual característica da pera ajuda no controle da glicose?",
            opcoes: ["Alto açúcar", "Fibras e baixo índice glicêmico", "Gordura boa", "Proteínas"],
            resposta: 1,
            explicacao: "A pera tem baixo índice glicêmico e é rica em fibras."
        },
        {
            pergunta: "A pera é cultivada em qual tipo de clima?",
            opcoes: ["Tropical", "Árido", "Temperado", "Equatorial"],
            resposta: 2,
            explicacao: "A pera é cultivada em climas temperados."
        }
    ],
    pessego: [
        {
            pergunta: "O pêssego prefere qual tipo de clima?",
            opcoes: ["Tropical", "Equatorial", "Subtropical e temperado", "Árido"],
            resposta: 2,
            explicacao: "O pêssego cresce melhor em climas subtropicais e temperados."
        },
        {
            pergunta: "O pêssego é rico em quais vitaminas?",
            opcoes: ["B12 e K", "A, C e E", "D e B6", "Ferro e cálcio"],
            resposta: 1,
            explicacao: "O pêssego contém vitaminas A, C e E, boas para a pele e imunidade."
        }
    ]
};

        return bancoPerguntas[fruta] || [];
    },
    
    carregarPerguntaQuiz: function(perguntas, indice, pontuacao) {
        if(indice >= perguntas.length) {
            this.mostrarResultadoQuiz(pontuacao, perguntas.length);
            return;
        }
        
        const pergunta = perguntas[indice];
        document.getElementById('quiz-pergunta').textContent = pergunta.pergunta;
        
        const opcoesContainer = document.getElementById('quiz-opcoes');
        opcoesContainer.innerHTML = '';
        
        pergunta.opcoes.forEach((opcao, i) => {
            const botao = document.createElement('button');
            botao.textContent = opcao;
            botao.addEventListener('click', () => {
                this.verificarResposta(i === pergunta.resposta, pergunta.explicacao, perguntas, indice, pontuacao);
            });
            opcoesContainer.appendChild(botao);
        });
        
        document.getElementById('quiz-proximo').style.display = 'none';
        document.getElementById('quiz-resultado').textContent = '';
    },
    
    verificarResposta: function(correta, explicacao, perguntas, indice, pontuacao) {
    const resultadoContainer = document.getElementById('quiz-resultado');

    if(correta) {
        resultadoContainer.textContent = `✅ Correto! ${explicacao}`;
        resultadoContainer.style.color = 'green';
        pontuacao++;
        somAcerto.play();
    } else {
        resultadoContainer.textContent = `❌ Incorreto. ${explicacao}`;
        resultadoContainer.style.color = 'red';
        somErro.play();
    }

    // Desabilita todos os botões de opção
    const botoes = document.querySelectorAll('#quiz-opcoes button');
    botoes.forEach(botao => {
        botao.disabled = true;
    });

    // Mostra o botão "Próxima"
    const proximoBtn = document.getElementById('quiz-proximo');
    proximoBtn.style.display = 'inline-block';
    proximoBtn.onclick = () => {
        this.carregarPerguntaQuiz(perguntas, indice + 1, pontuacao);
    };
},

    
    mostrarResultadoQuiz: function(pontuacao, totalPerguntas) {
        somVitoria.play()

        document.getElementById('quiz-pergunta').textContent = 'Quiz Concluído!';
        document.getElementById('quiz-opcoes').innerHTML = '';
        
        const porcentagem = Math.round((pontuacao / totalPerguntas) * 100);
        document.getElementById('quiz-resultado').innerHTML = `
            <p>Você acertou ${pontuacao} de ${totalPerguntas} perguntas.</p>
            <p>Pontuação: ${porcentagem}%</p>
            ${porcentagem > 70 ? '🎉 Parabéns!' : '👍 Continue estudando!'}
        `;
        
        document.getElementById('quiz-proximo').style.display = 'none';
    },
    
    iniciarMemoria: function(fruta) {
        alert(`Jogo da memória com ${frutas[fruta].nome} será implementado em breve!`);
        // Implementação futura
    },
    
    iniciarQuebraCabeca: function(fruta) {
        alert(`Quebra-cabeça da ${frutas[fruta].nome} será implementado em breve!`);
        // Implementação futura
    }
};

// Carrega o conteúdo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se estamos na página de jogos
    if (document.querySelector('.fruta-destaque')) {
        const urlParams = new URLSearchParams(window.location.search);
        const frutaSelecionada = urlParams.get('fruta') || 'caja';
        
        carregarFruta(frutaSelecionada);
        
        // Adiciona eventos aos botões de jogo
        document.getElementById('quiz-btn')?.addEventListener('click', function(e) {
            e.preventDefault();
            jogos.iniciarQuiz(frutaSelecionada);
        });
        
        document.getElementById('memoria-btn')?.addEventListener('click', function(e) {
            e.preventDefault();
            jogos.iniciarMemoria(frutaSelecionada);
        });
        
        document.getElementById('quebra-cabeca-btn')?.addEventListener('click', function(e) {
            e.preventDefault();
            jogos.iniciarQuebraCabeca(frutaSelecionada);
        });
    }
});

// Função para carregar os dados da fruta selecionada
function carregarFruta(fruta) {
    const dadosFruta = frutas[fruta] || frutas['caja'];
    
    if (document.getElementById('fruta-nome')) {
        document.getElementById('fruta-nome').textContent = dadosFruta.nome;
        document.getElementById('fruta-img').src = dadosFruta.imagem;
        document.getElementById('fruta-img').alt = dadosFruta.nome;
        document.getElementById('fruta-descricao').textContent = dadosFruta.descricao;
        document.getElementById('fruta-beneficios').textContent = dadosFruta.beneficios;
        document.getElementById('fruta-curiosidades').textContent = dadosFruta.curiosidades;
    }
}

function atualizarConteudo() {
  const frutaSelecionada = getFrutaSelecionada();
  const fruta = frutas[frutaSelecionada];

  if (!fruta) {
    console.warn('Fruta não encontrada, mostrando padrão');
    return; // ou mostrar mensagem de erro
  }

  document.getElementById('fruta-img').src = fruta.imagem;
  document.getElementById('fruta-img').alt = fruta.nome;
  document.getElementById('fruta-nome').textContent = fruta.nome;
  document.getElementById('fruta-descricao').textContent = fruta.descricao;
  document.getElementById('fruta-beneficios').textContent = fruta.beneficios;
  document.getElementById('fruta-curiosidades').textContent = fruta.curiosidades;
}

window.onload = atualizarConteudo;

