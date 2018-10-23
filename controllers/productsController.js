const router = require('express').Router();
const validateSessions = require('../middleware/validate-session');
const Product = require('../models').sequelize.model('product');

router.get('/', (req, res) => {
    Product.findAll()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json(err))
})

router.post('/', validateSessions, (req, res) => {
    // create a product
})

router.get('/:id', (req, res) => {
    // returns  product by id
})

router.put('/:id', validateSessions, (req, res) => {
    // update product by id
})

router.delete('/:id', validateSessions, (req, res) => {
    // delete product by id
})

module.exports = router;