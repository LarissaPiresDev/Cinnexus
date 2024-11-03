async function listarID() {
    let token = JSON.parse(localStorage.getItem("user")).access_token
    let idUrl = 'https://go-wash-api.onrender.com/api/auth/address?id=' + idEndereco;
    let apiId = await fetch(idUrl, {
        method:'GET',
        headers: {
        'Authorization': 'bearer ' + token   
        }
    
    });

        var resposta = await apiId.json()
        console.log(resposta.data)
        resposta.data.forEach((endereco, index) => {
            if(endereco.id == idEndereco) {
                console.log(resposta.data[index])


                
                    id.innerHTML += resposta.data[index].id
                    titulo.innerHTML += resposta.data[index].title
                    cep1.innerHTML += resposta.data[index].cep
                    endereco1.innerHTML += resposta.data[index].address
                    numero.innerHTML += resposta.data[index].number
                    complemento.innerHTML += resposta.data[index].complement
                
            }
        });
        

    } 

listarID() 


var idEndereco = localStorage.getItem("ID")
let atualizarEnderecoUrl = `https://go-wash-api.onrender.com/api/auth/address/${idEndereco}`;

async function atualizarEndereco() {
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;
    let token = JSON.parse(localStorage.getItem("user")).access_token


    if (!title || !cep || !address || !number || !complement) {
        alert('Por favor, preencha todos os campos para atualizar o endereço');

        return;

    }
    let api = await fetch(atualizarEnderecoUrl, {
        method: 'POST',
        body: JSON.stringify({
            'title': title,
            'cep': cep,
            'address': address,
            'number':number,
            'complement': complement
    }),
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'bearer ' + token
    }

    });
    let novo = await api.json()
    console.log(novo)
    if(api.ok) {
        alert('Endereco atualizado com sucesso :)', novo)
    }else {
        alert('Ocorreu um erro ao atualizar o Endereo, tente novamente mais tarde')
    }

}




    let id = document.querySelector(".id");
    let titulo = document.querySelector(".titulo")
    let cep1 = document.querySelector(".cep")
    let endereco1 = document.querySelector(".endereco")
    let numero = document.querySelector(".numero")
    let complemento = document.querySelector(".complemento")