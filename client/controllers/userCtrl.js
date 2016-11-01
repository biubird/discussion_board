App.controller('UserController', function($scope, UserFactory, TopicFactory, PostFactory, $routeParams, $location){

  function getUserById(){
    UserFactory.getUserId($routeParams.id)
    .then( function(serverResponse){
      $scope.user = serverResponse.data;
      console.log(serverResponse.data);
    })
  }
  getUserById($routeParams.id);

})
