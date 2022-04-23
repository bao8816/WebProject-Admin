const adminRouter = require('./admin');
const productRouter = require('./product');
const authRouter = require('./auth');
const profileRouter = require('./profiles');


function route(app) {
    app.use('/product', productRouter)
    app.use('/dashboard-profiles', profileRouter)
    app.use('/', authRouter)
    app.use('/', adminRouter)
};

module.exports = route;
