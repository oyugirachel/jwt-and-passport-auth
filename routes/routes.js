const express = require('express');
const passport = require('passport');

const router = express.Router();



// Handling of a POST request for  a signup

router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async(req, res, next) => {
        res.json({
            message: 'Signup successful',
            user: req.user
        });
    }
);


module.exports = router;