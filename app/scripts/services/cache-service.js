'use strict';

angular.module('quizApp').factory('cacheService', function($cacheFactory) {

    return $cacheFactory('quiz');

});

//angular.module('quizApp').factory('removeCacheService', function($cacheFactory){
    //return cacheService.remove('model/data.json');
//});
