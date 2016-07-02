/*global LearnosityAmd*/
LearnosityAmd.define(['jquery-v1.10.2'], function ($) {
    'use strict';

    function CustomShorttext(init) {
        this.init = init;

        init.$el.html('<input type="text" />');

        var $response = $('input', init.$el);

        if (init.response) {
            $response.val(init.response);
        }

        $response.change(function (event) {
            init.events.trigger('changed', event.currentTarget.value);
        });

        $response.focus(function (event) {
            $(this).removeClass("shorttext-invalid");
        });
        init.events.on('validate', function () {
            if ($response !== undefined) {

                //check if answer is correct, and pass true or false to the function to update validation UI
                var scorer = new CustomShorttextScorer(init.question, $response.val());
                if (scorer.isValid()) {
                    $response.addClass("shorttext-valid");
                } else {
                    $response.addClass("shorttext-invalid");
                }
            }
        });

        init.events.trigger('ready');
    }

    function CustomShorttextScorer(question, response) {
        this.question = question;
        this.response = response;
    }

    CustomShorttextScorer.prototype.isValid = function () {
        return this.response === this.question.valid_response;
    };

    CustomShorttextScorer.prototype.score = function () {
        return this.isValid() ? this.maxScore() : 0;
    };

    CustomShorttextScorer.prototype.maxScore = function () {
        return this.question.score || 1;
    };

    return {
        Question: CustomShorttext,
        Scorer:   CustomShorttextScorer
    };
});
