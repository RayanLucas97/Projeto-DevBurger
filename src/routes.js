import { Router } from "express";
import UserController from "./app/controllers/UserController.js";

const routes = Router();

const userController = new UserController();


routes.post('/users', userController.store);

export default routes;


