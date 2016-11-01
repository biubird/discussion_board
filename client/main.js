var App = angular.module('DiscModule', ['ngRoute', 'ngMessages']);

App.config(function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_login.html',
    controller: 'LoginController'
  })
  .when('/dashboard', {
    templateUrl: '/partials/_dashboard.html',
    controller: 'DashboardController'
  })
  .when('/topics/:id', {
    templateUrl: '/partials/_topic.html',
    controller: 'TopicController'
  })
  .when('/users/:id', {
    templateUrl: '/partials/_user.html',
    controller: 'UserController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
