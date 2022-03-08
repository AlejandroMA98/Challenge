const sequelize = require('../db/conexion');

module.exports = class usersModel {
    constructor(names){
        this.names = names
    }
    
    async list(){
        let result = await sequelize.query("SELECT * FROM users");
        return result;
    }
    async add(user){
        let result = await sequelize.query("INSERT INTO users(name_user,email_user)VALUES('"+user.name_user+"','"+user.email_user+"');");
        return result;
    }
    async delete (userdelete){
        let result = await sequelize.query("DELETE FROM users WHERE [id]='"+userdelete+"';");
        return result;
    }
    async updateid(user){
        let result = await sequelize.query("SELECT * FROM users WHERE id = "+user+";");
        return result;
    }
    async update(update){
        let result = await sequelize.query("UPDATE users SET [name_user] = '"+update.name_user+"', email_user = '"+update.email_user+"' WHERE [id] = '"+update.id+"';");
        return result;
    }
    
}