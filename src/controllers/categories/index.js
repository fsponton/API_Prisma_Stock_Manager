import catchedAsync from "../../utils/catchedAsync.js";

import addCategoryModule from "./addCategory.js";
import disableCategoryModule from "./disableCategory.js"

export const addCategory = catchedAsync(addCategoryModule)
export const disableCategory = catchedAsync(disableCategoryModule)