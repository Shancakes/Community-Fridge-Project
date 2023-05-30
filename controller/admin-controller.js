
const data = require("../data/data");

module.exports = {
    //getting the data for the admin page
    //***make sure all the names match!!!!! :(
    admin: (request, response) => {
        response.render("pages/admin", {
            data: data
        })
    },
    //grab the info from request.body
    //create a new comic and save it
    adminCreate: (request, response) => {
        response.render("pages/create", {
            data: data
        })
    },
    update: (request, response) => {
        //when request is sent, grabs the specific ID of the book that we are looking for
        const id = request.params._id
        //looking into our data file to find the specific book ID for the details we want
        //ID turned into a string so we can use it, capturing specific ID :)
        const comic = data.find(book => book._id === String(id))
        response.render("pages/update", {
            data: comic
        })
    },

}
