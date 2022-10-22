import express from 'express'
import controller from '../controller/libros.js'


const router = express.Router()

//GET
router.get('/:id?', controller.getLibros)

//POST
router.post('/', controller.postLibros)

//PUT
router.put('/:id', controller.putLibros)

//DELETE
router.delete('/:id', controller.deleteLibros)


export default router