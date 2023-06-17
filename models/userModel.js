//DO NOT TOUCH
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongooseFindOrCreate = require('mongoose-findorcreate');

const { Schema } = mongoose;
const userSchema = new Schema({
    username: {
        type: String,
        // unique: true,
        required: [true, "A username is required"],
        minlength: [2, "Username must be at least 2 characters long"],
        maxlength: [30, "Username must be less than 30 characters long"]
    },
    password: {
        type: String,
        required: [true, "A password is required"],
        minlength: [2, "Password must be at least 2 characters long"],
        maxlength: [30, "Password must be less than 30 characters long"]
    },
    googleId: {
        type: String,
    }
});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongooseFindOrCreate);
const User = mongoose.model('User', userSchema);


passport.use(User.createStrategy());


passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user.id, username: user.username, name: user.displayName });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

// Configure Google OAuth
passport.use(new GoogleStrategy({
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // This function is called when the user is authenticated
    // You can perform additional actions here, such as saving the user to a database
    return done(null, profile);
})),

    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/locationMap"
    },
        function (accessToken, refreshToken, email, cb) {
            User.findOrCreate({ googleID: email.id }, function (err, user) {
                return cb(err, user);
            });
        }));

module.exports = User;