(function() {
  var todoApp = angular.module('todoApp', ['ngRoute']);

  todoApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: '/partials/todo.html',
          controller: 'todoController'
        }).
        when('/stats', {
          templateUrl: '/partials/todo-stats.html',
          controller: 'todoController'
        }).
        otherwise({
          redirectTo: '/'
        });
    }
  ]);
})();
