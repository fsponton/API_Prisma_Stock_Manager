import { Router } from "express"
import { verifyToken, verifyRole } from "../middlewares/auth/index.js"
import { newCategoryValidator } from "../middlewares/categories/index.js";
import { newCategory, disableCategory, getCategories, deleteCategory } from "../controllers/categories/index.js";

const routerCategories = Router();

routerCategories.post("/new", verifyToken, newCategoryValidator, newCategory)

routerCategories.put("/:categoryID", verifyToken, verifyRole, disableCategory)

routerCategories.get("/", verifyToken, getCategories)

routerCategories.delete("/:categoryID", verifyToken, verifyRole, deleteCategory)

export default routerCategories;