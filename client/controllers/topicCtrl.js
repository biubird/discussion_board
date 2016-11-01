App.controller('TopicController', function($scope, TopicFactory, UserFactory, PostFactory, $routeParams, $location){
  $scope.user = UserFactory.getUser();
//  $scope.topic_user = TopicFactory.getTopicUser();

  function getTopicById(){
    TopicFactory.getTopicbyId($routeParams.id)
    .then( function(serverResponse){
      $scope.topic = serverResponse.data;
      console.log(serverResponse.data);
    })
  }
  getTopicById();

  function getAllPosts(){
    PostFactory.getPosts()
    .then( function(serverResponse){
      
      $scope.posts = serverResponse.data;
    })
  }
  getAllPosts();

  $scope.createPost = function(){
    $scope.newPost._user = $scope.user;//logged in user
    $scope.newPost._topic = $scope.topic;//current topic

    PostFactory.createPost($scope.newPost, $scope.newPost._user, $scope.newPost._topic)
    .then( function(serverResponse){
      console.log(serverResponse)
      $scope.newPost = {};
      console.log(newPost);
      getAllPosts();
    })
    .catch( function(error){
      console.log(error)
    })
  }
})
