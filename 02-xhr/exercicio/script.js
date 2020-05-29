// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

const chamarRequisicao = (e) => {
  e.preventDefault();
  // console.log ('oi')
  const request = new XMLHttpRequest(); // XHR, tipo um elemento novo de html
  const verbo = "GET"; //método de chamamento do https para o servidor do app
  const nomePokemon = input.value // nome do pokemon que o usuario coloca no input
  const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}/` //linka no perfil de pokemon chamado no input

  request.open(verbo, url, true); //para abrir a requisição da api

  request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200) {
      const dadoParseado = JSON.parse(request.response); //transforma o JSON em um objeto que pode ser lido pelo js
      pkmPlaceholder.innerText = dadoParseado.name; //adiciona o nome do pikachu dentro da div
      const img = document.createElement('img'); //cria o elemento da imagem do pikachu 
      img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${dadoParseado.id}.png`)
      pkmPlaceholder.appendChild (img) // acrescenta a img no corpo do html
    } else {
      pkmPlaceholder.innerText = "API sem resposta"; // caso nao reconheça o nome do pikachu no valor do input
    }
  })

  request.send(); //envia a requisição
}


form.addEventListener('submit', (e) => chamarRequisicao(e)); // ao clicar no botao submit, executa essa função do API
