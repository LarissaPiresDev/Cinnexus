let url = 'https://go-wash-api.onrender.com/api/auth/address';

async function listaEndereco() {
    let token = JSON.parse(localStorage.getItem("user")).access_token;

    try {
        let api = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token 
            }
        });

        if (!api.ok) {
            throw new Error('Erro na requisição: ' + api.statusText);
        }

        var resposta = await api.json();
        console.log(resposta.data);
        
        resposta.data.forEach(adicionarLinhaTabela); 
    } catch (error) {
        console.error('Erro:', error);
    }
}

function adicionarLinhaTabela(endereco) { 
    var tbody = document.querySelector("tbody");
    var linha = document.createElement("tr");

    // Cria as células e adiciona os textos
    linha.innerHTML = `
        <td>${endereco.id}</td>
        <td>${endereco.title}</td>
        <td>${endereco.cep}</td>
        <td>${endereco.address}</td>
        <td>${endereco.number}</td>
        <td>${endereco.complement}</td>
    `;

    tbody.appendChild(linha); // Adiciona a linha ao tbody
}

listaEndereco();
