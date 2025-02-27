import { Router } from "express";

const routes = new Router()

routes.get("/", (request, response) => {

    return response.status(200).json({menssage: "Hello Word"})
    
})

export default routes