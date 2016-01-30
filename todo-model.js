(function(){
  function todoModel () {
    var self = this;
    this._items = getFromLocalStorage();

    this.getItems = function() {
      return self._items;
    };
    this.addItem = function(item) {
      if(!item) { return; };
      self.getItems().push(item);
      saveToLocalStorage();
    };
    this.removeItem = function(item) {
      var index = self.getItems().indexOf(item);
      if(index >= 0) {
        self.getItems().splice(index, 1);
      }
      saveToLocalStorage();
    };

    function getFromLocalStorage() {
      if (!isLocalStorageAvailable()) { return []; }
      return JSON.parse(window.localStorage.todoItems);
    }

    function saveToLocalStorage() {
      if(!isLocalStorageAvailable()) { return false; }
      window.localStorage.todoItems = JSON.stringify(self._items);
      return true;
    }

    function isLocalStorageAvailable() {
      try {
        var storage = window['localStorage'];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch(e) {
        return false;
      }
    }
  };
  angular.module('todoApp')
  .service('todoModel', todoModel);
})();
