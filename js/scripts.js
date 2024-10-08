// scripts.js

// Objeto contendo os textos e funções em ambos os idiomas
const textos = {
  'pt': {
    'tituloSite': 'Histórias Personalizadas para Dormir',
    'bemVindo': 'Bem-vindo ao Mundo das Histórias Personalizadas',
    'descricao': 'Crie histórias únicas e mágicas para embalar o sono com aventuras incríveis.',
    'botaoCriar': 'Criar Sua História Agora',
    'menuInicio': 'Início',
    'menuCriarHistoria': 'Criar História',
    'menuBiblioteca': 'Minha Biblioteca',
    'menuComprarMoedas': 'Comprar Moedas',
    'menuSobre': 'Sobre',
    'menuContato': 'Contato',
    'tituloPaginaCriar': 'Personalize Sua História',
    'labelTamanhoHistoria': 'Qual o tamanho da história?',
    'selecioneTamanho': 'Selecione o tamanho',
    'labelNumeroPersonagens': 'Quantos personagens?',
    'selecionePersonagens': 'Selecione o número',
    'labelCategoriaHistoria': 'Qual a categoria da história?',
    'selecioneCategoria': 'Selecione a categoria',
    'labelTipoFinal': 'Qual será o final?',
    'selecioneFinal': 'Selecione o final',
    'labelIncluirMoral': 'Incluir moral ou valor educativo',
    'labelParteExtra': 'Adicione uma parte à história (opcional):',
    'labelNomePersonagem': 'Nome do personagem {num}:',
    'botaoGerar': 'Gerar História',
    'historiaGerada': 'Sua História Personalizada',
    'ouvirHistoria': 'Ouvir História',
    'salvarHistoria': 'Salvar na Minha Biblioteca',
    'compartilharHistoria': 'Compartilhar',
    'criarNovaHistoria': 'Criar Nova História',
    'tituloBiblioteca': 'Minha Biblioteca',
    'nenhumaHistoria': 'Nenhuma história salva na biblioteca.',
    'textoSaldoMoedas': 'Saldo de Moedas:',
    'tituloComprarMoedas': 'Comprar Moedas',
    'descricaoComprarMoedas': 'Adquira moedas para desbloquear histórias especiais e recursos exclusivos!',
    'botaoAdicionarMoedas': 'Adicionar {quantidade} Moedas',
    'precoMoedas': 'R${preco}',
    'mensagemHistoriaSalva': 'História salva com sucesso!',
    'mensagemTituloNecessario': 'Você precisa fornecer um título para salvar a história.',
    // ... outros textos ...
  },
  'en': {
    'tituloSite': 'Personalized Bedtime Stories',
    'bemVindo': 'Welcome to the World of Personalized Stories',
    'descricao': 'Create unique and magical stories to lull sleep with incredible adventures.',
    'botaoCriar': 'Create Your Story Now',
    'menuInicio': 'Home',
    'menuCriarHistoria': 'Create Story',
    'menuBiblioteca': 'My Library',
    'menuComprarMoedas': 'Buy Coins',
    'menuSobre': 'About',
    'menuContato': 'Contact',
    'tituloPaginaCriar': 'Customize Your Story',
    'labelTamanhoHistoria': 'What is the size of the story?',
    'selecioneTamanho': 'Select size',
    'labelNumeroPersonagens': 'How many characters?',
    'selecionePersonagens': 'Select number',
    'labelCategoriaHistoria': 'What is the story category?',
    'selecioneCategoria': 'Select category',
    'labelTipoFinal': 'What will be the ending?',
    'selecioneFinal': 'Select ending',
    'labelIncluirMoral': 'Include moral or educational value',
    'labelParteExtra': 'Add a part to the story (optional):',
    'labelNomePersonagem': 'Name of character {num}:',
    'botaoGerar': 'Generate Story',
    'historiaGerada': 'Your Personalized Story',
    'ouvirHistoria': 'Listen to Story',
    'salvarHistoria': 'Save to My Library',
    'compartilharHistoria': 'Share',
    'criarNovaHistoria': 'Create New Story',
    'tituloBiblioteca': 'My Library',
    'nenhumaHistoria': 'No stories saved in the library.',
    'textoSaldoMoedas': 'Coin Balance:',
    'tituloComprarMoedas': 'Buy Coins',
    'descricaoComprarMoedas': 'Acquire coins to unlock special stories and exclusive features!',
    'botaoAdicionarMoedas': 'Add {quantidade} Coins',
    'precoMoedas': '$ {preco}',
    'mensagemHistoriaSalva': 'Story saved successfully!',
    'mensagemTituloNecessario': 'You need to provide a title to save the story.',
    // ... outros textos ...
  }
};

