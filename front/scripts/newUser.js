async function addUser(){
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    
    
    if(nombre!="" && email!= ""){
    let add = {name_user:nombre, email_user:email};

    let response = await fetch('http://localhost:3000/adduser',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="listUsers.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder registrar a un usuario";
    }
}