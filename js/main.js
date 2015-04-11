angular.module('Variables', ['ui.router', 'ngLodash', 'ngClipboard'])
.config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath('bower_components/zeropclipboard/dist/ZeroClipboard.swf');
}])
.controller('HomeController', ['$scope', 'lodash', function($scope, lodash) {
  var str = 'Occaecat mollit sit enim ex reprehenderit id ut veniam et do cupidatat dolor aliqua Sit ad veniam Lorem voluptate consequat anim commodo Aliqua est occaecat ad sint consectetur incididunt consequat Eiusmod magna pariatur laborum reprehenderit pariatur adipisicing occaecat esse dolore officia Ullamco do tempor aliqua magna ex ipsum consectetur elit Esse mollit ut sint aute incididunt ex ex exercitation eu exercitation ea aute pariatur est Occaecat esse nostrud eiusmod tempor et Deserunt proident amet do mollit id excepteur quis et officia dolor Cupidatat laborum enim voluptate ipsum irure ex nisi deserunt magna'
  $scope.words = str.split(' ');

  $scope.generateRandom = function() {
    var temp = '';
    for (var i = 0; i < $scope.number; i++) {
      var random = Math.floor((Math.random() * $scope.words.length));
      temp += ' ' + $scope.words[random];
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
