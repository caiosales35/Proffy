import express from "express";
import ClassesControler from "./controllers/ClassesController";

const routes = express.Router();
const classesControlers = new ClassesControler();

routes.post("/classes", classesControlers.create);

export default routes;
