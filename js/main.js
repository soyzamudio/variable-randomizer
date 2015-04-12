angular.module('Variables', ['ui.router', 'ngLodash', 'ngClipboard'])
.config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath('bower_components/zeropclipboard/dist/ZeroClipboard.swf');
}])
.controller('HomeController', ['$scope', 'lodash', 'Words', function($scope, lodash, Words) {
  $scope.generateRandom = function() {
    var temp = '';
    Words.getWords($scope.number)
    .then(function(response) {
      console.log(response);
      response.data.forEach(function(e) {
        console.log(e);
        temp += ' ' + e.word;
      });

      $scope.camel = lodash.camelCase(temp);
      $scope.kebab = lodash.kebabCase(temp);
      $scope.snake = lodash.snakeCase(temp);
    });
    $scope.clear();
  };

  $scope.clear = function() {
    $scope.camel = '';
    $scope.kebab = '';
    $scope.snake = '';
  };

}]);
