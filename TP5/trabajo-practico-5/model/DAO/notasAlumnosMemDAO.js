class NotasAlumnosMemDAO {
  constructor() {
    this.notasAlumnos = [
      { id: "1", nombre: "Nina", apellido: "Marotta", curso: "A", nota: 7 },
      { id: "2", nombre: "Pepe", apellido: "Martinez", curso: "E", nota: 9 },
    ];
  }

  obtenerNotaAlumno = (id) => {
    return this.notasAlumnos.find((na) => na.id === id);
  };

  obtenerNotasAlumnos = () => {
    return this.notasAlumnos;
  };

  obtenerPromedioYCantidadNotasAlumnos = () => {
    const notasAlumnos = this.obtenerNotasAlumnos().map((na) => na.nota);
    const cantidad = notasAlumnos.length;
    let totalNotasAlumnos = 0;
    notasAlumnos.forEach((na) => (totalNotasAlumnos += na));
    const promedio = totalNotasAlumnos / cantidad;
    return { promedio, cantidad };
  };

  crearNotaAlumno = (notaAlumno) => {
    const id = parseInt(this.notasAlumnos[this.notasAlumnos.length - 1].id) + 1;
    notaAlumno.id = String(id);
    notaAlumno.nota = parseInt(notaAlumno.nota);
    this.notasAlumnos.push(notaAlumno);
    return { status: "ok" };
  };
}

export default NotasAlumnosMemDAO;
