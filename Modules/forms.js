module.exports = function(router, mongo) {
var email = require('../routes/index.js');

    //Post A Project Form API
    router.post('/post-a-project', function(req, res) {
        var project = new mongo.postAProject({
            "userEmail": email.email,
            "typeOfWork": req.body.postProTypeWork,
            "describeYourJob": req.body.postProDescJob,
            "projectName": req.body.postProjectName,
            "skillsrequired": req.body.postProSkill,
            "cost": req.body.postProCost,
            "duration": req.body.postProDurations
        });
        project.save(function(error) {
            if (error) {
                res.send(error);
            } else {
                res.redirect('/');
                console.log('postProject');
            }
        });

    });

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

    //Rate The Intern form
    router.post('/rate-the-intern', function(req, res) {

        var rateTheIntern = new mongo.reviewIntern({
            "userEmail": email.email,
            "rating": req.body.revIntrRate,
            "review": req.body.revIntrReview
        });
        rateTheIntern.save(function(error) {
            if (error) {
                res.send(error);
            } else {
                res.redirect('/');
                console.log('Intern Rated');
            }
        });

    });



}