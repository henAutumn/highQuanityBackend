const sequelize = require('../models').sequelize;
const Product = sequelize.model('product'); 
const User = sequelize.model('user');

User.hasMany(Product);
Product.belongsTo(User);

sequelize.sync();
