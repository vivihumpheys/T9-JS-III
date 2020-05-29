
//fetch POKEMON TESTE

// fetch ('https://pokeapi.co/api/v2/pokemon/ditto/')
//   .then (
//     (response) => {
//       return response.json() //essa função processa os dados e transforma em objeto, parseia
//     }
//   )
//   .then (data => { // a partir do segundo then, o método começa a manipular os dados
//     console.log ('data: ',data)

//   })

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

const nomePokemon = input.value


function abrirPokemon(e) {
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
        .then(
            (response) => {
                return response.json()
            })
        .then(data => {
            
            pkmPlaceholder.innerText = data.name; //adiciona o nome do pikachu dentro da div
            const img = document.createElement('img'); //cria o elemento da imagem do pikachu 
            img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`)
            pkmPlaceholder.appendChild(img) // acrescenta a img no corpo do html
            
            console.log(data)
        })
}

form.addEventListener('submit', abrirPokemon)

