App.factory('UserFactory', function($http){
  var factory = {};
  var loggedInUser;

  factory.getUser = function(){
    return loggedInUser;
  }
  factory.createUser = function(newUser){
    return $http.post('/users', newUser)
      .then( function(serverResponse){
        loggedInUser = serverResponse.data;
      })
  }
  factory.getUsers = function(){
    return $http.get('/users')
  }
  factory.getUserId = function(id){
    return $http.get(`/users/${id}`)
  }
  return factory;
})
