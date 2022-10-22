const libros = [
    { id: '1', titulo: "The handmaid's tail", autor: "Margaret Atwood", anio: 1985 },
    { id: '2', titulo: "El mundo de sofia", autor: "Jostein Gaarder", anio: 1991 },
    { id: '3', titulo: "Red dragon", autor: "Thomas Harris", anio: 1981 },
]

const getLibro = id => {
    return libros.find(libro => libro.id == id)    
}

const getLibros = ()  => {
    return libros
}

const postLibro = libro => {
    libro.anio = parseInt(libro.anio)
    
    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)

    libros.push(libro)

    return libro    
}

const updateLibro = (libro,id) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)

    return libro    
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)

    const libro = libros.splice(index, 1)[0]
    
    return libro    
}

export default {
    getLibro,
    getLibros,
    postLibro,
    updateLibro,
    deleteLibro
}
