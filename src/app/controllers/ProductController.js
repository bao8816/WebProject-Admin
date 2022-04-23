const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const { clearConfigCache } = require('prettier');

// url: /product

class ProductController {
    //GET "/product"
    show(req, res, next) {

        Product.find({})
            .then(products => { 
                res.render('products/product', {
                    layout: 'product-layout',
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
            layout: 'product-layout'
        });
    }

    //GET "/[update-page]"
    show_update(req, res, next) {
        Product.findOne({slug: req.params.slug})
            .then(product => {
                res.render('products/update', {
                    layout: 'product-layout',
                    product: mongooseToObject(product)
                });
            })
            .catch(next);
    }

    //PUT "/:id"
    update(req, res, next) {
        Product.updateOne({_id: req.params.id}, req.body)
            .then(() => {
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

    //[DELETE] "/:id" 
    delete(req, res, next) {
        Product.deleteOne({_id: req.params.id})
            .then(() => {
                res.redirect('back');
            }
            )
            .catch(next);
    }
};

module.exports = new ProductController();
