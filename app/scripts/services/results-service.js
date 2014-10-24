'use strict';

angular.module('quizApp').factory('resultsService', function() {

    var factory          = {};
    var passPercent      = 80;

    factory.submitResults = function (course, firstName, lastName, email, pts, hasPassed, $){

        $.ajax({
           type: 'POST',
           data: {
               course:      JSON.stringify( course ),
               firstName:   JSON.stringify( firstName ),
               lastName:    JSON.stringify( lastName ),
               email:       JSON.stringify( email ),
               pts:         JSON.stringify( pts ),
               hasPassed:   JSON.stringify( hasPassed )
           },
           url: 'submit.php',
           success: function( data ){
              console.log('if you are using a node server, this php email service will not work.', data );
           }
       });

    };

    factory.checkResults = function ( userPts, ptsMax ){

        var userPercent = ptsMax / userPts * 100;

        if( userPercent >= passPercent ){

            return true;

        } else {

            return false;

        }

    };

    return factory;

});
