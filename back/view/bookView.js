const bookController = require('../controller/bookController');

module.exports = async (app) => {

   
    app.get('/books',async(req,res) => {
        res.send(await bookController.listbooks());
    });

    app.post('/addbook',async(req,res) => {
        let user = req.body;
        res.send(await bookController.addbook(user));
    });

    app.get('/bookscategory',async(req,res) => {
        res.send(await bookController.bookscategory());
    })
    app.get('/updatebookid/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await bookController.updatebookid(user));
    });

    app.patch('/updatebook',async(req,res) => {
        let user = req.body;
        res.send(await bookController.updatebook(user));
    });


    app.delete('/deletebook/:id',async(req,res) => {
        let user = req.params.id;
        res.send(await bookController.deletebook(user));
    });

};



