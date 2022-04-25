const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const { clearConfigCache } = require('prettier');

// url: /product

class ProductController {
    //GET "/product"
    show(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
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
    }

    //GET "/upload-page"
    show_upload(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            res.render('products/upload', {
                layout: 'product-layout'
            });
        }
    }

    //GET "/[update-page]"
    show_update(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.findOne({slug: req.params.slug})
                .then(product => {
                    res.render('products/update', {
                        layout: 'product-layout',
                        product: mongooseToObject(product)
                    });
                })
                .catch(next);
        }
    }

    //PUT "/:id"
    update(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.updateOne({_id: req.params.id}, req.body)
                .then(() => {
                    res.redirect('/product');
                })
                .catch(next);
        }
    }

    //POST "/upload"
    upload(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            const product = new Product({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                price: req.body.price,
                category: req.body.category,
                inventory: req.body.inventory,
                sold: 0,
            });
            product.save()
                .then(() => {
                    res.redirect('/product');
                })
                .catch(next);
        }
    }

    //[DELETE] "/:id" 
    delete(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.deleteOne({_id: req.params.id})
                .then(() => {
                    res.redirect('back');
                }
                )
                .catch(next);
        }
    }

    //GET "/product/date-sort"
    date_sort(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.find({})
                .sort({createdAt: -1})
                .then(products => {
                    res.render('products/product', {
                        layout: 'product-layout',
                        products: multipleMongooseToObject(products)
                    });
                })
                .catch(next);
        }
    }

    //GET "/product/price-sort"
    price_sort(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.find({})
                .sort({price: 1})
                .then(products => {
                    res.render('products/product', {
                        layout: 'product-layout',
                        products: multipleMongooseToObject(products)
                    });
                })
                .catch(next);
        }
    }

    //GET "/product/name-sort"
    name_sort(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.find({})
                .sort({name: 1})
                .then(products => {
                    res.render('products/product', {
                        layout: 'product-layout',
                        products: multipleMongooseToObject(products)
                    });
                })
                .catch(next);
        }
    }

    //GET "/product/burger-filter"
    burger_filter(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.find({category: 'burger'})
                .then(products => {
                    res.render('products/product', {
                        layout: 'product-layout',
                        products: multipleMongooseToObject(products)
                    });
                })
                .catch(next);
        }
    }

    //GET "/product/drink-filter"
    drink_filter(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.find({category: 'drink'})
                .then(products => {
                    res.render('products/product', {
                        layout: 'product-layout',
                        products: multipleMongooseToObject(products)
                    });
                })
                .catch(next);
        }
    }

    //GET "/product/snack-filter"
    snack_filter(req, res, next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Product.find({category: 'snack'})
                .then(products => {
                    res.render('products/product', {
                        layout: 'product-layout',
                        products: multipleMongooseToObject(products)
                    });
                })
                .catch(next);
        }
    }
};

module.exports = new ProductController();
