angular.module('Variables')
.directive('jzCode', [function() {
  var o = {};

  o.restrict = 'A';
  o.templateUrl = 'js/directives/jz-code.html';
  o.scope = {
    variable: '=',
  };
  o.link = function(scope, element, attrs) {};
  o.controller = ['$rootScope', '$scope', function($rootScope, $scope) {
    console.log($scope.variable);
    $scope.word = $scope.variable;
  }];

  return o;
}]);
