'use strict';


// Declare app level module which depends on filters, and services
angular.module('cssGen', ['firebase']).
controller("cssApp", function($scope, angularFire){
  var url = new Firebase("https://testing-new-firebase.firebaseio.com/css-snippet");
  angularFire(url, $scope, "css", "");
});