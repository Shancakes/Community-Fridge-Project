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
        unique: true,
        required: [true, "A username is required"],
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [15, "Username must be less than 16 characters long"]
    },
    password: {
        type: String,
        required: [true, "A password is required"],
        minlength: [4, "Password must be at least 4 characters long"],
        maxlength: [16, "Password must be less than 16 characters long"]
    },
    googleId: {
        type: String,
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongooseFindOrCreate);

const User = mongoose.model('User', userSchema);


passport.use(User.createStrategy());

// async function runUsers() {
//     await mongoose.connect(`${process.env.MONGODB_URL}`)
//     mongoose.model('Users', userSchema);
//     await mongoose.model('Users').find();
// }
// runUsers();

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

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/locationMap"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleID: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }));

module.exports = User;