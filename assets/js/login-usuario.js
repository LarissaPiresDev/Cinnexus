let url='https://go-wash-api.onrender.com/api/login'

async function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    
    if (!email || !password) {
        alert(' Por favor, preencha todos os campos para efetuar o cadastro')
        return;
    }

    let api = await fetch(url,{
        method:'POST',
            body:JSON.stringify(
                {
                'email':email,
                'password': password,
                'user_type_id':1
                
                }),

            headers:{
                'Content-Type':'application/json',
            
            }
        });
      
        
        
        if(api.ok) {
            let resposta = await api.json();
            localStorage.setItem("user", JSON.stringify(resposta))
            console.log(resposta)
            window.location.href = "../view/home.html"
              return
        } else {
            let respostaErro = await api.json();
            alert(respostaErro.data.errors)

            }
        

    }
