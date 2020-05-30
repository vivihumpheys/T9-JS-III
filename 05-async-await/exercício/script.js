// 1) assistir o evento de clique do botão submit
// 2) quando houver clique
// a) recebe o valor do input
// b) passa para a chamda de API do Github
// c) do objeto recebido, pegar somente o nome
// d) inserir esse nome junto com ", seu humor hoje é: " no placeholder

// e) fazer chamada e API do giphy
// f) receber a array
// g) pegar um número aleatório de 0 a 24
// h) pegar a url da imagem do item escolhido
// i) inserir a url da imagem no src do placeholder

const formGithub = document.getElementById("formGithub");
const userGithub = document.getElementById("userGithub");

// https://api.github.com/users/${userGithubValue}
// http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC

const handleSubmit = async (e) => {
  e.preventDefault();
  const usuarioGitHub = userGithub.value;
  const respostaGitHub = await fetch(
    `https://api.github.com/users/${usuarioGitHub}`
  )
    .then((resposta) => {
      return resposta.json();
    })
    .then((dadoGitHub) => {
      return dadoGitHub
    });
    const mensagemUsuario = document.getElementById("namePlaceholder");
    mensagemUsuario.innerText = `Oi, ${respostaGitHub.name}, seu humor hoje é:`;
    // console.log(mensagemUsuario)

  const respostaGiphy = await fetch(
    "http://api.giphy.com/v1/gifs/trending?api_key=b46MWywKt5JwuSCnpEa7q9KNRDtPUc02"
  )
    .then((retornoGif) => {
      return retornoGif.json();
    })
    .then((dadoGif) => {
      return dadoGif.data
    });

    console.log (respostaGiphy);
    const img = document.getElementById("moodImg");
    const numRandom = Math.floor(Math.random() * respostaGiphy.length);
    img.setAttribute('src', respostaGiphy[numRandom].images.downsized.url);

};

formGithub.onsubmit = handleSubmit;
