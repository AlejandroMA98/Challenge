const bookModel = require('../model/bookModel')

module.exports.listbooks = async () => {
    let response = new bookModel();
    let result = await response.list();
    return result;
}

module.exports.addbook = async (user) => {
    let response = new bookModel();
    let result = await response.add(user);
    if (result) {
        return "El libro a sido agregado";
    } else {
        return "No se pudo agregar el libro";
    }

}
module.exports.bookscategory = async () => {
    let response = new bookModel();
    let result = await response.listcategorybook();
    return result;
}

module.exports.updatebookid = async (user) => {
    let response = new bookModel();
    let result = await response.updateid(user);
    return result;
}

module.exports.updatebook = async (user) => {
    let response = new bookModel();
    let result = await response.update(user);
    if (result) {
        return "El libro a sido actualizado";
    } else {
        return "No se pudo actualizar el libro";
    }

}
module.exports.deletebook = async (user) => {
    let response = new bookModel();
    let result = await response.delete(user);
    if (!result) {
        return "ocurrio un error";
    } else {
        return "No se encuentra o ya fue eliminado el book";
    }

}