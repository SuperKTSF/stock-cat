'use strict';

/**
 * @ngdoc function
 * @name stockCatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockCatApp
 */
angular.module('stockCatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
