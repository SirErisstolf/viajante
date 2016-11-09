'use strict';

angular.module('mean.colorPicker').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('colorPicker example page', {
      url: '/colorPicker/example',
      templateUrl: 'colorPicker/views/index.html'
    });
  }
]);
