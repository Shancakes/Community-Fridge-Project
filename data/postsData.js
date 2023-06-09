const { v4: uuid } = require('uuid');

module.exports = [
    {
        _id: uuid(),
        name: "CodeSquader1",
        rad1: true,
        rad2: false,
        // date: "datehere"
        content: "this is a post for the first post"
    },
    {
        name: "CodeSquader2",
        rad1: false,
        rad2: true,
        // date: "datehere"
        content: "this is a post for the second post"
    }
]