// Dados para geração de histórias randomizadas
const dadosHistoriaRandomizada = {
  'pt': {
    'categorias': {
      'aventura': {
        'inicios': [
          'Em uma terra distante,',
          'No coração da selva,',
          'Em um pequeno vilarejo,'
        ],
        'meios': [
          'o grupo enfrentou grandes desafios.',
          'uma descoberta mudou tudo.',
          'uma jornada inesperada começou.'
        ],
        'finaisFelizes': [
          'E todos viveram felizes para sempre.',
          'A paz finalmente reinou.',
          'A vitória trouxe alegria a todos.'
        ],
        'finaisTristes': [
          'Mas o sacrifício foi inevitável.',
          'E assim, a saudade permaneceu.',
          'O herói desapareceu nas sombras.'
        ],
        'morais': [
          'A coragem supera qualquer obstáculo.',
          'A união faz a força.',
          'A persistência é a chave para o sucesso.'
        ]
      },
      'romance': {
        'inicios': [
          'Em uma noite estrelada,',
          'Em meio a uma cidade movimentada,',
          'Em um café aconchegante,'
        ],
        'meios': [
          'dois corações se encontraram.',
          'um amor inesperado floresceu.',
          'um segredo foi revelado.'
        ],
        'finaisFelizes': [
          'E viveram uma linda história de amor.',
          'E prometeram ficar juntos para sempre.',
          'E o amor deles iluminou o mundo.'
        ],
        'finaisTristes': [
          'Mas o destino os separou.',
          'E o amor se transformou em lembrança.',
          'E cada um seguiu seu caminho.'
        ],
        'morais': [
          'O amor verdadeiro supera todas as barreiras.',
          'Às vezes, deixar ir é um ato de amor.',
          'A sinceridade é fundamental em um relacionamento.'
        ]
      },
      'suspense': {
        'inicios': [
          'Em uma noite escura e tempestuosa,',
          'Em uma rua deserta,',
          'Em um misterioso castelo,'
        ],
        'meios': [
          'um som estranho chamou atenção.',
          'uma sombra passou rapidamente.',
          'algo não estava certo.'
        ],
        'finaisFelizes': [
          'E o mistério foi finalmente resolvido.',
          'E a verdade trouxe alívio a todos.',
          'E o herói emergiu vitorioso.'
        ],
        'finaisTristes': [
          'E o mistério permaneceu sem solução.',
          'E o medo tomou conta para sempre.',
          'E ninguém jamais soube o que realmente aconteceu.'
        ],
        'morais': [
          'A curiosidade pode ser perigosa.',
          'Nem tudo é o que parece.',
          'A verdade nem sempre é o que esperamos.'
        ]
      },
      'assustadora': {
        'inicios': [
          'Em uma casa abandonada,',
          'À meia-noite,',
          'Quando a lua estava cheia,'
        ],
        'meios': [
          'ruídos assustadores ecoaram.',
          'aparições começaram a surgir.',
          'os pesadelos se tornaram reais.'
        ],
        'finaisFelizes': [
          'E a luz dissipou toda a escuridão.',
          'E o terror chegou ao fim.',
          'E a coragem venceu o medo.'
        ],
        'finaisTristes': [
          'E o medo dominou para sempre.',
          'E ninguém jamais escapou.',
          'E as trevas consumiram tudo.'
        ],
        'morais': [
          'Enfrentar seus medos é o primeiro passo para superá-los.',
          'A coragem é essencial em momentos de terror.',
          'Alguns segredos devem permanecer enterrados.'
        ]
      }
      // Adicione mais categorias se desejar
    }
  },
  'en': {
    'categorias': {
      'aventura': {
        'inicios': [
          'In a distant land,',
          'In the heart of the jungle,',
          'In a small village,'
        ],
        'meios': [
          'the group faced great challenges.',
          'a discovery changed everything.',
          'an unexpected journey began.'
        ],
        'finaisFelizes': [
          'And everyone lived happily ever after.',
          'Peace finally reigned.',
          'Victory brought joy to all.'
        ],
        'finaisTristes': [
          'But the sacrifice was inevitable.',
          'And so, the longing remained.',
          'The hero disappeared into the shadows.'
        ],
        'morais': [
          'Courage overcomes any obstacle.',
          'Unity makes strength.',
          'Perseverance is the key to success.'
        ]
      },
      'romance': {
        'inicios': [
          'On a starry night,',
          'Amidst a bustling city,',
          'In a cozy café,'
        ],
        'meios': [
          'two hearts met.',
          'an unexpected love blossomed.',
          'a secret was revealed.'
        ],
        'finaisFelizes': [
          'And they lived a beautiful love story.',
          'And they promised to stay together forever.',
          'And their love lit up the world.'
        ],
        'finaisTristes': [
          'But fate separated them.',
          'And love turned into memory.',
          'And each went their own way.'
        ],
        'morais': [
          'True love overcomes all barriers.',
          'Sometimes, letting go is an act of love.',
          'Sincerity is fundamental in a relationship.'
        ]
      },
      'suspense': {
        'inicios': [
          'On a dark and stormy night,',
          'On a deserted street,',
          'In a mysterious castle,'
        ],
        'meios': [
          'a strange sound caught attention.',
          'a shadow passed quickly.',
          'something was not right.'
        ],
        'finaisFelizes': [
          'And the mystery was finally solved.',
          'And the truth brought relief to all.',
          'And the hero emerged victorious.'
        ],
        'finaisTristes': [
          'And the mystery remained unsolved.',
          'And fear took over forever.',
          'And no one ever knew what really happened.'
        ],
        'morais': [
          'Curiosity can be dangerous.',
          'Not everything is as it seems.',
          'Truth is not always what we expect.'
        ]
      },
      'assustadora': {
        'inicios': [
          'In an abandoned house,',
          'At midnight,',
          'When the moon was full,'
        ],
        'meios': [
          'scary noises echoed.',
          'apparitions began to appear.',
          'nightmares became real.'
        ],
        'finaisFelizes': [
          'And the light dispelled all darkness.',
          'And the terror came to an end.',
          'And courage overcame fear.'
        ],
        'finaisTristes': [
          'And fear dominated forever.',
          'And no one ever escaped.',
          'And the darkness consumed everything.'
        ],
        'morais': [
          'Facing your fears is the first step to overcoming them.',
          'Courage is essential in moments of terror.',
          'Some secrets should remain buried.'
        ]
      }
      // Add more categories if desired
    }
  }
};

