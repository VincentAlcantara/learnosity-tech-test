# learnosity-tech-test
Learnosity Business Development Engineer Tech Test - Answer Code

This repository contains code I modified for the "Learnosity Business Development Engineer Tech Test" (hereby referred to as "Learnosity Tech Test" for brevity).

The original source of the code was provided from the following location:
https://drive.google.com/open?id=0B0ugW2eYewAgUUNNRDU2bE9tcVk

Learnosity provides interactive assessment solutions for organsisations by offering a rich set of APIs that clients can utilise to create complex, feature rich tests for their users.  For example rather than just offering  simple input fields like radio buttons and input text, Learnosity provides their client's the ability to ask questions using interactions such as drag and drop, graph plotting and handwriting recognition.

The Learnosity Tech Test offered two options to complete:
1. Create a Custom Question Type Using Guided Instructions
2. Create an Original Demo Using Their APIs

I decided on option 1.

IMPORTANT:
The examples provided from the original source code did not work on my local machine.  The custom question types for percentage bar and short text failed to render due to a javascript error.  To overcome this, I created a local copy of the api.js and question.learnosity.com files and changed the lines of code that was creating the issue.  These two files are in /src/static/custom.
