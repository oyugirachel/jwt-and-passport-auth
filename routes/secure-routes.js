const express = require('express');
const router = express.Router();

//This code handles a GET request for profile. It returns a "You made it
// to the secure route " message. It also returns information about the user and token.

router.get(
    '/profile',
    (req, res, next) => {
        res.json({
            message: 'You made it to the secure route',
            user: req.user,
            token: req.query.secret_token
        })
    }
);

module.exports = router;