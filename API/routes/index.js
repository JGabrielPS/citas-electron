const router = require("express").Router();
const pacienteController = require("../controllers/pacienteController");

module.exports = () => {
  router.post("/pacientes", pacienteController.nuevoCliente);

  router.get("/pacientes", pacienteController.obtenerPacientes);

  router.get("/pacientes/:id", pacienteController.obtenerPaciente);

  router.put("/pacientes/:id", pacienteController.actualizarPaciente);

  router.delete("/pacientes/:id", pacienteController.eliminarPaciente);

  return router;
};
