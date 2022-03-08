const userModel = require('../model/userModel')

module.exports.listusers = async () => {
    let response = new userModel();
    let result = await response.list();
    return result;
}
module.exports.adduser = async (user) => {
    let response = new userModel();
    let result = await response.add(user);
    if (result) {
        return "El usuario a sido agregado";
    } else {
        return "No se pudo agregar el usuario";
    }

}
module.exports.deleteUser = async (user) => {
    let response = new userModel();
    let result = await response.delete(user);
    if (!result) {
        return "ocurrio un error";
    } else {
        return "No se encuentra o ya fue eliminado el usuario";
    }

}

module.exports.updateiduser = async (user) => {
    let response = new userModel();
    let result = await response.updateid(user);
    return result;
}

module.exports.updateUser = async (user) => {
    let response = new userModel();
    let result = await response.update(user);
    if (result) {
        return "El usuario a sido actualizado";
    } else {
        return "No se pudo actualizar el usuario";
    }

}