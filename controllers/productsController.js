const router = require('express').Router();
const validateSessions = require('../middleware/validate-session');
const Product = require('../models').sequelize.model('product');

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    return products ? res.status(200).json(products) :
        res.status(500).json({ err: true, msg: 'Products not found' });
})

router.post('/', validateSessions, (req, res) => {
    // create a product
})

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ where: { id: req.params.id } });
    return product ? res.status(200).json(product) :
        res.status(500).json({ err: true, msg: 'Product not found' });
})

router.put('/:id', validateSessions, (req, res) => {
    // update product by id
})

router.delete('/:id', validateSessions, (req, res) => {
    // delete product by id
})

module.exports = router;