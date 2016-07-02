/*global LearnosityAmd*/
LearnosityAmd.define(['jquery-v1.10.2'], function ($) {
    'use strict';

    //function to build up HTML table and add onclick handlers - return either as JQuery Element or String of HTML
    function buildHtmlAndInteractions(init) {

        var $htmlObj;

        //Build up the structure you want to use here, and add any event handling you may want to use
       
        //
        //Learnosity Tech Test: Complete here
        //
        
        return $htmlObj;
    }

    //function to change UI based on correct or incorrect answer status
    function addValidationUI(questionAnswerStatus) {
     
        //
        //Learnosity Tech Test: Complete here
        //
        
    }



    //Learnosity:
    //Demo framework for custom question starts here. 
    //You don't have to change anything, except for the "isValid() function
    //but you can if yo see something useful.


    function CustomNumberPad(init) {

        //create example table and button elements for constructing numberpad.
        var $questionTypeHtml = buildHtmlAndInteractions(init);
        init.$el.html($questionTypeHtml);

        //add on validate button.
        init.events.on('validate', function () {
            if (init.response !== undefined) {

                //check if answer is correct, and pass true or false to the function to update validation UI
                var scorer = new CustomNumberPadScorer(init.question, init.response);

                addValidationUI(scorer.isValid());
            }
        });

        init.events.trigger('ready');
    }

    function CustomNumberPadScorer(question, response) {
        this.question = question;
        this.response = response;
    }


    CustomNumberPadScorer.prototype.isValid = function () {
        //return true or false depending on student answer
        

        //
        //Learnosity Tech Test: Complete here
        //

    };

    CustomNumberPadScorer.prototype.score = function () {
        return this.isValid() ? this.maxScore() : 0;
    };

    CustomNumberPadScorer.prototype.maxScore = function () {
        return this.question.score || 1;
    };

    return {
        Question: CustomNumberPad,
        Scorer:   CustomNumberPadScorer
    };
});
