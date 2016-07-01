var data = require('../custom-modules/data')



module.exports.users = function(req, res){
    console.log(data);
    res.json(data)
};

module.exports.activeUsers = function(req, res) {
    res.render('active-users')
}


module.exports.userProfile = function(req, res) {
    res.render('user-profile')
}
