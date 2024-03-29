//DONT TOUCH
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
const app = express()

//require secret key
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

//Port 3000
const PORT = process.env.PORT || 3000;

//Morgan
const morgan = require('morgan');
app.use(morgan('dev'));

//Adding path module and EJS to app.js
const path = require('node:path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//Requiring Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Adding functionality to app.js
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Initialize Passport
app.use(passport.initialize());
//Passport use session
app.use(passport.session());

const indexRoutes = require('./routes/indexRoutes');
app.use('/', indexRoutes);

//allow username to be read on all pages (for navbar)
app.use((req, res, next) => {
    res.locals.username = req.user ? req.user.username : null;
    next();
});


require('./config/connection');


//Server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`The server is listening on port ${PORT}`);
});


