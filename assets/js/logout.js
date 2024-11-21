let url = 'https://go-wash-api.onrender.com/api/auth/logout';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEwNDE3MjIyLCJuYmYiOjE3MTA0MTcyMjIsImp0aSI6InBsZll0aUNEZ0U1NUNzMHEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY';

async function logout() {
     let token = JSON.parse(localStorage.getItem("user")).access_token;

    try {
        let response = await fetch(url, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json', // Especifica que o conteúdo da requisição é JSON
                'Authorization': 'Bearer ' + token // Envia o token de autenticação
            }
        });

        if (response.ok) {
            console.log("Logout realizado com sucesso.");
            localStorage.removeItem("user");
        } else {
            console.error("Falha ao realizar o logout. Status:", response.status);
        }
    } catch (error) {
        console.error("Erro ao fazer requisição:", error);
    }
}

