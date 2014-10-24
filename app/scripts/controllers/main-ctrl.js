'use strict';

angular.module('quizApp').controller('MainCtrl', ['$scope', '$location', '$routeParams', 'quizService', function ($scope, $location, $routeParams, quizService) {

    $scope.stages                 = ['details','intro','test','results'];
    $scope.stage                  = 0;

    $scope.getQuizPromise = function() {

        quizService.getQuiz()
        .then(function(data) {

            $scope.title = data.knowledgeCheck.quiz.course;

        }, function(error) {

            console.log('err', error );

        });

    };

    $scope.stageCompleteCallBack  = function(stage){

        if(stage <= $scope.stages.length){
            stage += 1;
            $location.path($scope.stages[stage]);
        }

    };

    $scope.getQuizPromise();

}]);
