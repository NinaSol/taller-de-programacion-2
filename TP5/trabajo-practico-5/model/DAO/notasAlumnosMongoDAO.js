import CnxMongoDB from "../cnxMongoDB.js";
import { ObjectId } from "mongodb";

class NotasAlumnosMongoDAO {
  obtenerNotaAlumno = async (id) => {
    if (!CnxMongoDB.connection) return {};
    let notaAlumno = await CnxMongoDB.db
      .collection("notasAlumnos")
      .findOne({ _id: ObjectId(id) });
    return notaAlumno;
  };

  obtenerNotasAlumnos = async () => {
    return CnxMongoDB.db.collection("notasAlumnos").findOne({});
  };

  crearNotaAlumno = async (notaAlumno) => {
    if (!CnxMongoDB.connection) return {};

    //nota, nombre,apellido y curso
    await CnxMongoDB.db.collection("notasAlumnos").insertOne(notaAlumno);
    return { status: "ok" };
  };
}

export default NotasAlumnosMongoDAO;
