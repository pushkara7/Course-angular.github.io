(function() {
'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'views/menuapp/categories/categories.component.html',
    bindings: {
      categories: '<'
    }
  });

})();
