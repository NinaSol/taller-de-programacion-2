import express from "express";
import ControllerNotaAlumno from "../controller/notasAlumnos.js";

export class NotaAlumnoRouter {
  constructor() {
    this.router = express.Router();
    this.notasAlumnosController = new ControllerNotaAlumno();
  }

  start() {
    this.router.get("/:id?", this.notasAlumnosController.obtenerNotaAlumno);
    this.router.get("/", this.notasAlumnosController.obtenerNotaAlumno);
    this.router.get(
      "/promedioCant",
      this.notasAlumnosController.obtenerPromedioYCantidadNotasAlumnos
    );
    this.router.post("/", this.notasAlumnosController.crearNotaAlumno);

    return this.router;
  }
}
