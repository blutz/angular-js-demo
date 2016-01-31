(function() {
  function FirebaseService() {
    var ref = new Firebase('https://torrid-fire-9031.firebaseio.com/');
    var self = this;
    this.callbacks = [];
    this.registerCallback = function(cb) {
      this.callbacks.push(cb);
    };

    ref.on('value', function(selection) {
      self.callbacks.forEach(function(cb) {
        var formatted = formatFirebase(selection.val());
        window.setTimeout(function() {
          cb(formatted);
        }, 0);
      });
    });

    function formatFirebase(fb) {
      if(!fb) { return []; }
      var ret = [];
      Object.keys(fb).forEach(function(key) {
        ret.push(fb[key]);
      });
      return ret;
    }

    this.addItem = function(item) {
      ref.push(item);
    };

    this.syncItems = function(items) {
      ref.set(items || {});
    };
  }
  angular.module('todoApp')
  .service('FirebaseService', FirebaseService);
})();
