import { Router } from "express"
import { verifyToken, verifyRole } from "../middlewares/users/index.js"
import { newCategoryValidator } from "../middlewares/categories/index.js";
import { addCategory, disableCategory, getCategories, deleteCategory } from "../controllers/categories/index.js";

const routerCategories = Router();

// verifyToken,
routerCategories.post("/add", newCategoryValidator, addCategory)

// verifyToken, verifyRole,
routerCategories.put("/:categoryID", disableCategory)

// verifyToken,
routerCategories.get("/", getCategories)

// verifyToken, verifyRole,
routerCategories.delete("/:categoryID", deleteCategory)


export default routerCategories;