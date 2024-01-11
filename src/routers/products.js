import { Router } from "express"
import { verifyToken } from "../middlewares/users/index.js"
import { newProductValidator } from "../middlewares/products/index.js";


const routerProducts = Router();

// verifyToken,

routerProducts.post("/add", newProductValidator)


export default routerProducts;