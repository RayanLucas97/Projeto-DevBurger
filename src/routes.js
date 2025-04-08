import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer.js"
import authMiddleware from "./middlewares/auth.js";



import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import ProductController from "./app/controllers/ProductController.js";
import CategoryController from "./app/controllers/CategoryController.js";

const routes = Router();
const userController = new UserController();

const upload = multer(multerConfig);



routes.post('/users', userController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware);
routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);

routes.post("/categories", CategoryController.store);
routes.get("/categories", CategoryController.index);

export default routes;


