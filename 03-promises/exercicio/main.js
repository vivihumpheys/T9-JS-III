const cep_input = document.getElementById("cep")
const logradouro_input = document.getElementById("logradouro")
const complemento_input = document.getElementById("complemento")
const bairro_input = document.getElementById("bairro")
const localidade_input = document.getElementById("localidade")
const uf_input = document.getElementById("uf")
const cep_error = document.getElementById("cep-error")

<<<<<<< HEAD

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



=======
cep_input.addEventListener("blur", function () {
    const cep = this.value.replace(/\D/g, "")

    logradouro_input.value = "..."
    complemento_input.value = "..."
    bairro_input.value = "..."
    localidade_input.value = "..."
    uf_input.value = "..."

    get_data(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(data) {
            data = JSON.parse(data)
            if (data.erro) {
                cep_input.classList.add("error")
                cep_error.style.display = "block"

                logradouro_input.value = ""
                complemento_input.value = ""
                bairro_input.value = ""
                localidade_input.value = ""
                uf_input.value = ""
            } else {
                logradouro_input.value = data.logradouro
                complemento_input.value = data.complemento
                bairro_input.value = data.bairro
                localidade_input.value = data.localidade
                uf_input.value = data.uf
            }
        })
        .catch(function(error) {
            cep_input.classList.add("error")
            cep_error.style.display = "block"

            logradouro_input.value = ""
            complemento_input.value = ""
            bairro_input.value = ""
            localidade_input.value = ""
            uf_input.value = ""
        })
})
>>>>>>> d1a1e8fd4a65ddb1030c6e2d9ebb181b2157790f
