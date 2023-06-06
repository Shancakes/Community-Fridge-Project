// require('dotenv').config();
// const morgan = require('morgan');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const passport = require('passport');


const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRoutes');
const PORT = 3000;
// const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Mongoose'))



app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.set('views', __dirname + '/views')
app.set('partials', 'partials/partials')
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});





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
//     res.render('post', {
//         title: "Postings",
//     });
// })

