const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');

const authController = require('../app/controllers/AuthController');
const Admin_account = require('../app/models/Admin_account');

passport.use(new LocalStrategy(function verify(username, password, cb) {
    Admin_account.findOne({ email: username }, function (err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
    }
    );
}
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
  });
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });


router.get('/login', authController.show_login);
router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    // failureFlash: true
    }));

router.get('/logout', authController.logout);


router.get('/signup', authController.show_signup);
router.post('/signup', authController.signup);



module.exports = router;
