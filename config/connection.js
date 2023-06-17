//DO NOT TOUCH


const mongoose = require('mongoose');


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log("Successful connection with MongoDB Server");
    }
    else {
        console.log("Error with MongoDB's connectivity");
        console.log(err)
    }
});

// main().catch(err => console.log(err))