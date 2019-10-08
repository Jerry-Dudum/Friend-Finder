var friends = require("../data/friend.js");

module.exports = function (app) {
    //GET method to retrieve entire friends list
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //POST method to push newly made friend into the array
    app.post("/api/friends", function (req, res) {

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i])
        }

        var bestFriendIndex = 0;
        var lowestDiff = 40;

        for (var i = 0; i < friends.length; i++) {

            var scoreDiff = 0;

            for (var j = 0; j < 10; j++) {
                var diff = Math.abs(user.scores[j] - friends[i].scores[j]);
                scoreDiff += diff;
            }


            if (scoreDiff < lowestDiff) {
                bestFriendIndex = i;
                lowestDiff = scoreDiff
            }
        }

        friends.push(user);

        res.json(friends[bestFriendIndex]);
    });
};