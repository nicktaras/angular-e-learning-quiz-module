'use strict';

angular.module('quizApp').controller('IntroCtrl', ['$scope', 'quizService', function ($scope, quizService) {

    $scope.getQuizPromise = function() {

        quizService.getQuiz()
        .then(function(data) {

            $scope.title        = data.knowledgeCheck.intro.title;
            $scope.motivation   = data.knowledgeCheck.intro.motivation;
            $scope.subTitle     = data.knowledgeCheck.intro.subTitle;
            $scope.description  = data.knowledgeCheck.intro.description;

        }, function(error) {

            console.log('err', error );

        });

    };

    $scope.start = function(){
        $scope.stageCompleteCallBack(1);
    };

    $scope.getQuizPromise();

}]);
