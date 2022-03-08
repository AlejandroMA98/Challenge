async function addUser(){
    nombre = document.getElementById("nombre").value;
    autor = document.getElementById("autor").value;
    category = document.getElementById("category").value;
    date = document.getElementById("date").value;
    disponid = document.getElementById("disponid").value;
    
    
    if(nombre!="" && autor!= "" && date!= "" && description!= ""){
    let add = {name_book:nombre, name_autor:autor, category:category, published_date:date, condition:disponid};

    let response = await fetch('http://localhost:3000/adduser',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="listBook.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder registrar a un Libro";
    }
}



async function listbook() {
    const data = await fetch('http://localhost:3000/bookscategory', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    console.log(data);
    const listbooks = await data.json();
    console.log(listbooks)
    console.log(listbooks[0])
    console.log(listbooks[0][0])

    console.log(typeof (listbooks));

    let libros = document.getElementById("category");
    let cont =1;
    let user = ``;

    var contenedor = document.createElement("select");
    for (let i = 0; i < listbooks[0].length; i++) {
         
         console.log(listbooks[0][i])

         user = `
            <option value="${listbooks[0][i].id}">${listbooks[0][i].name_c}</option>
                `;
             
         contenedor.innerHTML += user
         libros.appendChild(contenedor)
         
     }
     
}
listbook();