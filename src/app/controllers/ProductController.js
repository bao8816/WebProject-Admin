const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const { clearConfigCache } = require('prettier');

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

    //GET "/[update-page]"
    show_update(req, res, next) {
        Product.findOne({slug: req.params.slug})
            .then(product => {
                res.render('products/update', {
                    layout: 'upload-layout',
                    product: mongooseToObject(product)
                });
            })
            .catch(next);
    }

    //POST "/[update]:slug"
    update(req, res, next) {
        Product.findOneAndUpdate({slug: req.params.slug}, req.body, {new: true})
            .then(product => {
                res.redirect('/product');
            })
            .catch(next);
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

    //DELETE 
    delete(req, res, next) {
        Product.deleteOne({_id: req.body.id})
            .then(() => {
                res.redirect('/product');
            }
            )
            .catch(next);
    }
};

module.exports = new ProductController();
