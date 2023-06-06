require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/indexRoutes');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride('_method'));
// app.use(morgan('dev'));

// app.use(session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: false
// }))

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(routes);

// require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});



















// //Imports
// const express = require('express');
// const morgan = require("morgan");
// const path = require('path');


// const app = express();
// const PORT = 3000;

// //Set Views
// app.set('views')
// app.set('view engine', 'ejs')

// //Static Files
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined'));
// // app.use(methodOverride("_method"));
// // app.use(express.static('public'));
// // app.use(routes);



// // app.engine('ejs', require('ejs').__express);





app.get('/', (req, res) => {
    res.render('home', { title: 'Home' })
})

app.get('/home', (req, res) => {
    res.render('home', { title: "home" });
})

app.get('/location-map', (req, res) => {
    res.render('location-map', {
        title: "Location Map",
    });
})

app.get('/location1', (req, res) => {
    res.render('location1', { title: "Harvard Square Fridge" });
})

// app.get('/posts/:location1')

app.get('/location2', (req, res) => {
    res.render('location2', { title: "The Port Fridge" })
})

app.get('/location3', (req, res) => {
    res.render('location3', { title: "Riverside Fridge" })
})

app.get('/location4', (req, res) => {
    res.render('location4', { title: "Union Square Fridge" })
})

app.get('/location5', (req, res) => {
    res.render('location5', { title: "Winter Hill Fridge" })
})

app.get('/login', (req, res) => {
    res.render('login', { title: "Login" })
})

app.get('/signup', (req, res) => {
    res.render('signup', { title: "Signup" })
})

app.get('/resources', (req, res) => {
    res.render('resources', { title: "Resources" })
})

app.get('/post', (req, res) => {
    res.render('post', {
        title: "Postings",
    });
})
// app.use('login', require('./routes/login-routes'));


// // let userPosts = [
// // {
// //     _id: '001',
// //     // // user: user,
// //     // volunteer: true,
// //     postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// // }
// // ]

// //Port
// app.listen(PORT, () => { console.log(`The server is listening on port ${PORT}`); });

// // app.use(/index);

// // const methodOverride = require('method-override');
// // const { findByUsername } = require('./models/posts');

// // res.render('home', { title: "home" });


// //
// //
// //
// //
// //
// // const router = express.Router();

// // const methodOverride = require("method-override");

// // const indexRoutes = require("./routes/index");

// //adding the path module


// // app.set("view engine", "ejs");
// // //this configures the app to set EJS to be the template language

// // // app.use(morgan("combined"));
// // //to use morgan

// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());

// //Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
// // app.use(express.static(path.join(__dirname, "public")));
// // app.use(express.static("public"));
// // app.use(express.static(path.join(__dirname, "public")));
// // app.use(methodOverride("_method"));

// // app.use("/", indexRoutes);





// //last line of code, on bottom
// //to start the server and send a console.log to the terminal with the localhost URL