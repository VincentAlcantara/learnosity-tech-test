/*global LearnosityAmd*/
LearnosityAmd.define(['jquery-v1.10.2'], function ($) {
    'use strict';

    //function to build up HTML table and add onclick handlers - return either as JQuery Element or String of HTML
    function buildHtmlAndInteractions(init) {
        //init.$el contains the rendered custom question type
        var $htmlObj;
        
        //Build up the structure you want to use here, and add any event handling you may want to use
        
        $htmlObj = '<script>function setText(id, value) {' + 
            'document.getElementById(id).value = value;' +
            '}' + 
        '</script>' +
        '<table class="table">' +
          '<tr id="responseRow" class="">' +
            '<td><input value="" id="number1" class="table-header"/></td>' +
            '<td><input value="" id="number2" class="table-header"/></td>' +
            '<td><input value="" id="number3" class="table-header"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="0" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="0" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="0" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="1" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="1" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="1" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="2" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="2" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="2" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="3" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="3" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="3" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="4" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="4" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="4" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="5" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="5" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="5" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="6" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="6" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="6" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="7" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="7" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="7" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="8" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="8" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="8" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option" value="9" onclick="setText(\'number1\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="9" onclick="setText(\'number2\', value)"/></td>' +
            '<td><input type="button" class="btn-option" value="9" onclick="setText(\'number3\', value)"/></td>' +
          '</tr>'+
        '</table>';
        
        return $htmlObj;
    }

    //function to change UI based on correct or incorrect answer status
    function addValidationUI(questionAnswerStatus) { 
        var messageHTML;

        // Remove previous Correct/Incorrect message if it exists
        $('#message').remove();

        if (questionAnswerStatus) {
            messageHTML = '<strong id="message">Correct</strong>'
            $('#responseRow').removeClass('row-invalid');
            $('#responseRow').addClass('row-valid');
        } else {
            messageHTML = '<strong id="message">Incorrect</strong>';
            $('#responseRow').removeClass('row-valid');
            $('#responseRow').addClass('row-invalid');
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
            // Note by multiplying by a number the result becomes a number
            var $response1 = $('#number1', init.$el).val() * 100;
            var $response2 = $('#number2', init.$el).val() * 10;
            var $response3 = $('#number3', init.$el).val() * 1;

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
