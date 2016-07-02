/*global LearnosityAmd*/
LearnosityAmd.define(['jquery-v1.10.2'], function ($) {
    'use strict';

    //function to build up HTML table and add onclick handlers - return either as JQuery Element or String of HTML
    function buildHtmlAndInteractions(init) {
        //init.$el contains the rendered custom question type
        var $htmlObj;
        
        //Build up the structure you want to use here, and add any event handling you may want to use
        
        $htmlObj = '<script>function setText(id, value) {  document.getElementById(id).value = value;}</script>' +
        '<div id="numberpad1" class="col-xs-4 btn-group-vertical" role="group" aria-label="...">' +
        '<input id="column1" class="btn btn-secondary btn-block" disabled=disabled/>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 0)">0</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 1)">1</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 2)">2</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 3)">3</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 4)">4</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 5)">5</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 6)">6</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 7)">7</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 8)">8</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column1\', 9)">9</button>' +
        '</div>' +
        '<div id="numberpad2" class="col-xs-4 btn-group-vertical" role="group aria-label="...">' +
        '<input id="column2" class="btn btn-secondary btn-block" disabled=disabled/>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 0)">0</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 1)">1</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 2)">2</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 3)">3</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 4)">4</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 5)">5</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 6)">6</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 7)">7</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 8)">8</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column2\', 9)">9</button>' +
        '</div>' +
        '<div id="numberpad3" class="col-xs-4 btn-group-vertical" role="group" aria-label="...">' +
        '<input id="column3" class="btn btn-secondary btn-block" disabled=disabled/>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 0)">0</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 1)">1</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 2)">2</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 3)">3</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 4)">4</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 5)">5</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 6)">6</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 7)">7</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 8)">8</button>' +
        '<button type="button" class="btn btn-default btn-block" onclick="setText(\'column3\', 9)">9</button>' +
        '</div>';
        
        return $htmlObj;
    }

    //function to change UI based on correct or incorrect answer status
    function addValidationUI(questionAnswerStatus) { 
        var messageHTML;

        // Remove previous Correct/Incorrect message if it exists
        $('#message').remove();

        if (questionAnswerStatus) {
            messageHTML = '<div  id="message" class="alert alert-success" role="alert">Correct</div>';
        } else {
            messageHTML = '<div  id="message" class="alert alert-danger" role="alert">Incorrect</div>';
        }
        $(messageHTML).insertBefore('.lrn_question');
           
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
            // Determine the response by adding the numbers for each column multiplied by its degree
            // Note the by multiplying by a number the result becomes a number
            var $response1 = $('#column1', init.$el).val() * 100;
            var $response2 = $('#column2', init.$el).val() * 10;
            var $response3 = $('#column3', init.$el).val() * 1;

            init.response = $response1 + $response2 + $response3;

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
        //Since this.response is a number we have to convert this.question.valid_response to a number too
        return this.response === Number(this.question.valid_response);

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
