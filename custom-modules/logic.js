var data = require('./data')

module.exports = data

module.exports.active = data.filter(function(account) {
    return account.user_data.active === 1
})



module.exports.userProfile = function(data, id) {
    return data.filter(function(account) {
        return account.user_data.id == id
    })[0]
}
