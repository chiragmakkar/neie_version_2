module.exports = function(router, mon) {

    var email = require('../routes/index.js');
    //Live Expert or Chat 
    router.post('/live-expert', function(req, res) {

        var expert = new mongo.liveExpert({
            "userEmail": email.email,
            "chooseDomain": req.body.livExpDomain,
            "yourQuestion": req.body.livExpQues,
            "describeChatQuery": req.body.livExpDescQuery,
            "describeExpectation": req.body.liveExpExpect
        });
        expert.save(function(error) {
            if (error) {
                res.send(error);
            } else {
                res.redirect('/');
                console.log('expertPosted');
            }
        });

    });
}