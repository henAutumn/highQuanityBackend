module.exports = app => {
    app.use('/api/product', require('./productsController'));
}