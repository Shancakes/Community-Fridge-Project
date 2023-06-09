const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log("Successful connection with MongoDB Server");
    }
    else {
        console.log("Error with MongoDB's connectivity");
        console.log(err)
    }
});


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });


// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(`mongodb://localhost:3000/test`, {
//             useNewUrlParser: true,
//         });
//         console.log(`MongoDB Connected: {conn.connection.host}`);
//     } catch (error) {
//         console.error(error.message);
//         process.exit(1);
//     }
// }
