<head>
<?php
    include_once 'src/sdk/src/LearnositySdk/autoload.php';


    use LearnositySdk\Request\Init;
    use LearnositySdk\Utils\Uuid;


    $session_id = Uuid::generate();

    $consumer_key = 'yis0TYCu7U9V4o7M';
    $consumer_secret = '74c5fd430cf1242a527f6223aebd42d30464be22';

    $security = [
    'user_id'      => 'open_web_demo',
    'domain'       => $_SERVER['SERVER_NAME'],
    'consumer_key' => $consumer_key,
    'timestamp'    => gmdate('Ymd-Hi')
    ];
    $init = new Init('questions', $security, $consumer_secret, [
        'id'                   => 'open_web_demo',
        'name'                 => 'Open Web Demo',
        'course_id'            => 'open-web',
        'type'                 => 'local_practice',
        'state'                => 'initial',
        'session_id'           => $session_id
        ]);

        ?>
        <script>
        var activity = <?php echo $init->generate(); ?>;
        </script>

        <style>

        .question-container {
            width:610px;
            padding: 7px;
        }

        </style>

    </head>
    <body>
        <div class="question-container">
            <span class="learnosity-response question-custom-numberpad-response-1"></span>
            <button class="btn btn-primary pull-right" id="validate_question">Check Answer</button>
        </div>

        <link rel="stylesheet" href="<?php echo $env['www'] ?>/src/static/vendor/css/bootstrap.min.css">
        <script src="<?php echo $env['www'] ?>/src/static/vendor/js/jquery-1.11.0.min.js"></script>
        <script src="/src/static/custom/questions.learnosity.js"></script>
        <script>


        var customQuestionJson = {
            "response_id": "custom-numberpad-response-1",
            "type": "custom",
            "js": "//<?php echo $_SERVER['HTTP_HOST'] ?>/custom_numberpad_stubbed.js",
            "css": "//<?php echo $_SERVER['HTTP_HOST'] ?>/custom_numberpad.css",
            "stimulus": "<strong>What is 4 times 82?</strong>",
            "valid_response": "328",
            "score": 1
        };


        activity.questions = [customQuestionJson];

        var questionsApp = window.questionsApp = LearnosityApp.init(activity,  {
            readyListener: function() {
                $('#validate_question').click(function(event) {
                    questionsApp.question('custom-numberpad-response-1').validate();
                });
            }
        });


        </script>
    </body>
