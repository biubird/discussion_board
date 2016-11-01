App.controller('LoginController', function($scope, UserFactory, $location){

  $scope.createUser = function(newUser){
    UserFactory.createUser($scope.newUser)
    .then( function(){
      $scope.newUser = {};
      $location.path('/dashboard');
    })
    .catch( function(error){
      console.log(error)
    })
  }
})
