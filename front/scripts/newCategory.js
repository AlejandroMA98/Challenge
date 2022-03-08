async function addCategory(){
    nombre = document.getElementById("nombre").value;
    description = document.getElementById("description").value;
    
    
    if(nombre!="" && description!= ""){
    let add = {name_c:nombre, description:description};

    let response = await fetch('http://localhost:3000/addcategory',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="listCategory.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder registrar una categoria";
    }
}