(function() {
  var todoModule = angular.module('todoApp', ['ngRoute']);
  todoModule.config(['$routeProvider',
    function($routeProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/', {
          templateUrl: 'partials/todo.html',
          controller: 'todoController'
        }).
        when('/stats', {
          templateUrl: 'partials/stats.html',
          controller: 'todoController'
        }).
        otherwise({
          redirectTo: '/'
        });
    }
  ]);
})();
