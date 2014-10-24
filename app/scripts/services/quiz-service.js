'use strict';

angular.module('quizApp').factory('quizService', ['$http', 'cacheService', function($http, cacheService, $q) {

    return {
        getQuiz: function() {
            return $http.get('model/data.json', {cache:cacheService})
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        response.data.knowledgeCheck.questionLength = Object.keys( response.data.knowledgeCheck.questions ).length;
                        return response.data;
                    } else {
                        return $q.reject(response.data);
                    }
                }, function(response) {
                    return $q.reject(response.data);
            	});
        }
    };

}]);
