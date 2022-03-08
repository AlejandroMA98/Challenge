const sequelize = require('../db/conexion');

module.exports = class booksModel {
    constructor(names){
        this.names = names
    }
    
    async list(){
        let result = await sequelize.query("SELECT [b].id, [b].name_book, [b].name_autor, [c].name_c , [b].published_date, [b].condition, [u].name_user From users AS [u] FULL JOIN books AS [b] ON [u].id = [b].[user_id] INNER JOIN category AS [c] ON [b].category = [c].id;");
        return result;
    }
    async add(user){
        let result = await sequelize.query("INSERT INTO books(name_book, name_autor, category, published_date, condition)VALUES('"+user.name_book+"','"+user.name_autor+"','"+user.category+"','"+user.published_date+"','"+user.condition+"');");
        return result;
    }
    async listcategorybook(){
        let result = await sequelize.query("SELECT * FROM category;");
        return result;
    }

    async updateid(user){
        let result = await sequelize.query("SELECT [b].id, [b].name_book, [b].name_autor, [b].category , [b].published_date, [b].condition, [u].name_user From users AS [u] FULL JOIN books AS [b] ON [u].id = [b].[user_id] INNER JOIN category AS [c] ON [b].category = [c].id WHERE [b].id = "+user+";");
        return result;
    }
    async update(update){
        let result = await sequelize.query("UPDATE books SET name_book = '"+update.name_book+"', name_autor = '"+update.name_autor+"',category = '"+update.category+"',published_date = '"+update.published_date+"',condition = '"+update.condition+"'WHERE [id] = '"+update.id+"';");
        return result;
    }
    async delete (userdelete){
        let result = await sequelize.query("DELETE FROM books WHERE [id]='"+userdelete+"';");
        return result;
    }
}