'use strict';

angular.module('quizApp').controller('DetailsCtrl', ['$scope', 'learnerService', 'quizService', function ($scope, learnerService, quizService) {

    $scope.getQuizPromise = function() {

        quizService.getQuiz()
        .then(function(data) {

            $scope.welcome      = data.knowledgeCheck.details.welcome;
            $scope.instruction  = data.knowledgeCheck.details.instruction;

        }, function(error) {

            console.log('err', error );

        });

    };

    $scope.storeDetails = function(learner){

        learnerService.setLearnerDetails( learner.firstName, learner.lastName, learner.email );
        $scope.stageCompleteCallBack(0);

    };

    $scope.getQuizPromise();

}]);
