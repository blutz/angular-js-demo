(function() {
  function todoController($scope, todoModel) {
    $scope.name = 'Byron';
    $scope.getItems = todoModel.getItems;
    $scope.removeItem = todoModel.removeItem;
  }
  angular.module('todoApp')
  .controller('todoController',
    ['$scope', 'todoModel',  todoController]);
})();
