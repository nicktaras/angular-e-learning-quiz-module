'use strict';

angular.module('quizApp').controller('ResultsCtrl', ['$http', '$scope', '$location', 'learnerService', 'quizService', 'resultsService', function ($http, $scope, $location, learnerService, quizService, resultsService) {

    $scope.learner          = learnerService.getLearner();

    $scope.getQuiz = function() {

        quizService.getQuiz()
            .then(function(data) {

                $scope.quiz = data.knowledgeCheck;

                var feedbackStr = data.knowledgeCheck.results.feedbackStr;
                var newFeedbackStr = feedbackStr.replace('[NAME]', $scope.learner.firstName );

                $scope.title = newFeedbackStr;
                $scope.results = data.knowledgeCheck.results.title;

                $scope.learner.hasPassed = resultsService.checkResults( $scope.quiz.questionLength, $scope.learner.pts );
                learnerService.setPassGrade( $scope.learner.hasPassed );

                $scope.getFeedBack( $scope.learner.hasPassed );

            }, function(error) {

                console.log('no data', error);

            });
    };

    $scope.getQuiz();

    $scope.getFeedBack = function( hasPassed ) {

        var feedback;

        if( hasPassed ) {

            feedback = $scope.quiz.results.passed;

        } else {

            feedback = $scope.quiz.results.failed;

        }

        $scope.feedback = feedback;

    };

    $scope.retry = function(){
         $location.path('/test');
    };

    $scope.submit = function() {
        resultsService.submitResults( $scope.quiz.quiz.course, $scope.learner.firstName, $scope.learner.lastName, $scope.learner.email, $scope.learner.pts, $scope.learner.hasPassed );
    };

}]);
