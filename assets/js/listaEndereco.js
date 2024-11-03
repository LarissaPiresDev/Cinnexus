let url = 'https://go-wash-api.onrender.com/api/auth/address';

async function listaEndereço() {

    let token = JSON.parse(localStorage.getItem("user")).access_token
    let api = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'bearer ' + token
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
        var botaoAtualizar = document.createElement("button")
        botaoAtualizar.onclick = teste123
        var id = endereco.id



        var textoID = document.createTextNode(endereco.id)
        var textoTitle = document.createTextNode(endereco.title)
        var textoCep = document.createTextNode(endereco.cep)
        var textoAddress = document.createTextNode(endereco.address)
        var textoNumber = document.createTextNode(endereco.number)
        var textoComplement = document.createTextNode(endereco.complement)
        var textoAtualizar = document.createTextNode("Editar")


        colunaID.appendChild(textoID)
        colunaTitle.appendChild(textoTitle)
        colunaCep.appendChild(textoCep)
        colunaAddress.appendChild(textoAddress)
        colunaNumber.appendChild(textoNumber)
        colunaComplement.appendChild(textoComplement)
        botaoAtualizar.appendChild(textoAtualizar)
        colunaAtualizar.appendChild(botaoAtualizar)


        linha.appendChild(colunaID)
        linha.appendChild(colunaTitle)
        linha.appendChild(colunaCep)
        linha.appendChild(colunaAddress)
        linha.appendChild(colunaNumber)
        linha.appendChild(colunaComplement)
        linha.appendChild(colunaAtualizar)


        tbody.appendChild(linha)


        function teste123() {
            alert(id)
            localStorage.setItem("ID", id)
            window.location.href = "./atualizarEndereco.html?id" + id
        
        }
    })
}



listaEndereço()