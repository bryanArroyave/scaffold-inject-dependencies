const di = new (require('./lib/container'))()

di.register('dbName', 'example-db')
di.factory('db', require('./db/db'))
di.factory('userService', require('./services/servicio1'))
di.factory('userController', require('./controllers/controller1'))
try {
    
    const userController = di.get('userController');
    const users = userController.findUser(1)
    console.log(users)
} catch (error) {
        console.log(error);
}