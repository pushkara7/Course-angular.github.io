(function () {
'use strict';

angular.module('LunchCheck', ['ngRoute'])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {

  $scope.checkLunch = function () {

  var lunch = $scope.lunch;
  if($scope.lunch){
  var numberOfItems = lunch.split(',').length;
  $scope.result = numberOfItems <= 3 ? "Enjoy!" : "Too much!";
  $scope.status = true;
    } else {
  $scope.result = "Please enter data first";
  $scope.status = false;
  }
  };


}

})();