// Função para inicializar o saldo de moedas
function inicializarSaldo() {
  // Verifica se o saldo já está armazenado
  if (!localStorage.getItem('saldoMoedas')) {
    localStorage.setItem('saldoMoedas', '1000');
  }
}

// Função para atualizar a exibição do saldo de moedas
function atualizarExibicaoSaldo() {
  const saldoMoedas = localStorage.getItem('saldoMoedas') || '0';
  const saldoMoedasValor = document.getElementById('saldoMoedasValor');
  if (saldoMoedasValor) {
    saldoMoedasValor.textContent = saldoMoedas;
  }
}

// Função para trocar o idioma
function trocarIdioma(idioma) {
  localStorage.setItem('idioma', idioma);

  // Atualiza o conteúdo da página com base no idioma
  document.title = textos[idioma]['tituloSite'];

  // Atualiza textos comuns
  if (document.getElementById('tituloSite')) {
    document.getElementById('tituloSite').textContent = textos[idioma]['tituloSite'];
  }
  if (document.getElementById('bemVindo')) {
    document.getElementById('bemVindo').textContent = textos[idioma]['bemVindo'];
  }
  if (document.getElementById('descricao')) {
    document.getElementById('descricao').textContent = textos[idioma]['descricao'];
  }
  if (document.getElementById('botaoCriar')) {
    document.getElementById('botaoCriar').textContent = textos[idioma]['botaoCriar'];
  }
  if (document.getElementById('tituloRodape')) {
    document.getElementById('tituloRodape').textContent = textos[idioma]['tituloSite'];
  }

  // Atualiza o menu de navegação
  const menuItens = document.querySelectorAll('nav ul li a');
  menuItens.forEach((item) => {
    const key = item.getAttribute('data-key');
    if (key) {
      item.textContent = textos[idioma][key];
    }
  });

  // Atualiza elementos específicos da página de criação
  if (document.getElementById('tituloPaginaCriar')) {
    document.getElementById('tituloPaginaCriar').textContent = textos[idioma]['tituloPaginaCriar'];
    document.getElementById('labelTamanhoHistoria').textContent = textos[idioma]['labelTamanhoHistoria'];
    document.getElementById('selecioneTamanho').textContent = textos[idioma]['selecioneTamanho'];
    document.getElementById('labelNumeroPersonagens').textContent = textos[idioma]['labelNumeroPersonagens'];
    document.getElementById('selecionePersonagens').textContent = textos[idioma]['selecionePersonagens'];
    document.getElementById('labelCategoriaHistoria').textContent = textos[idioma]['labelCategoriaHistoria'];
    document.getElementById('selecioneCategoria').textContent = textos[idioma]['selecioneCategoria'];
    document.getElementById('labelTipoFinal').textContent = textos[idioma]['labelTipoFinal'];
    document.getElementById('selecioneFinal').textContent = textos[idioma]['selecioneFinal'];
    document.getElementById('labelIncluirMoral').textContent = textos[idioma]['labelIncluirMoral'];
    document.getElementById('labelParteExtra').textContent = textos[idioma]['labelParteExtra'];

    // Atualiza labels dos campos de nome dos personagens
    const numeroPersonagens = parseInt(document.getElementById('numeroPersonagens').value) || 0;
    for (let i = 1; i <= numeroPersonagens; i++) {
      const labelPersonagem = document.getElementById(`labelNomePersonagem${i}`);
      if (labelPersonagem) {
        labelPersonagem.textContent = textos[idioma]['labelNomePersonagem'].replace('{num}', i);
      }
    }
  }

  // Atualiza a página da história gerada
  if (document.getElementById('historiaGerada')) {
    document.getElementById('historiaGerada').textContent = textos[idioma]['historiaGerada'];
    document.getElementById('ouvirHistoria').textContent = textos[idioma]['ouvirHistoria'];
    document.getElementById('salvarHistoria').textContent = textos[idioma]['salvarHistoria'];
    document.getElementById('compartilharHistoria').textContent = textos[idioma]['compartilharHistoria'];
    document.getElementById('criarNovaHistoria').textContent = textos[idioma]['criarNovaHistoria'];

    // Regera a história no idioma selecionado
    gerarHistoria();
  }

  // Atualiza a página da biblioteca
  if (document.getElementById('tituloBiblioteca')) {
    document.getElementById('tituloBiblioteca').textContent = textos[idioma]['tituloBiblioteca'];
    // Atualiza a mensagem caso não haja histórias
    const estante = document.getElementById('estante');
    if (estante && estante.children.length === 0) {
      estante.innerHTML = `<p id="nenhumaHistoria">${textos[idioma]['nenhumaHistoria']}</p>`;
    }
  }

  // Atualiza o texto do saldo de moedas
  if (document.getElementById('textoSaldoMoedas')) {
    document.getElementById('textoSaldoMoedas').textContent = textos[idioma]['textoSaldoMoedas'];
  }

  // Atualiza a página de compra de moedas
  if (document.getElementById('tituloComprarMoedas')) {
    document.getElementById('tituloComprarMoedas').textContent = textos[idioma]['tituloComprarMoedas'];
    document.getElementById('descricaoComprarMoedas').textContent = textos[idioma]['descricaoComprarMoedas'];

    // Atualiza os preços e botões
    document.getElementById('preco100').textContent = textos[idioma]['precoMoedas'].replace('{preco}', '9,99');
    document.getElementById('preco500').textContent = textos[idioma]['precoMoedas'].replace('{preco}', '39,99');
    document.getElementById('preco1000').textContent = textos[idioma]['precoMoedas'].replace('{preco}', '69,99');

    // Atualiza os textos dos botões
    const botoes = document.querySelectorAll('.package button');
    botoes.forEach((botao) => {
      const quantidade = parseInt(botao.getAttribute('onclick').match(/\d+/)[0]);
      botao.textContent = textos[idioma]['botaoAdicionarMoedas'].replace('{quantidade}', quantidade);
    });
  }
}

