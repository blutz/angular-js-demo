(function(){
  function todoModel () {
    var self = this;
    this._items = getFromLocalStorage();

    this.getItems = function() {
      return self._items;
    };
    this.addItem = function(item) {
      if(!item) { return; };
      self._items.push(item);
      syncLocalStorage();
    };
    this.removeItem = function(item) {
      var index = self._items.indexOf(item);
      if(index >= 0) {
        self._items.splice(index, 1);
      }
      syncLocalStorage();
    };

    function syncLocalStorage() {
      if(!isLocalStorageAvailable) { return; }
      window.localStorage.items = JSON.stringify(self._items);
    }

    function getFromLocalStorage() {
      if(!isLocalStorageAvailable) { return []; }
      if(!window.localStorage.items) {
        window.localStorage.items = '[]';
      }
      return JSON.parse(window.localStorage.items);
    }

    function isLocalStorageAvailable() {
      try {
        window.localStorage.storageTest = 'asdfjkdsfj';
        delete window.localStorage.storageTest;
        return true;
      } catch (e) {
        return false;
      }
    }
  };
  angular.module('todoApp')
  .service('todoModel', todoModel);
})();
