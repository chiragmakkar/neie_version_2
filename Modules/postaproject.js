module.exports = function(app, mon) {

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
}