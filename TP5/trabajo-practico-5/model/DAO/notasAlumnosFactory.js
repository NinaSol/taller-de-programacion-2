import NotasAlumnosMemDAO from './notasAlumnosMemDAO'
import NotasAlumnosMongoDAO from './notasAlumnosMongoDAO'

class NotasAlumnosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                return new NotasAlumnosMemDAO()

            case 'MONGO' :
                return new NotasAlumnosMongoDAO()

            default: 
                return new NotasAlumnosMemDAO()
        }
    }
}

export default NotasAlumnosFactoryDAO