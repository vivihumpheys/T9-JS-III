// map(): faz uma iteração com todos os elementos da lista e retorna outra
// 1) Adicionar "a" no final das palavras
const profissionais = ["desenvolvedor", "programador", "autor", "vereador", "professor"];
const profissionaisMelhores = profissionais.map(
  (item) => {
    return item + "a";
  }
);
// console.log (profissionaisMelhores)

// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

const frutasMaiuscula = frutas.map (
  (item) => {
  const novaFruta = item.toLowerCase();
  return novaFruta.charAt(0).toUpperCase() + novaFruta.slice(1);
  }
)
// console.log (frutasMaiuscula)


// filter(): retorna uma nova array com apenas com elementos que atendem à condição
// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numPares = num.filter (
 (item) => {
   const numPar = item%2 === 0;
   return numPar
 } 
)
// console.log(numPares)

// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

const pessoasTI = pessoas.filter(
  (item) => {
    let pessoaTI = item.area === 'TI'
    return pessoaTI
  }
)

console.log (pessoasTI)

// reduce(): recebe uma array e retorna um valor só. Redutor.
// 1) Dado uma array de números, retornar a soma de todos eles


// 2) Retornar o lucro de uma empresa
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];


// sort(): organiza itens da array de acordo com uma verificação
// 1) Organizar números de forma decrescente

// 2) Organizar pessoas por ordem alfabética
