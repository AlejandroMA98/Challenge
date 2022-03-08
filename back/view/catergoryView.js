const categoryController = require('../controller/categoryController');

module.exports = async (app) => {

    // Muestra la lista de usuarios
    app.get('/category',async(req,res) => {
        res.send(await categoryController.listcategory());
    });
    app.post('/addcategory',async(req,res) => {
        let user = req.body;
        res.send(await categoryController.addcategory(user));
    });
    app.delete('/deletecategory/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await categoryController.deletecat(user));
    });
    app.get('/updatecategoryid/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await categoryController.updatecat(user));
    });
    app.patch('/updatecategory',async(req,res) => {
        let user = req.body;
        res.send(await categoryController.updatecategory(user));
    });

}