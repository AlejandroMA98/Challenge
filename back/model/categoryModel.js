const sequelize = require('../db/conexion');

module.exports = class categorysModel {
    constructor(names){
        this.names = names
    }
    
    async list(){
        let result = await sequelize.query("SELECT * FROM category");
        return result;
    }
    async add(user){
        let result = await sequelize.query("INSERT INTO category(name_c,description)VALUES('"+user.name_c+"','"+user.description+"');");
        return result;
    }
    async updateid(user){
        let result = await sequelize.query("SELECT * FROM category WHERE id = "+user+";");
        return result;
    }
    async update(update){
        let result = await sequelize.query("UPDATE category SET [name_c] = '"+update.name_c+"', description = '"+update.description+"'WHERE [id] = '"+update.id+"';");
        return result;
    }
    async delete (userdelete){
        let result = await sequelize.query("DELETE FROM category WHERE [id]='"+userdelete+"';");
        return result;
    }
}