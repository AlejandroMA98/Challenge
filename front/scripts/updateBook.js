async function Most(){
    let Nu = localStorage.getItem("ID");
    console.log(Nu)
    const data = await fetch('http://localhost:3000/updatebookid/'+Nu, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const listaUsuario = await data.json();
    console.log(listaUsuario[0][0]);

    document.getElementById("nombre").value = listaUsuario[0][0].name_book;
    document.getElementById("autor").value = listaUsuario[0][0].name_autor;
    document.getElementById("category").value = listaUsuario[0][0].category;

   
   
}
Most();


async function updateBook(){
    let Nu = localStorage.getItem("ID");
    nombre = document.getElementById("nombre").value;
    autor = document.getElementById("autor").value;
    category = document.getElementById("category").value
    date = document.getElementById("date").value
    Disponible = document.getElementById("Disponible").value
    
    if(nombre!="" && autor!= "" && category!= "" && date!= "" && Disponible!= ""){
    let add = {id:Nu ,name_book:nombre, name_autor:autor, category:category, published_date:date, condition:Disponible};

    let response = await fetch('http://localhost:3000/updatebook',{
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="index.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder actualizar el Libro";
    }

}