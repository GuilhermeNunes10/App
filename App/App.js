// Função para ativar o modo escuro e salvar as informações
function ativarModoEscuro() {
    // Ativa o modo escuro
    document.body.classList.add('dark-mode');
  
    // Salva a informação no localStorage
    localStorage.setItem('modoEscuroAtivo', 'true');
  }
  
  // Função para desativar o modo escuro e remover as informações
  function desativarModoEscuro() {
    // Desativa o modo escuro
    document.body.classList.remove('dark-mode');
  
    // Remove a informação do localStorage
    localStorage.removeItem('modoEscuroAtivo');
  }
  
  // Função para verificar e aplicar o modo escuro quando a página carrega
  function verificarModoEscuro() {
    var modoEscuroAtivo = localStorage.getItem('modoEscuroAtivo');
  
    if (modoEscuroAtivo === 'true') {
      ativarModoEscuro();
    }
  }
  
  // Adiciona um evento de clique ao elemento <p> com a classe 'dark'
  var elementoDark = document.querySelector('p.dark');
  elementoDark.addEventListener('click', ativarModoEscuro);
  
  // Chama a função verificarModoEscuro quando a página carrega
  verificarModoEscuro();
  