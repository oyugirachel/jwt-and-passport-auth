//Passport is an authentication middleware used to authenticate requests
//It allows developers to use different strategies for authenticating users, such as using a local database or connecting to social networks through APIs
//passport-local strategy is used to create middleware that will handle user registration and login. This will then be plugged into certain routes and be used for authentication

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/model');


// Adding a passport middleware to handle user registration

passport.use(
    'signup',
    new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        async(email, password, done) => {
            try {
                const user = await UserModel.create({ email, password });

                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);


//Passport middleware to handle user login

passport.use(
    'login',
    new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        async(email, password, done) => {
            try {
                const user = await UserModel.findOne({ email });

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }

                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }

                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                return done(error);
            }
        }
    )
);