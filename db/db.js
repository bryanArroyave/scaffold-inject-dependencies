module.exports = function (dbName) {
   const dbs = {
       'example-db': {
           'users' : [
               {
                   id: 1,
                   name: 'user1'
               },
               {
                    id: 2,
                    name: 'user2' 
               }
           ]
       }
   }
    return dbs[dbName];
}
