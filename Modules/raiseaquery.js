module.exports = function(router, mon) {
var email = require('../routes/index.js');
    //Raise a Query or Disscussion Form 
    router.post('/raise-a-query', function(req, res) {

        var raiseAQuery = new mongo.query({
            "userEmail": email.email,
            "queryDomain": req.body.raQryDomain,
            "describeDiscussionQuery": req.body.raQryDescQry,
            "discussionExpectation": req.body.raQryExpect
        });
        query.save(function(error) {
            if (error) {
                res.send(error);
            } else {
                res.redirect('/');
                console.log('queryPosted');
            }
        });

    });
}