const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();


// Product Routes 
router.route('/products').get(getAllProducts);
router.route('/products/:id').get(getSingleProduct);
router.route('/product/new').post(isAuthenticatedUser, authorizeRoles('Admin'), createProduct); 
router.route('/product/:id').put(isAuthenticatedUser, authorizeRoles('Admin'), updateProduct);
router.route('/product/:id').delete(isAuthenticatedUser, authorizeRoles('Admin'), deleteProduct);



module.exports = router;