# Learnosity Tech Test - Submission

This repository contains code I modified for the **Learnosity Business Development Engineer Tech Test** ("Learnosity Tech Test" for short).

## Background
[Learnosity](https://www.learnosity.com) provides interactive assessment solutions for organsisations by offering an extensive set of APIs that clients can utilise to create complex, feature rich tests for their users.  These features include the ability to design tests with questions that use interactions such as drag and drop, graph plotting and handwriting recognition.

## The Learnosity Tech Test 
The Learnosity Tech Test involved completing one of the following challenges:

1. Create a Custom Question Type Using Guided Instructions
2. Create an Original Demo Using Learnosity APIs

To quickly familiarise myself with the technology behind Learnosity I chose option 1.

### Important Notes:
* The example custom question types under the /examples directory did not work on my local machine.  This was due to a javascript error in the api.js file that also prevented my custom question type from rendering.
* To overcome this, I created a local copy of the *api.js* file and the *question.learnosity.com* file (which includes the api.js file) and modified the lines of code that was creating the issue.  These two files are in [/src/static/custom](https://github.com/VincentAlcantara/learnosity-tech-test/tree/master/src/static/custom) and can be inspected by searching for the text FIX-20160702

## Quick Start
### Prerequisites:
To view the solution I provided for the Learnosity Tech Test you will need the following prerequisites
* GIT installed
* PHP 5.4 installed

### Instructions
1. Download the code from this repository.  You can use the command:

  ```
  git clone https://github.com/VincentAlcantara/learnosity-tech-test.git
  ```
2. Navigate to the learnosity-tech-test directory that was just downloaded:
  
  ```
  cd learnosity-tech-test.git
  ```
3. Start up the application by typing the command: 
  
  ```
  php -S localhost:8000
  ```
4. Visit [http://localhost:8000/custom_numberpad.php](http://localhost:8000/custom_numberpad.php)


