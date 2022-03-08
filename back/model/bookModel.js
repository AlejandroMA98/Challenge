const sequelize = require('../db/conexion');

module.exports = class booksModel {
    constructor(names){
        this.names = names
    }
    
    async list(){
        let result = await sequelize.query("SELECT * FROM users AS [u] FULL JOIN books AS [b] ON [u].id = [b].[user_id] INNER JOIN category AS [c] ON [b].category = [c].id;");
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

    // async updateid(user){
    //     let result = await sequelize.query("SELECT * FROM users WHERE id = "+user+";");
    //     return result;
    // }
    // async update(update){
    //     let result = await sequelize.query("UPDATE users SET [name] = '"+update.name+"', first_name = '"+update.first_name+"',last_name = '"+update.last_name+"',adress = '"+update.adress+"',phone = '"+update.phone+"'WHERE [id] = '"+update.id+"';");
    //     return result;
    // }
    async delete (userdelete){
        let result = await sequelize.query("DELETE FROM books WHERE [id]='"+userdelete+"';");
        return result;
    }
}