/*global LearnosityAmd*/
LearnosityAmd.define(['jquery-v1.10.2'], function ($) {
    'use strict';

    //function to build up HTML table and add onclick handlers - return either as JQuery Element or String of HTML
    function buildHtmlAndInteractions(init) {
        var $htmlObj;
        
        //$htmlObj contains the widget for the numberpad.  The widget contains HTML markup as well as event handling
        // for the elements inside the HTML
        //
        //The numberpad is made up of a table with 3 columns.  From left to right the columns represent
        // the hundreds column, tens column and the ones column in a decimal number system.  Each row below the header
        // contains the digits 0-9 in ascending order.  When the user clicks on a digit in a cell, the header of that 
        // column is populated with the digit that was clicked.
        // In this way a user can enter any number from 000 to 999, however leading 0's will be ignored. i.e. 005 = 5.
        //
        //To construct the html, a table tag <table> was used with the table rows <tr> represented as follows:
        // Row  1: [],[],[] (header which is initially blank)
        // Row  2: 0, 0, 0
        // Row  3: 1, 1, 1
        // ...
        // Row 11: 9, 9, 9
        //
        //For Rows 1-11 there's an onclick event that performs the following:
        // 1. Set the header of the column to the number that was clicked
        // 2. Toggle the ".pressed" class.  This toggles the colour of the cell's background to indicate which cell was clicked.
        //
        //To prevent the user from entering text in to the header, we set the readonly attribute.
        //
        //Currently there's no validation if the user presses 'Check Answer' and hasn't entered any numbers.  The Incorrect
        // message will be displayed in this case.

        $htmlObj = '<script>function setText(id, value) {' + 
            //The event handling could've been handled by vanilla javascript such as the line below:
            // 'document.getElementById(id).value = value;',
            // however since we have jQuery($) available, let's use that to make DOM element selection easier.
            //
            'var column = $("#" + id);' +
            'column.val(value);' +
            'var previousPressedButton = $(".btn-option." + id + ".pressed");' +
            'previousPressedButton.toggleClass("pressed");' +
            'var pressedButton = $(".btn-option:focus");' +
            'pressedButton.toggleClass("pressed");' +
            '}' + 
        '</script>' +
        '<table class="table">' +
          '<tr id="responseRow" class="">' +
            '<td><input value="" id="hundredsCol" class="table-header" readonly/></td>' +
            '<td><input value="" id="tensCol" class="table-header" readonly/></td>' +
            '<td><input value="" id="onesCol" class="table-header" readonly/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="0" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="0" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="0" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="1" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="1" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="1" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="2" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="2" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="2" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="3" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="3" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="3" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="4" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="4" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="4" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="5" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="5" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="5" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="6" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="6" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="6" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="7" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="7" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="7" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="8" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="8" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="8" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>' +
          '<tr>' +
            '<td><input type="button" class="btn-option hundredsCol" value="9" onclick="setText(\'hundredsCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option tensCol" value="9" onclick="setText(\'tensCol\', value)"/></td>' +
            '<td><input type="button" class="btn-option onesCol" value="9" onclick="setText(\'onesCol\', value)"/></td>' +
          '</tr>'+
        '</table>';
        
        return $htmlObj;
    }

    //function to change UI based on correct or incorrect answer status
    function addValidationUI(questionAnswerStatus) { 

    //If the response is correct, we colour the background of the header (responseRow) green and display a 'Correct' message
    //  else we colour the background of the header red and display an 'Incorrect' message.
    
        var messageHTML;

        // Remove previous Correct/Incorrect message if it exists
        $('#message').remove();

        if (questionAnswerStatus) {
            messageHTML = '<strong id="message" class="pull-right"><span class="glyphicon glyphicon-ok correct">&nbsp;</span>Correct</strong>'
            $('#responseRow').removeClass('row-invalid');
            $('#responseRow').addClass('row-valid');
        } else {
            messageHTML = '<strong id="message" class="pull-right"><span class="glyphicon glyphicon-remove incorrect">&nbsp;</span>Incorrect</strong>';
            $('#responseRow').removeClass('row-valid');
            $('#responseRow').addClass('row-invalid');
        }
        //To enhance the UI a bit, we add a fadeIn animation to distinguish between two Incorrect submissions.
        $(messageHTML).hide().appendTo('.lrn_stimulus_content.lrn_clearfix').fadeIn(2000);

           
    }

    function CustomNumberPad(init) {

        //create example table and button elements for constructing numberpad.
        var $questionTypeHtml = buildHtmlAndInteractions(init);
        init.$el.html($questionTypeHtml);

        //add on validate button.
        init.events.on('validate', function () {
            // Determine the response by adding the numbers for each column multiplied by its place value
            // Note by multiplying by a number the result becomes a number
            // This is important when comparing later in the isValid() function
            var $response1 = $('#hundredsCol', init.$el).val() * 100;
            var $response2 = $('#tensCol', init.$el).val() * 10;
            var $response3 = $('#onesCol', init.$el).val() * 1;

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
