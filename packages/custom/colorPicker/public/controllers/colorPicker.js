'use strict';

/* jshint -W098 */
angular.module('mean.colorPicker', ['mp.colorPicker']).controller('ColorPickerController', ['$scope', 'Global', 'ColorPicker',
  function($scope, Global, ColorPicker) {
    $scope.global = Global;
    $scope.package = {
      name: 'colorPicker'
    };
  } 
]);
