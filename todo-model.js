(function(){
  function todoModel () {
    var self = this;
    this._items = [
      'Eat pizza',
      'Get dinner',
      'Buy a dodge',
    ];
    this.getItems = function() {
      return self._items;
    };
    this.addItem = function(item) {
      if(!item) { return; };
      self._items.push(item);
    };
    this.removeItem = function(item) {
      var index = self._items.indexOf(item);
      if(index >= 0) {
        self._items.splice(index, 1);
      }
    };
  };
  angular.module('todoApp')
  .service('todoModel', todoModel);
})();
