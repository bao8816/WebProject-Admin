
class AuthController {
    show_login(req, res) {
        res.render('login', {layout: 'iden-layout'})

    }

    show_signup(req, res) {
        res.render('signup', {layout: 'iden-layout'})
    }

    logout (req, res) {
        req.logout();
        res.redirect('/');
    }

    signup (req, res, next) {
        
    }
}

module.exports = new AuthController
