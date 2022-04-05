const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { clearConfigCache } = require('prettier');

function toLowerCase(String) {
    return String.toLowerCase();
}

class ProductController {
    //GET "/product"
    show(req, res, next) {

        Product.find({})
            .then(products => { 
                res.render('products/product', {
                    layout: 'home-layout',
                    products: multipleMongooseToObject(products)
                }); 
            })
            .catch(err => { 
                next(err); 
            });
        
    }

    //GET "/upload-page"
    show_upload(req, res, next) {
        res.render('products/upload', {
            layout: 'upload-layout'
        });
    }

    //POST "/upload"
    upload(req, res, next) {

        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
        });
        product.save()
            .then(() => {
                res.redirect('/product');
            })
            .catch(next);
    }
};

module.exports = new ProductController();
