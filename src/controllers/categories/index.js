import catchedAsync from "../../utils/catchedAsync.js";

import addCategoryModule from "./addCategory.js";
import disableCategoryModule from "./disableCategory.js"
import getCategoriesModule from "./getCategories.js"
import deleteCategoryModule from "./deleteCategory.js"

export const addCategory = catchedAsync(addCategoryModule)
export const disableCategory = catchedAsync(disableCategoryModule)
export const getCategories = catchedAsync(getCategoriesModule)
export const deleteCategory = catchedAsync(deleteCategoryModule)