'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

   $scope.url ='assets/images/5.jpg'
    console.log('hi');

  }
]);
