const adminRouter = require('./admin');
const productRouter = require('./product');
const authRouter = require('./auth');


function route(app) {
    app.use('/product', productRouter)
    app.use('/', authRouter)
    app.use('/', adminRouter)
};

module.exports = route;
