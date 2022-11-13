import config from "../config.js";
import NotasAlumnosFactoryDAO from "../model/DAO/notasAlumnosFactory";

class ServiceNotaAlumno {
  constructor() {
    this.notaAlumnoDAO = NotasAlumnosFactoryDAO.get(config.DB);
  }

  obtenerNotaAlumno = async (id) => {
    return id
      ? await this.notaAlumnoDAO.obtenerNotaAlumno(id)
      : await this.notaAlumnoDAO.obtenerNotasAlumnos();
  };

  obtenerPromedioYCantidadNotasAlumnos = async () => {
    const notasAlumnos = this.obtenerNotaAlumno().map((na) => na.nota);
    const cantidad = notasAlumnos.length;
    let totalNotasAlumnos = 0;
    notasAlumnos.forEach((na) => (totalNotasAlumnos += na));
    const promedio = totalNotasAlumnos / cantidad;
    return { promedio, cantidad };
  };

  crearNotaAlumno = async (notaAlumno) => {
    return await this.notaAlumnoDAO.crearNotaAlumno(notaAlumno);
  };
}

export default ServiceNotaAlumno;
