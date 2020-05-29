const cep_input = document.getElementById("cep")
const logradouro_input = document.getElementById("logradouro")
const complemento_input = document.getElementById("complemento")
const bairro_input = document.getElementById("bairro")
const localidade_input = document.getElementById("localidade")
const uf_input = document.getElementById("uf")
const cep_error = document.getElementById("cep-error")


cep_input.addEventListener('change', () => {
    console.log(cep_input.value)
    get_data(`https://viacep.com.br/ws/${cep_input.value}/json/`)
        .then((dadoJSON) => {
            const dadoParseado = JSON.parse(dadoJSON);
            console.log(dadoJSON);
            return dadoParseado

        })
        .then((dadoOBJ) => {
            console.log(dadoOBJ)
            logradouro_input.value = dadoOBJ.logradouro
            localidade_input.value = dadoOBJ.localidade
            bairro_input.value = dadoOBJ.bairro
            uf_input.value = dadoOBJ.uf

        })
        .catch((erro) => {
            console.log(erro)
        })
})



