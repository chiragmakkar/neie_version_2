module.exports = function(app, mon) {
    var email = require('../routes/index.js');
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