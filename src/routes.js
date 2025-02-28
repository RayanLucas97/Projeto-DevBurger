import { Router } from "express";
import User from "./app/controllers/models/User.js";
import { v4 } from "uuid";

const routes = new Router();

routes.get("/", async (request, response) => {
 
    const user = await User.create({
        id:v4(),
        name:"Rayan10",
        email:"rayan10@email.com",
        password_hash:"1234567",
    });
   
    return response.status(201).json(user);
});

export default routes;