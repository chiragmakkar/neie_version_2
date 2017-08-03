module.exports = function(router, mongo) {

    var postaprojectForm = require('./postaproject.js')(router, mongo);
    var raiseaqueryForm = require('./raiseaquery.js')(router, mongo);
    var liveexpertForm = require('./liveexpert.js')(router, mongo);
    var ratetheinternForm = require('./ratetheintern')(router, mongo);

}