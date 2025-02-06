import { Router } from "express";

import {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/students.controllers.js"

const studentsRouter = Router();

studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getStudent);
studentsRouter.post("/", createStudent);
studentsRouter.put("/", updateStudent);
studentsRouter.delete("/", deleteStudent);

export default studentsRouter;
