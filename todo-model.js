(function(){
  function todoModel (FirebaseService, $rootScope) {
    var self = this;
    this._items = [];

    FirebaseService.registerCallback(function(val) {
      $rootScope.$apply(function() {
        self._items = val;
      });
    });

    this.getItems = function() {
      return self._items;
    };
    this.addItem = function(item) {
      if(!item) { return; };
      self._items.push(item);
      FirebaseService.addItem(item);
    };
    this.removeItem = function(item) {
      var index = self._items.indexOf(item);
      if(index >= 0) {
        self._items.splice(index, 1);
      }
      FirebaseService.syncItems(self._items);
    };

  };
  angular.module('todoApp')
  .service('todoModel', ['FirebaseService', '$rootScope', todoModel]);
})();
