(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'views/menuapp/items/items.component.html',
    bindings: {
      items: '<'
    }
  });

})();
