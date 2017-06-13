(function () {
"use strict";

angular.module('public')

.component('signupForm', {
  templateUrl: 'public/signup-form/signup-form.html',
  bindings: {
  },
  controller: SignUpFormController

});


SignUpFormController.$inject = ['MenuService', 'UserService'];
function SignUpFormController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.user.favoriteItem)
    .then(function(result){
      $ctrl.wrongItem = false;
      $ctrl.user.item = result;
      UserService.setUser($ctrl.user);
      $ctrl.completed = true;
    })
    .catch(function(result){
      $ctrl.wrongItem = true;
      $ctrl.completed = false;;
    });

  }
}

})();
