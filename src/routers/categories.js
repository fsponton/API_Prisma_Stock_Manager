import { Router } from "express"
import { verifyToken } from "../middlewares/users/index.js"
import { newCategoryValidator } from "../middlewares/categories/index.js";
import addCategory from "../controllers/categories/addCategory.js";



const routerCategories = Router();

routerCategories.post("/add", verifyToken, newCategoryValidator, addCategory)


export default routerCategories;