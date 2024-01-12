import catchedAsync from "../../utils/catchedAsync.js"

import newProductModule from "./newProduct.js"
import getProductsModule from "./getProducts.js"

export const newProduct = catchedAsync(newProductModule)
export const getProducts = catchedAsync(getProductsModule)