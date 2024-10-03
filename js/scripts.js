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
      'menuSobre': 'Sobre',
      'menuContato': 'Contato',
      'tituloPaginaCriar': 'Personalize Sua História',
      'labelTema': 'Escolha o tema da história:',
      'selecioneTema': 'Selecione um tema',
      'temas': ['Aventura', 'Fantasia', 'Animais', 'Amizade'],
      'labelProtagonista': 'Nome do protagonista:',
      'labelAmigo': 'Nome do amigo(a) do protagonista:',
      'labelParteExtra': 'Adicione uma parte à história (opcional):',
      'labelFinal': 'Escolha o final da história:',
      'finalFeliz': 'Final Feliz',
      'finalTriste': 'Final Triste',
      'botaoGerar': 'Gerar História',
      'historiaGerada': 'Sua História Personalizada',
      'ouvirHistoria': 'Ouvir História',
      'salvarHistoria': 'Salvar na Minha Biblioteca',
      'compartilharHistoria': 'Compartilhar',
      'criarNovaHistoria': 'Criar Nova História',
      'amigoPadrao': 'seu amigo',
      // Função para gerar a história em Português
      'gerarHistoria': function(params) {
        const tema = this['temas'][params.tema];
        const protagonista = params.protagonista;
        const amigo = params.amigo || this['amigoPadrao'];
        const parteExtra = params.parteExtra || '';
        const finalHistoria = params.final;
  
        let historia = `Era uma vez, em uma terra distante, um(a) ${tema.toLowerCase()} chamado(a) ${protagonista}. `;
        historia += `Ele(a) e ${amigo} viviam grandes aventuras juntos. `;
        if (parteExtra) {
          historia += `${parteExtra} `;
        }
        if (finalHistoria === 'feliz') {
          historia += 'E eles viveram felizes para sempre.';
        } else {
          historia += 'Infelizmente, a história teve um final triste.';
        }
        return historia;
      }
    },
    'en': {
      'tituloSite': 'Personalized Bedtime Stories',
      'bemVindo': 'Welcome to the World of Personalized Stories',
      'descricao': 'Create unique and magical stories to lull sleep with incredible adventures.',
      'botaoCriar': 'Create Your Story Now',
      'menuInicio': 'Home',
      'menuCriarHistoria': 'Create Story',
      'menuBiblioteca': 'My Library',
      'menuSobre': 'About',
      'menuContato': 'Contact',
      'tituloPaginaCriar': 'Customize Your Story',
      'labelTema': 'Choose the story theme:',
      'selecioneTema': 'Select a theme',
      'temas': ['Adventure', 'Fantasy', 'Animals', 'Friendship'],
      'labelProtagonista': 'Name of the protagonist:',
      'labelAmigo': 'Name of the protagonist\'s friend:',
      'labelParteExtra': 'Add a part to the story (optional):',
      'labelFinal': 'Choose the story ending:',
      'finalFeliz': 'Happy Ending',
      'finalTriste': 'Sad Ending',
      'botaoGerar': 'Generate Story',
      'historiaGerada': 'Your Personalized Story',
      'ouvirHistoria': 'Listen to Story',
      'salvarHistoria': 'Save to My Library',
      'compartilharHistoria': 'Share',
      'criarNovaHistoria': 'Create New Story',
      'amigoPadrao': 'their friend',
      // Função para gerar a história em Inglês
      'gerarHistoria': function(params) {
        const tema = this['temas'][params.tema];
        const protagonista = params.protagonista;
        const amigo = params.amigo || this['amigoPadrao'];
        const parteExtra = params.parteExtra || '';
        const finalHistoria = params.final;
  
        let historia = `Once upon a time, in a faraway land, there was a ${tema.toLowerCase()} named ${protagonista}. `;
        historia += `They and ${amigo} had great adventures together. `;
        if (parteExtra) {
          historia += `${parteExtra} `;
        }
        if (finalHistoria === 'feliz') {
          historia += 'And they lived happily ever after.';
        } else {
          historia += 'Unfortunately, the story had a sad ending.';
        }
        return historia;
      }
    }
  };
  
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
      document.getElementById('labelTema').textContent = textos[idioma]['labelTema'];
      document.getElementById('selecioneTema').textContent = textos[idioma]['selecioneTema'];
      const temaOptions = document.querySelectorAll('.temaOption');
      temaOptions.forEach((option, index) => {
        option.textContent = textos[idioma]['temas'][index];
      });
      document.getElementById('labelProtagonista').textContent = textos[idioma]['labelProtagonista'];
      document.getElementById('labelAmigo').textContent = textos[idioma]['labelAmigo'];
      document.getElementById('labelParteExtra').textContent = textos[idioma]['labelParteExtra'];
      document.getElementById('labelFinal').textContent = textos[idioma]['labelFinal'];
      document.getElementById('finalFelizLabel').textContent = textos[idioma]['finalFeliz'];
      document.getElementById('finalTristeLabel').textContent = textos[idioma]['finalTriste'];
      document.getElementById('botaoGerar').textContent = textos[idioma]['botaoGerar'];
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
  }
  
  // Detecta o idioma salvo ou define o padrão como Português
  const idiomaSalvo = localStorage.getItem('idioma') || 'pt';
  const seletorIdioma = document.getElementById('seletorIdioma');
  if (seletorIdioma) {
    seletorIdioma.value = idiomaSalvo;
    seletorIdioma.addEventListener('change', function () {
      trocarIdioma(this.value);
    });
  }
  
  // Chama a função para definir o idioma ao carregar a página
  trocarIdioma(idiomaSalvo);
  
  // Função para gerar a história
  function gerarHistoria() {
    const idioma = localStorage.getItem('idioma') || 'pt';
    const params = new URLSearchParams(window.location.search);
  
    if (params && document.getElementById('textoHistoria')) {
      const temaIndex = parseInt(params.get('tema'));
      const protagonista = params.get('protagonista');
      const amigo = params.get('amigo');
      const parteExtra = params.get('parteExtra');
      const finalHistoria = params.get('final');
  
      // Objeto com os parâmetros para gerar a história
      const dadosHistoria = {
        tema: temaIndex,
        protagonista: protagonista,
        amigo: amigo,
        parteExtra: parteExtra,
        final: finalHistoria
      };
  
      // Gera a história usando a função do idioma selecionado
      const historia = textos[idioma]['gerarHistoria'](dadosHistoria);
  
      // Exibe a história na página
      document.getElementById('textoHistoria').textContent = historia;
    }
  }
  
  // Chama a função gerarHistoria() se estiver na página historia.html
  if (window.location.pathname.endsWith('historia.html')) {
    gerarHistoria();
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
  
  function salvarHistoria() {
    alert('Função de salvar história em desenvolvimento.');
  }
  
  function compartilharHistoria() {
    alert('Função de compartilhamento em desenvolvimento.');
  }
  