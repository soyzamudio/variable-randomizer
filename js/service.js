angular.module('Variables')
.factory('Words', ['$http', function($http) {

  function getWords(number) {
    return $http.get('http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=7&limit=' + number + '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
  }

  return {getWords:getWords};
}]);
