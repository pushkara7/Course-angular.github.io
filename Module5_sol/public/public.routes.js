(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'public/home/home.html'
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'public/signup-form/signup.html'
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'public/myinfo/myinfo.html',
      controller: 'MyInfoController',
      controllerAs: 'myinfoCtrl',
      resolve: {
        user: ['UserService', function (UserService) {
          return UserService.getUser();
        }]
      }
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
