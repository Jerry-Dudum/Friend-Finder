var friends = require("../data/friend.js");

module.exports = function (app) {
    //GET method to retrieve entire friends list
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    //POST method to push newly made friend into the array
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    })
}