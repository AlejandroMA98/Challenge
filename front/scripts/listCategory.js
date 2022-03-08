async function listCategory() {
    const data = await fetch('http://localhost:3000/category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    console.log(data);
    const categorybooks = await data.json();
    console.log(categorybooks)
    console.log(categorybooks[0])
    console.log(categorybooks[0][0])

    console.log(typeof (categorybooks));

    let categorys = document.getElementById("categorys");
    let cont =1;
    let user = ``;


    for (let i = 0; i < categorybooks[0].length; i++) {
         var contenedor = document.createElement("tr");
         console.log(categorybooks[0][i])

         user = `
             <tr>
             <td value="${categorybooks[0][i].id}" id="iduser${cont}">${categorybooks[0][i].id}</td>
             <td id="name">${categorybooks[0][i].name_c}</td>
             <td id="first_n">${categorybooks[0][i].description}</td>
             <td>
                 <button onclick="getId(${categorybooks[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Actualizar</button>
                 <button onclick="deletecat(${categorybooks[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Remover</button>
             </td>
             </tr>`;
             
         contenedor.innerHTML += user
         categorys.appendChild(contenedor)
         cont +=1;
     }
     
}
listCategory();

async function getId(Num){
    console.log(Num)
    location.href="updateCategory.html";
    localStorage.setItem("ID",Num);
}

async function deletecat(Num){

    let response = await fetch('http://localhost:3000/deletecategory/'+Num,{
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
        
    }
});
location.href="listCategory.html";
}
