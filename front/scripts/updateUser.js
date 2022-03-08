async function Most(){
    let Nu = localStorage.getItem("ID");
    console.log(Nu)
    const data = await fetch('http://localhost:3000/updateusersid/'+Nu, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const listaUsuario = await data.json();
    console.log(listaUsuario[0][0]);

    document.getElementById("nombre").value = listaUsuario[0][0].name_user;
    document.getElementById("email").value = listaUsuario[0][0].email_user;
   
   
}
Most();

async function updateUser(){
    let Nu = localStorage.getItem("ID");
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    
    
    if(nombre!="" && email!= ""){
    let add = {id:Nu,name_user:nombre, email_user:email};

    let response = await fetch('http://localhost:3000/updateusers',{
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="listUsers.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder actualizar a este usuario";
    }

}

