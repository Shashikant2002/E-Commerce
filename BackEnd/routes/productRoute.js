const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productController');
const router = express.Router();


// Product Routes 
router.route('/products').get(getAllProducts);
router.route('/products/:id').get(getSingleProduct);
router.route('/product/new').post(createProduct); 
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').delete(deleteProduct);



module.exports = router;