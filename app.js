require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const app = express()



app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))

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

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

//Initialize Passport
app.use(passport.initialize());
//Passport use session
app.use(passport.session());

const indexRoutes = require('./routes/indexRoutes');
app.use('/', indexRoutes);


require('./config/connection');
//
//??? I can run the server without it, but not with it




//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});


// app.use(session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: false
// }));

// app.set('views', __dirname + '/views')
// app.set('partials', 'partials/partials')




//////////////////////////////////////////////////////////////////////



// app.get('/', (req, res) => {
//     res.render('home', { title: 'Home' })
// })

// app.get('/home', (req, res) => {
//     res.render('home', { title: "home" });
// })

// app.get('/location-map', (req, res) => {
//     res.render('locationMap', {
//         title: "Location Map",
//     });
// })

// app.get('/location1', (req, res) => {
//     res.render('location1', { title: "Harvard Square Fridge" });
// })

// app.get('/location2', (req, res) => {
//     res.render('location2', { title: "The Port Fridge" })
// })

// app.get('/location3', (req, res) => {
//     res.render('location3', { title: "Riverside Fridge" })
// })

// app.get('/location4', (req, res) => {
//     res.render('location4', { title: "Union Square Fridge" })
// })

// app.get('/location5', (req, res) => {
//     res.render('location5', { title: "Winter Hill Fridge" })
// })

// app.get('/login', (req, res) => {
//     res.render('login', { title: "Login" })
// })

// app.get('/signup', (req, res) => {
//     res.render('signup', { title: "Signup" })
// })

// app.get('/resources', (req, res) => {
//     res.render('resources', { title: "Resources" })
// })

// app.get('/post', (req, res) => {
//     res.render('post');
// })

