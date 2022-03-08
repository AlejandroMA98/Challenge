async function listUser() {
    const data = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    console.log(data);
    const listusers = await data.json();
    console.log(listusers)
    console.log(listusers[0])
    console.log(listusers[0][0])

    console.log(typeof (listusers));

    let users = document.getElementById("user");
    let cont =1;
    let user = ``;


    for (let i = 0; i < listusers[0].length; i++) {
         var contenedor = document.createElement("tr");
         console.log(listusers[0][i])

         user = `
             <tr>
             <td value="${listusers[0][i].id}" id="iduser${cont}">${listusers[0][i].id}</td>
             <td id="name">${listusers[0][i].name_user}</td>
             <td id="first_n">${listusers[0][i].email_user}</td>
             <td>
                 <button onclick="getId(${listusers[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Actualizar</button>
                 <button onclick="deleteUser(${listusers[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Remover</button>
             </td>
             </tr>`;
             
         contenedor.innerHTML += user
         users.appendChild(contenedor)
         cont +=1;
     }
     
}
listUser();
async function getId(Num){
    console.log(Num)
    location.href="updateUser.html";
    localStorage.setItem("ID",Num);
}

async function deleteUser(Num){

    let response = await fetch('http://localhost:3000/deleteusers/'+Num,{
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
        
    }
});
location.href="listUsers.html";
}
