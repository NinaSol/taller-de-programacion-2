import DataService from '../service/data.js.js'


class ControladorData {

    constructor() {
        this.dataService = new DataService()
    }

    getData = async (req,res) => {
        const { id } = req.params
        res.json( await this.dataService.obtenerData(id) )
    }

    saveData = async (req,res) => {
        const data = req.body
        res.json(await this.dataService.guardarData(data))
        //res.redirect('/')
    }

    updateData = async (req,res) => {
        const { id } = req.params
        const data = req.body
    
        res.json(await this.dataService.actualizarData(data,id))
    }

    deleteData = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.dataService.eliminarData(id))
    }
}

export default ControladorData