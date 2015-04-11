angular.module('Variables', ['ui.router', 'ngLodash', 'ngClipboard'])
.config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath("../bower_components/zeroclipboard/dist/ZeroClipboard.swf");
}])
.controller('HomeController', ['$scope', 'lodash', function($scope, lodash) {
  var words = ['hello', 'this', 'is', 'a', 'test', 'with', 'random', 'words', 'lol'];

  $scope.generateRandom = function() {
    var temp = '';
    for (var i = 0; i < $scope.number; i++) {
      var random = Math.floor((Math.random() * words.length));
      temp += ' ' + words[random];
    }

    $scope.camel = lodash.camelCase(temp);
    $scope.kebab = lodash.kebabCase(temp);
    $scope.snake = lodash.snakeCase(temp);
  };

  $scope.clear = function() {
    $scope.camel = '';
    $scope.kebab = '';
    $scope.snake = '';
  };

}]);
