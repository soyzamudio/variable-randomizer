angular.module('Variables')
.config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath("../bower_components/zeroclipboard/dist/ZeroClipboard.swf");
}])
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

    $scope.fallback = function(copy) {
      window.prompt('Press cmd+c to copy the text below.', copy);
    };
  }];

  return o;
}]);
