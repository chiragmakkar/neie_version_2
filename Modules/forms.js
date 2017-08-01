module.exports = function(app, mon) {

    //Post A Project Form API
    app.post('/post-a-project', function(req, res) {

        var project = new postAProject({
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
    app.post('/live-expert', function(req, res) {

        var expert = new liveExpert({
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
    app.post('/raise-a-query', function(req, res) {

        var raiseAQuery = new query({
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
    app.post('/rate-the-intern', function(req, res) {

        var rateTheIntern = new reviewIntern({
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