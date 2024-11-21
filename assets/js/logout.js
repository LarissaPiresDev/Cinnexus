let logOutUrl = 'https://go-wash-api.onrender.com/api/auth/logout';

async function logOut(event) {
    event.preventDefault();  // Previne o comportamento padrão de recarregar a página

    let token = JSON.parse(localStorage.getItem("user")).access_token;

    if(confirm('Tem certeza que quer sair da sua conta?')) {
     let sair = await fetch(logOutUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        
        if(sair.ok) {
        localStorage.removeItem("user");
        alert('Logout realizado com sucesso, retornando a página inicial')
        window.location.href = '../index.html'; 
      };

    };
    
};


document.getElementById("logoutButton").addEventListener("click", logOut);