import { helperValidationsProducts } from './../config/helper.js'
import { validateProduct } from './../validation/validation-product.js'

export const middlewareValidateProduct = helperValidationsProducts(validateProduct)
