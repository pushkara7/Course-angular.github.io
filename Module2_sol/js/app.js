(function () {
'use strict';

angular.module('ShoppingListCheckOff', ['ngRoute'])
       .controller('ToBuyController', ToBuyController)
       .controller('AlreadyBoughtController',AlreadyBoughtController)
       .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var buy = this;
buy.items = ShoppingListCheckOffService.getItems();
buy.checkOffItems = function(itemIndex){
 ShoppingListCheckOffService.removeBoughtItem(itemIndex);
}
buy.itemsLength = buy.items;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var bought =this;
bought.itemList = ShoppingListCheckOffService.getBoughtItems();
bought.itemsLength = bought.itemList;
  }

function ShoppingListCheckOffService(){
  var service =this;
  var buyItems = [
  {name:"Gloves", quantity: 1 },
  {name:"Seeds", quantity: 10 },
  {name:"Pots", quantity: 5  },
  {name:"Garden Hose" , quantity:1},
  {name:"Plants", quantity: 10 },
  {name:"Soil", quantity: 5 }

];
  var boughtItems = [];

service.removeBoughtItem = function(itemIndex){

    if ( (buyItems.length) > -1){
      boughtItems.push(buyItems[itemIndex]);
      buyItems.splice(itemIndex,1);
    }
    else{
      throw new error("Everything is bought");
    }
}

service.getItems = function () {
   return buyItems;
 };
 service.getBoughtItems = function () {
    return boughtItems;
  };

} })();