// Função para adicionar moedas ao saldo
function adicionarMoedas(quantidade) {
  if (typeof quantidade !== 'number' || quantidade <= 0) {
    console.error('Quantidade inválida para adicionar moedas:', quantidade);
    return;
  }

  let saldoMoedas = parseInt(localStorage.getItem('saldoMoedas'));
  if (isNaN(saldoMoedas)) saldoMoedas = 0;

  saldoMoedas += quantidade;
  localStorage.setItem('saldoMoedas', saldoMoedas.toString());
  atualizarExibicaoSaldo();

  const idioma = localStorage.getItem('idioma') || 'pt';
  if (idioma === 'pt') {
    alert(`Você adicionou ${quantidade} moedas ao seu saldo!`);
  } else {
    alert(`You have added ${quantidade} coins to your balance!`);
  }
}

// Função para atualizar os campos de nome dos personagens
function atualizarCamposPersonagens() {
  const numeroPersonagens = parseInt(document.getElementById('numeroPersonagens').value) || 0;
  const camposPersonagensDiv = document.getElementById('camposPersonagens');
  camposPersonagensDiv.innerHTML = ''; // Limpa os campos anteriores

  for (let i = 1; i <= numeroPersonagens; i++) {
    const label = document.createElement('label');
    label.setAttribute('for', `nomePersonagem${i}`);
    label.id = `labelNomePersonagem${i}`;
    label.textContent = textos[localStorage.getItem('idioma') || 'pt']['labelNomePersonagem'].replace('{num}', i);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `nomePersonagem${i}`;
    input.name = `nomePersonagem${i}`;
    input.required = true;

    camposPersonagensDiv.appendChild(label);
    camposPersonagensDiv.appendChild(input);
  }
}

