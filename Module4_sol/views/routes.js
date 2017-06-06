(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/');


  $stateProvider


  .state('home', {
    url: '/',
    templateUrl: 'views/menuapp/home.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'views/menuapp/categories/categories.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function(response) {
          return response.data;
        });
      }]
    }
  })

  .state('items', {
    url: '/items/{category}',
    templateUrl: 'views/menuapp/items/items.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category)
        .then(function(response) {
          return response.data.menu_items;
        });
      }]
    }
  })
  ;
}

})();
