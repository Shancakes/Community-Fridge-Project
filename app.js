//Imports
const express = require('express');
const app = express();
const PORT = 3000;

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/js'))
app.use('/css', express.static(__dirname + 'public/img'))
app.engine('ejs', require('ejs').__express);


//Set Views
app.set('views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'this is ejs' })
})

app.get('/home', (req, res) => {
    res.render('home')
})


//Port
app.listen(PORT, () => { console.log(`The server is listening on port ${PORT}`); });





//
//
//
//
//
// const router = express.Router();
// const morgan = require("morgan");
// const methodOverride = require("method-override");

// const indexRoutes = require("./routes/index-routes");

//adding the path module
// const path = require('path');

// app.set("view engine", "ejs");
// //this configures the app to set EJS to be the template language

// // app.use(morgan("combined"));
// //to use morgan

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(methodOverride("_method"));

// app.use("/", indexRoutes);





//last line of code, on bottom
//to start the server and send a console.log to the terminal with the localhost URL