// Função para gerar a história
function gerarHistoria() {
  const idioma = localStorage.getItem('idioma') || 'pt';
  const params = new URLSearchParams(window.location.search);

  if (params && document.getElementById('textoHistoria')) {
    // Obter as opções selecionadas
    const tamanhoHistoria = params.get('tamanhoHistoria');
    const numeroPersonagens = parseInt(params.get('numeroPersonagens')) || 0;
    const categoria = params.get('categoriaHistoria');
    let tipoFinal = params.get('tipoFinal');
    const incluirMoral = params.get('incluirMoral') === 'on';
    const parteExtra = params.get('parteExtra');

    // Determinar o custo da história
    let custoHistoria = 0;
    if (tamanhoHistoria === 'pequena') {
      custoHistoria = 50;
    } else if (tamanhoHistoria === 'media') {
      custoHistoria = 100;
    } else if (tamanhoHistoria === 'longa') {
      custoHistoria = 150;
    }

    // Obter o saldo atual
    let saldoMoedas = parseInt(localStorage.getItem('saldoMoedas')) || 0;

    // Verificar se o usuário tem moedas suficientes
    if (saldoMoedas < custoHistoria) {
      alert(idioma === 'pt' ? 'Você não tem moedas suficientes para gerar esta história.' : 'You do not have enough coins to generate this story.');
      window.location.href = 'criar.html'; // Redireciona o usuário de volta
      return;
    }

    // Deduzir o custo do saldo
    saldoMoedas -= custoHistoria;
    localStorage.setItem('saldoMoedas', saldoMoedas.toString());
    atualizarExibicaoSaldo();

    // Obter os nomes dos personagens
    const nomesPersonagens = [];
    for (let i = 1; i <= numeroPersonagens; i++) {
      const nomePersonagem = params.get(`nomePersonagem${i}`) || `Personagem ${i}`;
      nomesPersonagens.push(nomePersonagem);
    }

    // Se o final for randomizado, escolher aleatoriamente entre 'feliz' e 'triste'
    if (tipoFinal === 'randomizado') {
      tipoFinal = Math.random() < 0.5 ? 'feliz' : 'triste';
    }

    // Obter dados da categoria selecionada
    const categoriaDados = dadosHistoriaRandomizada[idioma]['categorias'][categoria];

    // Verifica se a categoria existe
    if (!categoriaDados) {
      alert(idioma === 'pt' ? 'Desculpe, não temos dados para a categoria selecionada.' : 'Sorry, we do not have data for the selected category.');
      window.location.href = 'criar.html';
      return;
    }

    // Gerar a história
    let historia = '';

    // Trecho inicial
    const inicio = categoriaDados['inicios'][Math.floor(Math.random() * categoriaDados['inicios'].length)];
    historia += inicio + ' ';

    // Adicionar personagens
    if (numeroPersonagens === 1) {
      historia += `${nomesPersonagens[0]} `;
    } else if (numeroPersonagens === 2) {
      historia += `${nomesPersonagens[0]} e ${nomesPersonagens[1]} `;
    } else if (numeroPersonagens === 3) {
      historia += `${nomesPersonagens[0]}, ${nomesPersonagens[1]} e ${nomesPersonagens[2]} `;
    }

    // Trecho do meio
    const meio = categoriaDados['meios'][Math.floor(Math.random() * categoriaDados['meios'].length)];
    historia += meio + ' ';

    // Adicionar a parte extra, se fornecida
    if (parteExtra) {
      historia += parteExtra + ' ';
    }

    // Final
    let finalHistoria = '';
    if (tipoFinal === 'feliz') {
      finalHistoria = categoriaDados['finaisFelizes'][Math.floor(Math.random() * categoriaDados['finaisFelizes'].length)];
    } else {
      finalHistoria = categoriaDados['finaisTristes'][Math.floor(Math.random() * categoriaDados['finaisTristes'].length)];
    }
    historia += finalHistoria + ' ';

    // Incluir moral, se selecionado
    if (incluirMoral) {
      const moral = categoriaDados['morais'][Math.floor(Math.random() * categoriaDados['morais'].length)];
      historia += '\n\n' + (idioma === 'pt' ? 'Moral da história: ' : 'Moral of the story: ') + moral;
    }

    // Ajustar o tamanho da história
    if (tamanhoHistoria === 'media') {
      historia += '\n\n' + (idioma === 'pt' ? 'Detalhes adicionais são adicionados aqui para tornar a história de tamanho médio.' : 'Additional details are added here to make the story medium-sized.');
    } else if (tamanhoHistoria === 'longa') {
      historia += '\n\n' + (idioma === 'pt' ? 'Detalhes mais extensos são adicionados aqui para tornar a história longa, incluindo descrições, diálogos e eventos adicionais.' : 'More extensive details are added here to make the story long, including descriptions, dialogues, and additional events.');
    }

    // Exibe a história na página
    document.getElementById('textoHistoria').textContent = historia;
  }
}

