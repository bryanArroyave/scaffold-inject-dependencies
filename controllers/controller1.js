module.exports = function (userService) {
    return {
        findUsers: function () {
            return userService.findUsers()
        },
        findUser: function (id) {
            return userService.findUser(id)
        }
    };
}