import { Router } from "express"
import { verifyToken } from "../middlewares/users/index.js"
import { newProductValidator } from "../middlewares/products/index.js";
import { newProduct } from "../controllers/products/index.js"


const routerProducts = Router();

routerProducts.post("/new", verifyToken, newProductValidator, newProduct)


export default routerProducts;