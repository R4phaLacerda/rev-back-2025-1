import { Router } from "express";
import studentsRouter from "./students.routes.js";
import usersRouter from "./users.routes.js";

const routes = Router();
// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Servidor rodando perfeitamente!" });
});

Router.get("/students", studentsRouter);
Router.get("/users", usersRouter);

export default routes;