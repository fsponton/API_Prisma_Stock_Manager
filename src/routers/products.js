import { Router } from "express"
import { verifyToken } from "../middlewares/auth/index.js"
import { newProductValidator } from "../middlewares/products/index.js";
import { newProduct, getProducts } from "../controllers/products/index.js"

const routerProducts = Router();

routerProducts.post("/new", verifyToken, newProductValidator, newProduct)

routerProducts.get("/", verifyToken, getProducts)

export default routerProducts;