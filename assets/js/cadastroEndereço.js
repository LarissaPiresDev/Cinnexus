let url='https://go-wash-api.onrender.com/api/auth/address'


async function endereco(){
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;

    if (!title || !cep || !address || !number || !complement) {
        alert('Por favor, preencha todos os campos para efetuar o cadastro de endereço');
        return;
    }
    let token = JSON.parse(localStorage.getItem("user")).access_token
    let api = await fetch(url, {
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

    if (api.ok) {
        window.location.href = "/view/home.html";
    } else {
        let respostaErro = await api.json();
        alert(respostaErro.data.errors);
    }
}