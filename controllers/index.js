module.exports = app => {
    app.use('/api/product', require('./productsController'));
    app.use('/api/auth', require('./usersController'));
}