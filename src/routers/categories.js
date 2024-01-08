import { Router } from "express"
import { verifyToken } from "../middlewares/users/index.js"
import { newCategoryValidator } from "../middlewares/categories/index.js";
import { addCategory, disableCategory, getCategories } from "../controllers/categories/index.js";



const routerCategories = Router();

routerCategories.post("/add", verifyToken, newCategoryValidator, addCategory)

routerCategories.put("/:categoryID", verifyToken, disableCategory)

routerCategories.get("/", verifyToken, getCategories)


export default routerCategories;