import { Router } from "express";
import UserController from "./app/controllers/UserController.js";


const routes = Router();

routes.post("/users", (req, res) => {
    UserController.store(req, res);
});


export default routes;