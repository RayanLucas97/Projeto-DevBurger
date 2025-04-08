import express from "express";
import routes from "./routes.js";
import "./database";
import {resolve} from "node:path"
class App {
    constructor() {
        this.app = express()

    this.middleware();
    this.routes();
    }

    middleware() { 
        this.app.use(express.json()); 
        this.app.use("/product-file", express.static(resolve(__dirname, "..", "uploads")),);
    }

    routes() {
        this.app.use(routes)
    }
}


export default new App().app

