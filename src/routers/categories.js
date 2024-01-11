import { Router } from "express"
import { verifyToken, verifyRole } from "../middlewares/users/index.js"
import { newCategoryValidator } from "../middlewares/categories/index.js";
import { addCategory, disableCategory, getCategories, deleteCategory } from "../controllers/categories/index.js";

const routerCategories = Router();

routerCategories.post("/new", verifyToken, newCategoryValidator, addCategory)

routerCategories.put("/:categoryID", verifyToken, verifyRole, disableCategory)

routerCategories.get("/", verifyToken, getCategories)

routerCategories.delete("/:categoryID", verifyToken, verifyRole, deleteCategory)


export default routerCategories;