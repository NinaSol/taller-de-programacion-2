import ServiceNotaAlumno from "../service/notasAlumnos.js";

class ControllerNotaAlumno {
  constructor() {
    this.serviceNotaAlumno = new ServiceNotaAlumno();
  }

  obtenerNotaAlumno = async (req, res) => {
    const { id } = req.params;
    res.json(await this.serviceNotaAlumno.obtenerNotaAlumno(id));
  };

  obtenerPromedioYCantidadNotasAlumnos = async (req, res) => {
    res.json(
      await this.serviceNotaAlumno.obtenerPromedioYCantidadNotasAlumnos()
    );
  };

  crearNotaAlumno = async (req, res) => {
    const notaAlumno = req.body;
    res.json(await this.serviceNotaAlumno.crearNotaAlumno(notaAlumno));
  };
}

export default ControllerNotaAlumno;
