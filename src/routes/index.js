const adminRouter = require('./admin');
const productRouter = require('./product');


function route(app) {
    app.use('/product', productRouter);
    app.use('/', adminRouter)
};

module.exports = route;
