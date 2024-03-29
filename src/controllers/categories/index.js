import catchedAsync from "../../utils/catchedAsync.js";

import newCategoryModule from "./newCategory.js";
import disableCategoryModule from "./disableCategory.js"
import getCategoriesModule from "./getCategories.js"
import deleteCategoryModule from "./deleteCategory.js"

export const newCategory = catchedAsync(newCategoryModule)
export const disableCategory = catchedAsync(disableCategoryModule)
export const getCategories = catchedAsync(getCategoriesModule)
export const deleteCategory = catchedAsync(deleteCategoryModule)