// Funções para os botões da página da história
function ouvirHistoria() {
  const idioma = localStorage.getItem('idioma') || 'pt';
  const texto = document.getElementById('textoHistoria').textContent;

  // Usando a API SpeechSynthesis para narrar a história
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = idioma === 'pt' ? 'pt-BR' : 'en-US';
  window.speechSynthesis.speak(utterance);
}

// Funções para salvar e compartilhar a história (Implementação Simples)
function salvarHistoria() {
  const titulo = prompt(localStorage.getItem('idioma') === 'pt' ? 'Digite um título para a sua história:' : 'Enter a title for your story:');
  if (!titulo) {
    alert(localStorage.getItem('idioma') === 'pt' ? 'Você precisa fornecer um título para salvar a história.' : 'You need to provide a title to save the story.');
    return;
  }

  const conteudo = document.getElementById('textoHistoria').textContent;

  // Simples armazenamento no localStorage (para testes)
  let historiasSalvas = JSON.parse(localStorage.getItem('historiasSalvas')) || [];
  historiasSalvas.push({ titulo: titulo, conteudo: conteudo });
  localStorage.setItem('historiasSalvas', JSON.stringify(historiasSalvas));

  alert(localStorage.getItem('idioma') === 'pt' ? 'História salva com sucesso!' : 'Story saved successfully!');
}

