const categoryModel = require('../model/categoryModel')

module.exports.listcategory = async () => {
    let response = new categoryModel();
    let result = await response.list();
    return result;
}
module.exports.addcategory = async (user) => {
    let response = new categoryModel();
    let result = await response.add(user);
    if (result) {
        return "La categoria a sido agregado";
    } else {
        return "No se pudo agregar la categoria";
    }

}
module.exports.deletecat = async (user) => {
    let response = new categoryModel();
    let result = await response.delete(user);
    if (!result) {
        return "ocurrio un error";
    } else {
        return "No se encuentra o ya fue eliminado el usuario";
    }

}
module.exports.updatecat= async (user) => {
    let response = new categoryModel();
    let result = await response.updateid(user);
    return result;
}
module.exports.updatecategory = async (user) => {
    let response = new categoryModel();
    let result = await response.update(user);
    if (result) {
        return "El usuario a sido actualizado";
    } else {
        return "No se pudo actualizar el usuario";
    }

}