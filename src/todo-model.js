(function(){
  function todoModel (FirebaseService, $rootScope) {
    var self = this;
    this._items = [];

    this.getItems = function() {
      return self._items;
    };
    this.addItem = function(item) {
      if(!item) { return; };
      self.getItems().push(item);
      FirebaseService.push(item);
    };
    this.removeItem = function(item) {
      var index = self.getItems().indexOf(item);
      if(index >= 0) {
        self.getItems().splice(index, 1);
      }
      FirebaseService.sync(self.getItems());
    };

    FirebaseService.setCallback(function(val) {
      $rootScope.$apply(function() {
        self._items = parseFirebaseToArray(val)
      });
    });

    function parseFirebaseToArray(val) {
      var ret = [];
      if(!val) { return []; }
      Object.keys(val).forEach(function(key) {
        ret.push(val[key]);
      });
      return ret;
    }

  };
  angular.module('todoApp')
  .service('todoModel', ['FirebaseService', '$rootScope', todoModel]);
})();
