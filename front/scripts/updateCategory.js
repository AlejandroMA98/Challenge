async function Most(){
    let Nu = localStorage.getItem("ID");
    console.log(Nu)
    const data = await fetch('http://localhost:3000/updatecategoryid/'+Nu, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const listaUsuario = await data.json();
    console.log(listaUsuario[0][0]);

    document.getElementById("nombre").value = listaUsuario[0][0].name_c;
    document.getElementById("description").value = listaUsuario[0][0].description;
   
   
}
Most();

async function updateCat(){
    let Nu = localStorage.getItem("ID");
    nombre = document.getElementById("nombre").value;
    description = document.getElementById("description").value;
    
    
    if(nombre!="" && description!= ""){
    let add = {id:Nu,name_c:nombre, description:description};

    let response = await fetch('http://localhost:3000/updatecategory',{
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="listCategory.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder actualizar a esta categoria";
    }

}

