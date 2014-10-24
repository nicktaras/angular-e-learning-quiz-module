'use strict';

angular.module('quizApp').controller('TestCtrl', ['$scope','$http','learnerService','quizService', function ($scope, $http, learnerService, quizService) {

    $scope.currentQuestionNumber    = 1;
    $scope.isComplete               = false;
    $scope.isCorrect                = false;

    $scope.getQuizPromise = function() {

        learnerService.reset();

        quizService.getQuiz()
        .then(function(data) {

            $scope.dataRef = data;
            $scope.dataLength = data.knowledgeCheck.questionLength;
            $scope.setQuestion( data.knowledgeCheck.questions );
            $scope.setTitle( data.knowledgeCheck.quiz );

        }, function(error) {

            console.log('err', error );

        });

    };

    $scope.setTitle = function( data ){
        $scope.title = data.title + ' ' + $scope.currentQuestionNumber + ':';
    };

    $scope.setQuestion = function( data ){
        $scope.question = data[ $scope.currentQuestionNumber ].text;
        $scope.options  = data[ $scope.currentQuestionNumber ].options;
    };

    $scope.next = function(){

        if($scope.currentQuestionNumber < $scope.dataLength){
            $scope.isComplete = false;
            $scope.result = '';
            $scope.selectedIndexNum = undefined;
            $scope.currentQuestionNumber = $scope.currentQuestionNumber + 1;
            $scope.setQuestion( $scope.dataRef.knowledgeCheck.questions );
            $scope.setTitle( $scope.dataRef.knowledgeCheck.quiz );

        } else {

            $scope.stageCompleteCallBack(2);

        }

    };

    $scope.selectedIndex = function( $index ){
        $scope.selectedIndexNum = $index;
        $scope.submit();
    };

    $scope.submit = function(){

        $scope.isComplete = true;

        var _dataRef = $scope.dataRef.knowledgeCheck.questions;

        if( _dataRef[ $scope.currentQuestionNumber ].answer === $scope.selectedIndexNum ){

            $scope.isCorrect = true;
            $scope.result = _dataRef[ $scope.currentQuestionNumber ].correct;
            learnerService.setLearnerPts( _dataRef[ $scope.currentQuestionNumber ].pts );

        } else {

            $scope.isCorrect = false;
            $scope.result = _dataRef[ $scope.currentQuestionNumber ].incorrect;

        }

        $scope.ptsAdded = '+ ' + _dataRef[ $scope.currentQuestionNumber ].pts + 'pts';
        $scope.feedback = _dataRef[ $scope.currentQuestionNumber ].feedback;

    };

    $scope.getQuizPromise();

}]);
