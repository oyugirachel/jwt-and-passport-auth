const mongoose = require('mongoose');

//The mongoose library takes the schema and converts it into a model
const Schema = mongoose.Schema;

// bcrypt is used to hash user passwords and store them safely
const bcrypt = require('bcrypt');

// a pre-hook function will be called,getting the plain text password, hashing it, and storing it.
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


UserSchema.pre(
    'save',
    async function(next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

//bcrypt hashes the password sent by the user for login and checks if the hashed password stored in the database matches the one sent. It will return true if there is a match. Otherwise, it will return false if there is not a match.
UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;