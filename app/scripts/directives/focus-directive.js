'use strict';

angular.module('quizApp').directive('focus', function() {
    return {
        link: function(scope, element) {
            element[0].focus();
        }
    };
});
