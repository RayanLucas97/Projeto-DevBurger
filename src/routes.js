import { Router } from "express";
import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";



const routes = Router();
const userController = new UserController();



routes.post('/users', userController.store);
routes.post("/session", SessionController.store);

export default routes;


