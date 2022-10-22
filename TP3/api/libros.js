import model from '../model/libros.js'

const getLibros = id => {
    return id? model.getLibro(id) : model.getLibros()
}

const postLibro = libro => {
    return model.postLibro(libro)
}

const putLibro = (libro,id) => {
    return model.updateLibro(libro,id)
}

const deleteLibro = id => {
    return model.deleteLibro(id)
}


export default {
    getLibros,
    postLibro,
    putLibro,
    deleteLibro
}