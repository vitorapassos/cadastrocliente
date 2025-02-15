/**
 * Cadastro de usuários
 * @author Vitor de Assis
 */



// Buscas CEP
function buscarEndereco() {
    let cep = document.getElementById('inputCep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('InputEndereco').value = dados.logradouro
            document.getElementById('inputBairro').value = dados.bairro
            document.getElementById('inputCidade').value = dados.localidade
            document.getElementById('inputEstado').value = dados.uf;
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error));
}


// Validar CPF
function validaCPF(){
    
}