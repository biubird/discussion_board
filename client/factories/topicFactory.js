App.factory('TopicFactory', function($http){
  var factory = {};
  //var topic_user;


  factory.getTopics = function(){
    return $http.get('/topics')
  }
  factory.getTopicbyId = function(id){
    return $http.get(`/topics/${id}`)
  }
  factory.createTopic = function(newTopic){
    return $http.post('/topics', newTopic)
    .then( function(serverResponse){
      $scope.topic = serverResponse.data;
    })
  }
  // factory.getTopicUser = function(){
  //   return topic_user;
  // }
  return factory;
})
