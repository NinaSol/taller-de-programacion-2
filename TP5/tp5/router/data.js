import express from 'express'
import dataController from '../controller/data.js'


export class DataRouter {
    constructor() {
        this.router = express.Router()
        this.dataController = new dataController()
    }

    start() {
        this.router.get('/:id?', this.dataController.getData)
        this.router.post('/', this.dataController.getData)
        this.router.put('/:id', this.dataController.getData)
        this.router.delete('/:id', this.dataController.getData)

        return this.router
    }
}
