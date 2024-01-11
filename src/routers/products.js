import { Router } from "express"
import { verifyToken } from "../middlewares/users/index.js"
import { newProductValidator } from "../middlewares/products/index.js";


const routerProducts = Router();

// verifyToken,

routerProducts.post("/new", newProductValidator)


export default routerProducts;