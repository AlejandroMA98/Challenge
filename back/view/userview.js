const userController = require('../controller/userController');

module.exports = async (app) => {

    // Muestra la lista de usuarios
    app.get('/users',async(req,res) => {
        res.send(await userController.listusers());
    });
     // Agrega un nuevo usuario
     app.post('/adduser',async(req,res) => {
        let user = req.body;
        res.send(await userController.adduser(user));
    });
    //Eliminar usuario
    app.delete('/deleteusers/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await userController.deleteUser(user));
    });
     //Mostrar el usuario actualizado
     app.get('/updateusersid/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await userController.updateiduser(user));
    });
    app.patch('/updateusers',async(req,res) => {
        let user = req.body;
        res.send(await userController.updateUser(user));
    });

}