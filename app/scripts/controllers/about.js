'use strict';

/**
 * @ngdoc function
 * @name stockCatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stockCatApp
 */
angular.module('stockCatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
