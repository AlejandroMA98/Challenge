async function listbook() {
    const data = await fetch('http://localhost:3000/books', {
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

    let libros = document.getElementById("libros");
    let cont =1;
    let user = ``;


    for (let i = 0; i < listbooks[0].length; i++) {
         var contenedor = document.createElement("tr");
         console.log(listbooks[0][i])

         user = `
             <tr>
             <td value="${listbooks[0][i].id}" id="iduser${cont}">${listbooks[0][i].id}</td>
             <td id="name">${listbooks[0][i].name_book}</td>
             <td id="first_n">${listbooks[0][i].name_autor}</td>
             <td id="last_n">${listbooks[0][i].name_c}</td>
             <td id="adress">${listbooks[0][i].published_date}</td>
             <td id="phone">${listbooks[0][i].condition}</td>
             <td id="phone">${listbooks[0][i].name_user}</td>
             <td>
                 <button onclick="getId(${listbooks[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Actualizar</button>
                 <button onclick="deleteBook(${listbooks[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Remover</button>
             </td>
             </tr>`;
             
         contenedor.innerHTML += user
         libros.appendChild(contenedor)
         cont +=1;
     }
     
}
listbook();

async function getId(Num){
    console.log(Num)
    location.href="updateBook.html";
    localStorage.setItem("ID",Num);
}

async function deleteBook(Num){

    let response = await fetch('http://localhost:3000/deletebook/'+Num,{
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
        
    }
});
location.href="index.html";
}
