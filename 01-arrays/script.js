// map(): faz uma iteração com todos os elementos da lista e retorna outra
// 1) Adicionar "a" no final das palavras
const profissionais = ["desenvolvedor", "programador", "autor", "vereador", "professor"];
const profissionaisMelhores = profissionais.map(
  (item) => {
    return item + "a";
  }
);
// console.log (profissionaisMelhores)

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})

// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

const frutasMaiuscula = frutas.map(
  (item) => {
    const novaFruta = item.toLowerCase();
    return novaFruta.charAt(0).toUpperCase() + novaFruta.slice(1);
  }
)
// console.log (frutasMaiuscula)


// filter(): retorna uma nova array com apenas com elementos que atendem à condição

// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numPares = num.filter(
  (item) => {
    const numPar = item % 2 === 0;
    return numPar
  }
)
// console.log(numPares)

// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora" },
  { nome: "Melissa", area: "construção", profissao: "engenheira" },
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista" },
];

const pessoasTI = pessoas.filter(
  (item) => {
    let pessoaTI = item.area === 'TI'
    return pessoaTI
  }
)

// console.log (pessoasTI)

//3)criar uma nova array com o nome e as médias ponderadas das alunas

const notasAlunas = [
  {
    nome: "Julia", notas: [
      { materia: "matemática", nota: 7, peso: 1.5 },
      { materia: "portugues", nota: 3, peso: 2 }
    ]
  },
  {
    nome: "Zelia", notas: [
      { materia: "matemática", nota: 6, peso: 1.5 },
      { materia: "portugues", nota: 5, peso: 2 }
    ]
  },
  {
    nome: "Jussara", notas: [
      { materia: "matemática", nota: 8, peso: 1.5 },
      { materia: "portugues", nota: 2, peso: 2 }
    ]
  }
]

// const mediaFinal = notasAlunas.map (
//   (item)=> {
//     let mediaAluna = (item.nota* item.peso)/ item.peso
//     return item.nome, mediaAluna
//   }
//   )
//   console.log (mediaFinal)

const notasFinaisAlunas = notasAlunas.map(
  (aluna) => {
    const arrNotas = aluna.notas;

    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < arrNotas.length; i++) {
      const nota = arrNotas[i].nota;
      const peso = arrNotas[i].peso;
      const notaFinalMateria = nota * peso;
      somaNotas += notaFinalMateria;
      somaPesos += peso;
    }

    const notaFinalUm = somaNotas / somaPesos;

    const novaAluna = {
      nome: aluna.nome,
      notaFinal: notaFinalUm
    }

    return novaAluna;
  }
)
// console.log (notasFinaisAlunas)

//alunas aprovadas com media maior de 5

const alunasAprovadas = notasFinaisAlunas.filter(

  (aluna) => {
    const media = aluna.notaFinal >= 5;
    return media
  }
)

// console.log(alunasAprovadas)



// reduce(): recebe uma array e retorna um valor só. Redutor.

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = num.reduce(
  (acumulado, item) => {
    const somaAtual = acumulado + item;
    return somaAtual;
  }
);

// 2) Retornar o lucro de uma empresa
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];

const lucro = transacoes.reduce(
  (acumulado, item) => {
    if (item.tipo === 'saída') {
      return acumulado - item.valor
    } else {
      return acumulado + item.valor
    }
  },0
)

console.log ('lucro', lucro)

// sort(): organiza itens da array de acordo com uma verificação

// 1) Organizar números de forma decrescente
const numDecrescente = [...num].sort((a , b) => b - a);

// 2) Organizar pessoas por ordem alfabética
const pessoasAlfabetico = [...pessoas].sort((a, b) => {
  if (a.nome < b.nome) {
    return -1;
  } else if (a.nome > b.nome) {
    return 1;
  } else {
    return 0;
  }
});
