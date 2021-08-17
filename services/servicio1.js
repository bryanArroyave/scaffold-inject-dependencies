module.exports = function (db) {
    const users = db['users'];

    return {
        findUsers: function () {
            return users;
        },
        findUser: function (id) {
            return users.find(u => u.id === id);
        }
    };
}