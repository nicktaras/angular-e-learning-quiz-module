'use strict';

angular.module('quizApp').factory('learnerService', function() {

    var factory = {};
    var learner = { pts: 0, hasPassed: false };

    if(sessionStorage.length > 0){

        learner.firstName = sessionStorage.firstName;
        learner.lastName  = sessionStorage.lastName;
        learner.email     = sessionStorage.email;
        learner.pts       = sessionStorage.pts;
        learner.hasPassed = sessionStorage.hasPassed;
        console.log('session', sessionStorage );

    }

    factory.setLearnerDetails = function ( firstName, lastName, email ){
        learner.firstName = sessionStorage.firstName  = firstName;
        learner.lastName  = sessionStorage.lastName   = lastName;
        learner.email     = sessionStorage.email      = email;
    };

    factory.getLearner = function (){
        return learner;
    };

    factory.setPassGrade = function ( hasPassed ){
        learner.hasPassed = sessionStorage.hasPassed = hasPassed;
    };

    factory.setLearnerPts = function ( pts ){
        console.log('learner...', learner.pts);
        sessionStorage.removeItem('pts');
        learner.pts = sessionStorage.pts = (learner.pts + pts);
        console.log( sessionStorage.pts );
    };

    factory.reset = function(){
        sessionStorage.removeItem('pts');
        learner.pts = 0;
    };

    return factory;

});
