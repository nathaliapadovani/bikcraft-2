//com esse código abaixo, iremos ativar o link que está no header (bicicletas, seguros e contato), toda vez que climarmos e tiver dentro da página selecionada, mantendo o hover sempre ativo.
//através do document.querySelectorAll, ele vai selecionar todos os "a" dentro do "header-menu"
const links = document.querySelectorAll(".header-menu a");

//função ativarLink para ativar o link atual com base na URL da página
function ativarLink(link) {
  //Obtém a URL atual da página
  const url = location.href;
  //Obtém o href do link fornecido como argumento
  const href = link.href;

  // Verifica se a URL atual inclui o href do link (que inclui todos os parametros do href)
  if (url.includes(href)) {
    // Adiciona a classe "ativo" ao link, destacando-o como o link ativo
    link.classList.add("ativo");
  }
}
// Aplica a função ativarLink a cada item do array links
links.forEach(ativarLink);


//ativar itens do Orçamento = Este código é útil para pré-selecionar elementos de entrada (como checkboxes ou radio buttons) com base nos parâmetros da URL.
// Cria um objeto URLSearchParams com os parâmetros da URL atual
const parametros = new URLSearchParams(location.search);

// Função para ativar um produto com base no parâmetro fornecido
function ativarProduto (parametro) {
  //Obtém o elemento pelo ID com o valor do parâmetro
  const elemento = document.getElementById(parametro);
  //Verifica se o elemento existe
  if (elemento) {
    // Define o elemento como selecionado (checked)
    elemento.checked = true;
  }
}
//Aplica a função ativarProduto a cada parâmetro encontrado na URL
parametros.forEach(ativarProduto);


//Perguntas frequentes
//comportamento de expansão e contração de respostas em uma seção de perguntas frequentes (FAQs)
//Isso seleciona todos os botões dentro dos elementos com a classe .perguntas button. Esses botões representam as perguntas nas FAQs.
const perguntas = document.querySelectorAll(".perguntas button");

//Essa função é chamada quando um botão de pergunta é clicado
function ativarPergunta (event) {
  const pergunta = event.currentTarget; //event.currentTarget se refere ao botão que foi clicado.
  const controls = pergunta.getAttribute("aria-controls");  //Isso obtém o valor do atributo aria-controls do botão, que provavelmente é o ID do elemento de resposta associado à pergunta.
  const resposta = document.getElementById(controls); //Isso encontra o elemento de resposta correspondente com base no ID obtido.

  resposta.classList.toggle("ativa"); //Isso alterna a classe CSS chamada “ativa” no elemento de resposta. Provavelmente, essa classe controla a exibição ou ocultação da resposta.
  const ativa = resposta.classList.contains("ativa"); //Isso verifica se a classe “ativa” está atualmente aplicada ao elemento de resposta.
  pergunta.setAttribute("aria-expanded", ativa); //Isso atualiza o atributo aria-expanded do botão de pergunta para refletir o estado da resposta (expandida ou não).
}
//Essa função é chamada para cada botão de pergunta encontrado.
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);//Isso aplica a função eventosPerguntas a cada botão de pergunta encontrado.


//Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");// Seleciona todas as imagens dentro do container com a classe "bicicleta-imagens"
const galeriaContainer = document.querySelector(".bicicleta-imagens");//Seleciona o container que contém as imagens

// Função que troca a posição da imagem clicada
function trocarImagem(event) {
  const img = event.currentTarget; //Pega a imagem que foi clicada
  const media = matchMedia("(min-width: 940px)"). matches;  //Verifica se a largura da tela é maior ou igual a 940px
  if (media) { // Se a largura da tela for maior ou igual a 940px
    galeriaContainer.prepend(img); // Move a imagem clicada para o início do container
  }
}

// Função que adiciona um evento de clique a cada imagem
function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem); //Quando a imagem for clicada, chama a função trocarImagem
}

galeria.forEach(eventosGaleria);// Adiciona o evento de clique a cada imagem da galeria

//animação
if (window.SimpleAnime) {
  new SimpleAnime();
}