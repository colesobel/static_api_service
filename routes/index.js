var data = require('../custom-modules/data')
var logic = require('../custom-modules/logic')



module.exports.users = function(req, res){
    res.json(data)
};

module.exports.activeUsers = function(req, res) {
    res.json(logic.active)
}


module.exports.userProfile = function(req, res) {
    res.json(logic.userProfile)
}
