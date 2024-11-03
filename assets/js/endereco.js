let url = 'https://go-wash-api.onrender.com/api/auth/address';

async function endereco() {
    // Captura os valores dos campos
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;

    // Validação dos campos
    if (!title || !cep || !address || !number || !complement) {
        alert('Por favor, preencha todos os campos para efetuar o cadastro de endereço');
        return;
    }

    // Pega o token do localStorage
    let token;
    try {
        token = JSON.parse(localStorage.getItem("user")).access_token;
        if (!token) throw new Error("Token não encontrado");
    } catch (err) {
        alert("Erro ao recuperar token de autenticação.");
        return;
    }

    try {
        // Envia a requisição para a API
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'title': title,
                'cep': cep,
                'address': address,
                'number': number,
                'complement': complement
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            }
        });

        // Verifica se a requisição foi bem-sucedida
        if (response.ok) {
            window.location.href = "./home.html"; // Redireciona se tudo estiver OK
        } else {
            // Verifica se a resposta é JSON e trata os erros da API
            let respostaErro = await response.json();
            
            if (respostaErro && respostaErro.data && respostaErro.data.errors) {
                alert("Erro(s): " + respostaErro.data.errors.join(", "));
            } else if (respostaErro && respostaErro.message) {
                alert("Erro: " + respostaErro.message);
            } else {
                alert("Erro desconhecido ao cadastrar o endereço.");
            }
        }

    } catch (error) {
        // Tratamento de erros de conexão e erros inesperados
        console.error("Erro ao se comunicar com a API:", error);
        alert("Ocorreu um erro ao tentar cadastrar o endereço. Por favor, verifique sua conexão ou tente novamente mais tarde.");
    }
}
