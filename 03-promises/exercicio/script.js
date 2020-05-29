
const cep_input = document.getElementById("cep")
const logradouro_input = document.getElementById("logradouro")

const url = `https://viacep.com.br/ws/01001000/json/${cep_input}`;


const promise = new Promise((resolve, reject) => {
  if (condicao) {
    resolve("resolvido!"); // dado é retornado para o then
  } else {
    reject("aaahh errooou"); // entra no catch
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  