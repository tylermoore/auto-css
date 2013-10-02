'use strict';

/* Controllers */

cssGen.controller( 'itemsController', function($scope){
  
  $scope.css-snippet = [
    { "name" : "body",
      "snippet" : { "background" : "red" } },
    { "name" : "div",
      "snippet" : {"padding" : "10px" } }
  ];
});  