(function(){
  function FirebaseService() {
    var self = this;
    var FIREBASE_URL = 'https://torrid-fire-9031.firebaseio.com/'
    var ref = new Firebase(FIREBASE_URL);
    this.callbacks = [];
    ref.on('value', function(snapshot) {
      self.callbacks.forEach(function(cb) {
        cb(snapshot.val());
      });
    });
    this.setCallback = function (cb) {
      self.callbacks.push(cb);
    }
    this.push = function(item) {
      window.setTimeout(function() {
        ref.push(item);
      });
    }
    this.sync = function(items) {
      window.setTimeout(function() {
        ref.set(items);
      });
    }
  }
  angular.module('todoApp').service('FirebaseService', FirebaseService);
})();
