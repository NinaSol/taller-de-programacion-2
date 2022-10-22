import api from '../api/libros.js'


const getLibros = (req,res) => {
    const { id } = req.params
    res.json( api.getLibros(id) )
}

const postLibros = (req,res) => {
    const libro = req.body
    res.json(api.postLibro(libro))
}

const putLibros = (req,res) => {
    const { id } = req.params
    const libro = req.body
   
    res.json(api.putLibro(libro,id))
}

const deleteLibros = (req,res) => {
    const { id } = req.params
   
    res.json(api.deleteLibro(id))
}


export default {
    getLibros,
    postLibros,
    putLibros,
    deleteLibros
}