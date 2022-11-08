import { router } from './../config/express.js'
import { getProducts, getProduct, insertProduct, updateProduct, deleteProduct } from './../controller/product.controller.js'
import { middlewareValidateProduct } from './../middleware/middleware-validation-product.js'

router.get('/products', getProducts)

router.get('/products/:id', middlewareValidateProduct, getProduct)

router.post('/products', middlewareValidateProduct, insertProduct)

router.patch('/products/:id', middlewareValidateProduct ,updateProduct)

router.delete('/products/:id', middlewareValidateProduct, deleteProduct)

export default router
