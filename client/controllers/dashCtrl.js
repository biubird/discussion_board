App.controller('DashboardController', function($scope, UserFactory, TopicFactory, $location, $routeParams){
  $scope.user = UserFactory.getUser();


  function getAllTopics(){
    TopicFactory.getTopics()
    .then( function(serverResponse){
      $scope.topics = serverResponse.data;
    })
  }
  getAllTopics();

  $scope.createTopic = function(){
    $scope.newTopic._user = $scope.user
    TopicFactory.createTopic($scope.newTopic, $scope.newTopic._user)
    .then( function(serverResponse){
      console.log(serverResponse)
      $scope.newTopic = {};
      getAllTopics();
      $location.path('/dashboard');
    })
    .catch( function(error){
      console.log(error)
    })
  }
})
