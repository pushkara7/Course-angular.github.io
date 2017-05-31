(function () {
'use strict';

angular.module('NarrowItDownApp', ['ngRoute'])
       .controller('NarrowItDownController', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService)
       .directive('foundItems',FoundItems)
      // .contoller('NarrowItDownDirectiveController',NarrowItDownDirectiveController)
       .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
   var narrow = this;
   narrow.list = [];
   narrow.foundList = function(searchTerm){
    var promise =  MenuSearchService.getMatchedMenuItems(searchTerm).
    then(function(response){
    narrow.list = response;
    console.log(narrow.list);
  });

};
  narrow.onRemove = function (index) {
       narrow.list.splice(index, 1);
   }

   narrow.clear = function () {
        narrow.searchTerm="";
        narrow.list = [];
    }
}


function FoundItems(){
  var ddo = {
    templateUrl:'found.html',
    restrict: 'E',
    scope:{
      found: '<',
      onRemove : '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs:'narrowList',
    bindToController:true
  };
  return ddo;
}

function NarrowItDownDirectiveController(){
  var narrowList = this;

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
var service = this;

service.getMatchedMenuItems =function(searchTerm){
  return $http
              .get(ApiBasePath + '/menu_items.json')
              .then(function (response) {

  // process result and only keep items that match
  var menuItems = response.data.menu_items;
  var foundItems = [];

    for (var i = 0; i < menuItems.length; i++) {
        var result = menuItems[i].description;
        if (result.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(menuItems[i]);
        }
      }


    // return processed items
    return foundItems;

})
.catch(function (response) {
        console.log("Something went wrong!");
      });

  return response;
};



}




})();
