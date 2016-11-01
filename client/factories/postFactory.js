App.factory('PostFactory', function($http){
  var factory = {};
  var post_user;

  factory.createPost = function(newPost){
    return $http.post('/posts', newPost)
    .then( function(serverResponse){
      post_user = serverResponse.data;
    })
  }
  factory.getPosts = function(){
    return $http.get('/posts')
  }
  factory.getPostUser = function(){
    return post_user;
  }
  return factory;
})
