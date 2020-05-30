const cardSection = document.getElementById("cards-section");
const errorSection = document.getElementById("error");
const loading = document.getElementById("spinner");

// Caso os cards não carreguem, mostraremos isso:
const placeholderCard = {
  nome: "Carta não carregada",
  tipo: "Arcano Maior",
  descricao: "Sem descrição",
  imagem: "http://via.placeholder.com/250X500",
  link: "https://www.astrolink.com.br/",
};

renderizaCarta = (carta) => {
  const novaCarta = new Card(carta).render();
  cardSection.innerHTML = novaCarta;
};

renderizaCarta(placeholderCard);

const novaCarta = () => {
  fetch(
    "https://raw.githubusercontent.com/reprograma/T9-JS-III/master/04-fetch/exercicio/tarot.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((dados) => {
      // console.log (data)
      const numRandomico = Math.floor(Math.random() * dados.length);
      renderizaCarta(dados[numRandomico]);
    });
};
