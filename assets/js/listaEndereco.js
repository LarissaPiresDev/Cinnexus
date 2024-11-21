let url = 'https://go-wash-api.onrender.com/api/auth/address';

async function listaEndereco() {

    let token = JSON.parse(localStorage.getItem("user")).access_token
    let api = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    var resposta = await api.json()
    console.log(resposta.data)

    resposta.data.forEach((endereco) => {


        var tbody = document.querySelector("tbody")
        var linha = document.createElement("tr")


        var colunaID = document.createElement("td")
        var colunaTitle = document.createElement("td")
        var colunaCep = document.createElement("td")
        var colunaAddress = document.createElement("td")
        var colunaNumber = document.createElement("td")
        var colunaComplement = document.createElement("td")
        var colunaAtualizar = document.createElement("td")
        var colunaDeletar = document.createElement("td")
        var botaoAtualizar = document.createElement("button")
        var botaoDeletar = document.createElement("button")
        botaoAtualizar.onclick = teste123
        botaoDeletar.onclick = deletar
        botaoAtualizar.classList = 'butao'
        botaoDeletar.classList = 'butao'
        var id = endereco.id



        var textoID = document.createTextNode(endereco.id)
        var textoTitle = document.createTextNode(endereco.title)
        var textoCep = document.createTextNode(endereco.cep)
        var textoAddress = document.createTextNode(endereco.address)
        var textoNumber = document.createTextNode(endereco.number)
        var textoComplement = document.createTextNode(endereco.complement)
        var textoAtualizar = document.createTextNode("Atualizar")
        var textoDeletar= document.createTextNode("Deletar")


        colunaID.appendChild(textoID)
        colunaTitle.appendChild(textoTitle)
        colunaCep.appendChild(textoCep)
        colunaAddress.appendChild(textoAddress)
        colunaNumber.appendChild(textoNumber)
        colunaComplement.appendChild(textoComplement)
        botaoAtualizar.appendChild(textoAtualizar)
        botaoDeletar.appendChild(textoDeletar)
        colunaAtualizar.appendChild(botaoAtualizar)
        colunaDeletar.appendChild(botaoDeletar)


        linha.appendChild(colunaID)
        linha.appendChild(colunaTitle)
        linha.appendChild(colunaCep)
        linha.appendChild(colunaAddress)
        linha.appendChild(colunaNumber)
        linha.appendChild(colunaComplement)
        linha.appendChild(colunaAtualizar)
        linha.appendChild(colunaDeletar)


        tbody.appendChild(linha)


        function teste123() {
            alert(id)
            localStorage.setItem("ID", id)
            window.location.href = "./editar-endereco.html?id" + id
        
        }

         function deletar() {
            let urlDeletar = `https://go-wash-api.onrender.com/api/auth/address/${id}`
            let apiDeletar =  fetch(urlDeletar, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token
                    
                }
                
            }) 
                        
                alert(`Endereço ${id} deletado com sucesso :)`)
             
                
            
            location.reload()
           
        }
    })
}



listaEndereco()