function compartilharHistoria() {
  const conteudo = document.getElementById('textoHistoria').textContent;
  const url = encodeURIComponent(conteudo);
  const idioma = localStorage.getItem('idioma') || 'pt';
  const textoCompartilhar = idioma === 'pt' ? 'Compartilhe sua história' : 'Share your story';
  
  // Exemplo simples de compartilhamento via URL
  const link = `https://twitter.com/intent/tweet?text=${url}`;
  window.open(link, '_blank');
}

// Função para carregar histórias na biblioteca
function carregarHistorias() {
  const idioma = localStorage.getItem('idioma') || 'pt';
  const estante = document.getElementById('estante');
  
  if (estante) {
    // Obter as histórias salvas do localStorage
    let historiasSalvas = JSON.parse(localStorage.getItem('historiasSalvas')) || [];
    
    // Limpar o conteúdo atual
    estante.innerHTML = '';
    
    if (historiasSalvas.length === 0) {
      estante.innerHTML = `<p id="nenhumaHistoria">${textos[idioma]['nenhumaHistoria']}</p>`;
    } else {
      historiasSalvas.forEach((historia, index) => {
        const historiaDiv = document.createElement('div');
        historiaDiv.classList.add('historia');
        
        const titulo = document.createElement('h2');
        titulo.textContent = historia.titulo;
        
        const conteudo = document.createElement('p');
        conteudo.textContent = historia.conteudo;
        
        historiaDiv.appendChild(titulo);
        historiaDiv.appendChild(conteudo);
        
        estante.appendChild(historiaDiv);
      });
    }
  }
}

// Event listeners e inicializações

// Detecta o idioma salvo ou define o padrão como Português
const idiomaSalvo = localStorage.getItem('idioma') || 'pt';
const seletorIdioma = document.getElementById('seletorIdioma');
if (seletorIdioma) {
  seletorIdioma.value = idiomaSalvo;
  seletorIdioma.addEventListener('change', function () {
    trocarIdioma(this.value);
  });
}

// Chama as funções ao carregar a página
inicializarSaldo();
atualizarExibicaoSaldo();
trocarIdioma(idiomaSalvo);

// Adiciona um event listener ao select de número de personagens
const numeroPersonagensSelect = document.getElementById('numeroPersonagens');
if (numeroPersonagensSelect) {
  numeroPersonagensSelect.addEventListener('change', () => {
    atualizarCamposPersonagens();
    trocarIdioma(localStorage.getItem('idioma') || 'pt'); // Atualiza os labels ao mudar o número de personagens
  });
}

// Chama a função ao carregar a página, se necessário
if (numeroPersonagensSelect && numeroPersonagensSelect.value) {
  atualizarCamposPersonagens();
}

// Chama a função gerarHistoria() se estiver na página historia.html
if (window.location.pathname.endsWith('historia.html')) {
  gerarHistoria();
}

// Chama a função carregarHistorias() se estiver na página biblioteca.html
if (window.location.pathname.endsWith('biblioteca.html')) {
  carregarHistorias();
}

// Outras funções, se houver
