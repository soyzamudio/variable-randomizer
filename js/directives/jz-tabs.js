angular.module('Variables')
.directive('jzTabs', [function() {
  var o = {};

  o.restrict = 'A';
  o.templateUrl = 'js/directives/jz-tabs.html';
  o.scope = {
    camel: '=',
    snake: '=',
    kebab: '='
  };
  o.link = function(scope, element, attrs) {};
  o.controller = ['$rootScope', '$scope', function($rootScope, $scope) {

  }];

  return o;
}]);
